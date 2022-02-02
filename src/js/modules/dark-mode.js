export default function initDarkMode(){
  const btn = document.querySelector('.btn-dark-light');
  const eventos = ['click', 'touchstart'];

  function changeDarkLight(event){
    document.body.classList.toggle('dark-document');
    btn.classList.toggle('dark-mode');
  }

  eventos.forEach((evento) => {
    btn.addEventListener(evento, changeDarkLight);
  })
}