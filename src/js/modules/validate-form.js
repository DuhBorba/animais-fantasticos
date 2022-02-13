import ValidateCpf from "./validate-cpf.js";

export default function validateForm(){
  const cpf = document.querySelector('#cpf');
  const validateCpf = new ValidateCpf(cpf);
  validateCpf.init();
}
