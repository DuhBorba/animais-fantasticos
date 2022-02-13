import ValidateCpf from "./validate-cpf.js";

export default function validateForm(inputCpf){
  const cpf = document.querySelector(inputCpf);
  const validateCpf = new ValidateCpf(cpf);
  validateCpf.init();
}
