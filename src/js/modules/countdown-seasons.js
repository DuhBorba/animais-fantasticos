import Countdown from "./countdown.js";

export default function initCountdownSeasons(){

  const currentYear = new Date().getFullYear();
  const divEstacoes = document.querySelector('.estacoes-flex');
  let divContent = '';
  
  function countdownSummer(){

    const startToSummer = new Countdown(`21 December ${currentYear - 1} 07:02:00 GMT-0300`);
    const endToSummer = new Countdown(`20 March ${currentYear} 00:50:00 GMT-0300`);
    const nextSummer = new Countdown(`21 December ${currentYear} 07:02:00 GMT-0300`);

    resultSeason(startToSummer, endToSummer, nextSummer, 'no Verão.');
  }

  function countdownAutumn(){

    const startToWinter = new Countdown(`20 March ${currentYear} 00:50:00 GMT-0300`);
    const endToWinter = new Countdown(`20 Juny ${currentYear} 18:44:00 GMT-0300`);
    const nextWinter = new Countdown(`20 March ${currentYear + 1} 00:50:00 GMT-0300`);

    resultSeason(startToWinter, endToWinter, nextWinter, 'no Outono.');
  }

  function countdownWinter(){

    const startToWinter = new Countdown(`20 Juny ${currentYear} 18:44:00 GMT-0300`);
    const endToWinter = new Countdown(`22 September ${currentYear} 10:31:00 GMT-0300`);
    const nextWinter = new Countdown(`20 Juny ${currentYear + 1} 18:44:00 GMT-0300`);

    resultSeason(startToWinter, endToWinter, nextWinter, 'no Inverno.');
  }

  function countdownSpring(){

    const startToSpring = new Countdown(`22 September ${currentYear} 10:31:00 GMT-0300`);
    const endToSpring = new Countdown(`21 December ${currentYear} 07:02:00 GMT-0300`);
    const nextSpring = new Countdown(`22 September ${currentYear + 1} 10:31:00 GMT-0300`);

    resultSeason(startToSpring, endToSpring, nextSpring, 'no Primavera.');
  }

  function createContentSeason(time){
    divContent += `<br><div class="estacao">
                      <div>
                        <span>Dias</span>
                        <span>${time.total.days}</span>
                      </div>
                      <div>
                        <span>Horas</span>
                        <span>${time.total.hours}</span>
                      </div>
                      <div>
                        <span>Minutos</span>
                        <span>${time.total.minuts}</span>
                      </div>
                      <div>
                        <span>Segundos</span>
                        <span>${time.total.seconds}</span>
                      </div>
                    </div><br>`;

    divEstacoes.innerHTML = divContent;
  }

  function createCurrentSeason(currentSeason){
    divContent += `<div class="estacao">
                    <div>
                      <p>Estamos ${currentSeason}</p>
                    </div>
                  </div>`;

    divEstacoes.innerHTML = divContent;
  }

  function resultSeason(startSeason, endSeason, nextSeason, currentSeason){
    if(startSeason._timeStampDiff > 0){
      createContentSeason(startSeason);
    } else if(startSeason._timeStampDiff < 0 && endSeason._timeStampDiff > 0){
      createCurrentSeason(currentSeason);
    } else if(endSeason._timeStampDiff < 0 && nextSeason._timeStampDiff > 0){
      createContentSeason(nextSeason);
    } else if(nextSeason._timeStampDiff < 0){
      createCurrentSeason(currentSeason);
    }
  }

  countdownSummer();
  countdownAutumn();
  countdownWinter();
  countdownSpring();
}