import initAnimaNumbers from "./anima-numbers.js";

export default function initFetchAnimals(){
  const divNumeros = document.querySelector('.numeros-flex');
  let divContent = '';

  async function fetchAnimals(url){
    const animalsJSON = await (await fetch(url)).json();

    animalsJSON.forEach((animal) => {
      createAnimal(animal);
    });

    initAnimaNumbers();
  }

  function createAnimal(animal){
    divContent += `<div class="numero-animal">
                      <h3>${animal.specie}</h3>
                      <span data-numero>${animal.total}</span>
                    </div>`;

    divNumeros.innerHTML = divContent;
  }

  fetchAnimals('animalsapi.json');
}