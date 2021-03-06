(function($){
  var navTop = null;

  function sliceScroll() {
    if(navTop !== null && $(this).scrollTop() >= navTop)
      $('.rex-main-content .rex-page-nav').addClass('sticky');
    else $('.rex-main-content .rex-page-nav').removeClass('sticky');
  }
  function sliceResize(){
    $('.rex-main-content .rex-page-nav').addClass('sized').width($('.rex-main-content .rex-page-nav').parent().width());
  }

  $(window).scroll(sliceScroll).resize(sliceResize);

  $(function(){
    if($('.rex-main-content .rex-page-nav').length > 0) {
      navTop = $('.rex-main-content .rex-page-nav').offset().top;
      sliceResize();
    }
  });
})(jQuery);