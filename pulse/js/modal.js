
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