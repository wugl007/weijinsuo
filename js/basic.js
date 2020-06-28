/*$(function () {

    function resize() {
        var windowWidth = $(window).width();
        // var windowWidth = window.innerWidth;
        // console.log(windowWidth);
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function (i,item) {
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            $item.css('backgroundImage','url("'+ imgSrc+'")');/!*!//注意url不是变量，
            加单引号*!/

            // console.log(111);
            if(isSmallScreen){
                $item.html('<img src="'+ imgSrc +'" />');
                // $item.html('<img src="' + imgSrc + '" alt="" />');
            }else{
                $item.empty();
            }
        })
    }
    // $(window).on('resize',resize).trigger('resize');
    $(window).on('resize', resize).trigger('resize');

})*/


$(function () {
    var windowWidth = $(window).width();
    // console.log(windowWidth);

    function resize() {
        var isSmallScreen = windowWidth <768;
        $('#main_ad > .carousel-inner > .item').each(function (i,item) {
            $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? 'image-xs':'image-lg');
            $item.css('backgroundImage','url("'+imgSrc  +'")');

            // console.log(222);
            if(isSmallScreen){
                $item.html('<img src="'+ imgSrc + '"/>');
                // console.log(111);
            }else{
                $item.empty();
            }
        });

    }
    $(window).on('resize',resize).trigger('resize');


    // 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();

    var $ulContainer = $('.nav-tabs');
    var width = 30;
   $ulContainer.children().each(function (i,element) {
       // console.log(element.clientWidth);
       width += element.clientWidth;
   });
    if(width > $(window).width()){
        $ulContainer.css('width',width)
            .parent().css('overflow-x','scroll')
    }

    // 给news中的a点击注册事件
    // var $newTitle = $('.news-title');/*点不要忘了*/
    // $('#news .nav-pills a').on('click',function () {
    //      var  $this = $(this);
    //     var title = $this.data('title');
    //     console.log(title);
    //     $newTitle.text(title);
    // });

    var $newsTitle = $('.news-title');
    $('#news .nav-pills a').on('click',function () {
        var $this = $(this);
        var title = $this.data('title');
        // console.log(title);
        $newsTitle.text(title);

    });

    //手机轮播图滑动
    var $carousel = $('.carousel');
    var stareX,endX;
    var offset = 50;
    $carousel.on('touchstart',function (e) {
        stareX = e.originalEvent.touches[0].clientX;
    })

    $carousel.on('touchmove',function (e) {
        // console.log(e);
        endX = e.originalEvent.touches[0].clientX;
        // console.log(endX);
    })

    $carousel.on('touchend',function (e) {
        var distance = Math.abs(stareX - endX);
        if(distance > offset){
            $(this).carousel(stareX > endX ? 'next': 'prev');
        }
    });



});
