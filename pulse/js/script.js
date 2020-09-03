$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/carousel/prev.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/carousel/next.svg"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    //   $(this)
    //     .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //     .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    // });

    // function toggleslide(item){
    //   $(item).each(function(i){
    //     $(this).on('click', function(e){
    //       e.preventDefault();
    //       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });
    //   });
    // }
    // toggleslide('.catalog-item__link');
    // toggleslide('.catalog-item__back');
  });
