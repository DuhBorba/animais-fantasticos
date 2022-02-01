export default function outsideClick(element, events, callback){
  const html = document.documentElement;

  if(!element.hasAttribute('data-outside')){
    events.forEach(userEvent => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      })
      element.setAttribute('data-outside', '');
    })
  }
    
  function handleOutsideClick(event){
    if(!element.contains(event.target)){
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      element.removeAttribute('data-outside');
      callback();
    }
  }
}