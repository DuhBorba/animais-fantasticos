import AnimaNumbers from "./anima-numbers.js";

export default function fetchAnimals(url, target){
  const divNumeros = document.querySelector(target);
  let divContent = '';

  async function getAnimals(){
    const animalsJSON = await (await fetch(url)).json();

    animalsJSON.forEach(animal => createAnimal(animal));

    animaAnimalsNumero();
  }
  
  function createAnimal(animal){
    divContent += `<div class="numero-animal">
    <h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>
    </div>`;
    
    divNumeros.innerHTML = divContent;
  }
  
  function animaAnimalsNumero(){
    const animaNumbers = new AnimaNumbers('[data-numero]','.numeros', 'active');
    animaNumbers.init();
  }

  return getAnimals();
}