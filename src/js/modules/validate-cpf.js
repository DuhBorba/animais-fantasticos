export default class ValidateCpf{
  constructor(element){
    this.element = element;
  }
  clean(cpf){
    return cpf.replace(/\D/g, '');
  }
  construct(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  formatter(cpf){
    const cpfClean = this.clean(cpf);
    return this.construct(cpfClean);
  }
  validate(cpf){
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);

    return (matchCpf && matchCpf[0] === cpf);
  }
  validateChange(cpfElement){
    if(this.validate(cpfElement.value)){
      cpfElement.value = this.formatter(cpfElement.value);
      cpfElement.classList.remove('invalido');
      cpfElement.nextElementSibling.classList.remove('active');
    } else {
      cpfElement.classList.add('invalido');
      cpfElement.nextElementSibling.classList.add('active');
    }
  }
  addEvent(){
    this.element.addEventListener('change', () => {
      this.validateChange(this.element);
    })
  }
  addErrorSpan(){
    const errorElement = document.createElement('span');
    errorElement.classList.add('message-error')
    errorElement.innerText = 'CPF Inválido.'
    this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling);
  }
  init(){
    this.addEvent();
    this.addErrorSpan();
    return this
  }

}