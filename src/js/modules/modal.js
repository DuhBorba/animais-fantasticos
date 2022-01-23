export default function initModal(){
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if(btnOpen && btnClose && containerModal){
  
    function toggleModal(event){
      event.preventDefault();
      containerModal.classList.toggle('active');
    }
  
    function clickOutModal(event){
      if(event.target === this){
        toggleModal(event);
      }
    }
  
    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutModal);
  
  } 
}
