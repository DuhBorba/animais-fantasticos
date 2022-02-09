import ValidateCpf from "./validate-cpf.js";

export default function initValidateForm(){
  const cpf = document.querySelector('#cpf');
  const validateCpf = new ValidateCpf(cpf).init();
}
