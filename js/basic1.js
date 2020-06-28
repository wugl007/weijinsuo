/**
 * 根据屏幕宽度的变化决定轮播图片应该展示什么
 * @return {[type]} [description]
 */
$(function () {
    function resize() {
        var windowWidth = $(window).width();
        // console.log(windowWidth);
        var isSmallScereen = windowWidth < 768;

        $('#main_ad > .carousel-inner > .item').each(function (i,item) {
            var  $item = $(item);
            var imgSrc = $item.data(isSmallScereen ? 'image-xs' : 'image-lg');//注意这里'image-xs'前面不用加前缀
            $item.css('backgroundImage','url("'+ imgSrc +'")');
            if(isSmallScereen){
                $item.html('<img src="' + imgSrc + '" alt="" />');
            }else{
                $item.empty();
            }
        });

    }
    $(window).on('resize',resize).trigger('resize');

    // 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();

    /**
     * 控制标签页的标签容器宽度
     */
    var $ulContainer = $('.nav-tabs');
    var width = 30;
    $ulContainer.children().each(function (i,e) {
       width += e.clientWidth;
    });
        if(width < $(window).width()){
            $ulContainer.css('width',width).parent().css('overflow-x','scroll');
        }

    // a点击注册事件(a赋值title)
    var $newTitle = $('.news-title');
        $('#news .nav-pills a').on('click',function () {
           var $this = $(this);
           var title = $this.data('title');
           $newTitle.text(title);
        });


    // 1. 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上的轮播图容器，这里考虑兼容选择类
    var $carousels = $('.carousel');
    var startX, endX ;
    var offset = 50;
    // 注册滑动事件
    $carousels.on('touchstart',function (e) {
        startX = e.originalEvent.touches[0].clientX;
        // console.log(startX);
    });
    $carousels.on('touchmove',function (e) {
        endX = e.originalEvent.touches[0].clientX;
        // console.log(endX);
    });
    $carousels.on('touchend',function (e) {
        var distance = Math.abs(startX - endX);
        if(distance > offset){
            $(this).carousel(startX > endX ? 'next':'prev');
        }
    });



});