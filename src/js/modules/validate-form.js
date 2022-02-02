export default function initValidateForm(){
  const form = document.getElementById('login');

  function handleFormChange(event){
    const target = event.target;

    if(!target.checkValidity()){
      target.classList.add('invalido');

      target.nextElementSibling.innerText = target.validationMessage;
      
    } else {
      target.classList.remove('invalido');
      target.nextElementSibling.innerText = '';
    }
  }

  form.addEventListener('change', handleFormChange);
}