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


      // MODAL
  const btnConcult = document.querySelectorAll('[data-modal=consultation]'),
  overlay = document.querySelector('.overlay'),
  modalConsult = document.querySelector('.overlay_consultation'),
  btnOrder = document.querySelectorAll('.button_mini'),
  modalOrder = document.querySelector('.order'),
  modalClose =document.querySelectorAll('.modal__close'),
  modalNewText = document.querySelectorAll('.catalog-item__subtitle'),
  modalText = document.querySelector('.modal__descr_text');

  console.log(modalNewText[1]);
function modalShow(btn, modal){
btn.forEach((item)=>{
item.addEventListener('click', (e)=>{
  document.body.style.overflow = 'hidden';
  overlay.classList.add('overlay_active');
  const target = e.target;
  if(modal && modal.classList.contains('order')){
    btn.forEach((i, index)=>{
      if(target === i){
        modal.classList.add('order_active');
            modalText.innerHTML= `${modalNewText[index].textContent}`;
      }
    });
  }
  if(modal && modal.classList.contains('overlay_consultation')){
    modal.classList.add('overlay_consultation_active');
  }
});
});
}
function modalAllClose(){
document.body.style.overflow = 'scroll';
overlay.classList.remove('overlay_active');
modalConsult.classList.remove('overlay_consultation_active');
modalOrder.classList.remove('order_active');
}
modalClose.forEach((i)=>{
i.addEventListener('click', modalAllClose);
});
modalShow(btnConcult, modalConsult);
modalShow(btnOrder, modalOrder);
overlay.addEventListener('click', (e)=>{
if(e.target === overlay){
modalAllClose();
}
});
document.addEventListener('keydown', (e)=>{
if(e.code === 'Escape'){
modalAllClose();
}
});

    //serverForm
    $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type:'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()
      }).done(function(){
        $(this).find('input').val('');
        modalAllClose();
        $('.overlay, .thanks').fadeIn('slow');
        $('.thanks').classList.add('.thanks_active');
        $('form').trigger('reset');
      });
      return false;
    });


    // PAGE UP

      $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
          $('.page_up').fadeIn();
        }else{
          $('.page_up').fadeOut();
        }
      });
      $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
  });
  });
