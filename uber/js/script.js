const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu_item');
const footerLeft = document.querySelector('.footer_left');
const footerCenter = document.querySelector('.footer_center');
const footerRight = document.querySelector('.footer_right');
const mainPage = document.getElementById('main_page');


burger.addEventListener('click',() => {
    burger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    if(burger.classList.contains('hamburger_active')){
        document.body.style.overflow ='hidden';
    }
    else{
        document.body.style.overflow ='';
    }
});


menuItem.forEach((e)=>{
    e.addEventListener('click', ()=>{
        burger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        document.body.style.overflow ='';
        delay('3s');
        setTimeout(()=>delay('0s'), 3000);
    });
});

function delay(time){
    document.body.style.transition = `${time} all`;
}

if (window.matchMedia("(max-width: 575px)").matches) {
    footerLeft.classList.add('order-2');
    footerCenter.classList.add('order-1');
    footerRight.classList.add('order-3');
  } else if (footerLeft.classList.contains('order-2')) {
    footerLeft.classList.remove('order-2');
    footerCenter.classList.remove('order-1');
    footerRight.classList.remove('order-3');
  }

console.log(mainPage.getBoundingClientRect().top);