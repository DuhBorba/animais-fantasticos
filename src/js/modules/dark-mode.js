export default function initDarkMode(){
  const btn = document.querySelector('.btn-dark-light');
  const eventos = ['click', 'touchstart'];

  function changeDarkLight(event){
    document.body.classList.toggle('dark-document');
    btn.classList.toggle('dark-mode');

    if(document.body.classList.value == 'dark-document'){
      localStorage['theme'] = 'dark-document';
    } else {
      localStorage.removeItem('theme');
    }
  }

  function setValuesStorage(){
    if(localStorage['theme']){
      document.body.classList.add(localStorage['theme']);
    }
  }

  eventos.forEach((evento) => {
    btn.addEventListener(evento, changeDarkLight);
  });

  setValuesStorage();
}