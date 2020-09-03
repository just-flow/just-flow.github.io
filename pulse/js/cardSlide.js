const tabsParent = document.querySelector('.catalog__tabs'),
tabs = document.querySelectorAll('.catalog__tab'),
content = document.querySelectorAll('.catalog__content'),
tabsText = document.querySelectorAll('.catalog__tab_text'),
tabsContent = document.querySelectorAll('.catalog-item__content'),
btnOpen = document.querySelectorAll('.catalog-item__link'),
btnClose = document.querySelectorAll('.catalog-item__back'),
nextTabContent = document.querySelectorAll('.catalog-item__list');

function hideElement(){
  content.forEach((item) => {
    item.classList.remove('catalog__content_active');
  });
  tabs.forEach((item)=>{
    item.classList.remove('catalog__tab_active');
  });
}
function showElem(i = 0){
  content[i].classList.add('catalog__content_active');
  tabs[i].classList.add('catalog__tab_active');
}
hideElement();
showElem();

tabsParent.addEventListener('click', (event)=>{
  const target = event.target;
  if(target && target.classList.contains('catalog__tab_text')){
    tabsText.forEach((item, i)=>{
      if(target == item){
        hideElement();
        showElem(i);
      }
    });
  }
});

function toggleSlide(item){
  item.forEach((ev)=>{
    ev.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = e.target;
      target.style.cursor = 'pointer';
      if(target){
      item.forEach((i, index)=>{
        if(target == i){
          tabsContent[index].classList.toggle('catalog-item__content_active');
          nextTabContent[index].classList.toggle('catalog-item__list_active');
        }
      });
      }
    });
    
  });
}
toggleSlide(btnOpen);
toggleSlide(btnClose);