import Countdown from "./countdown.js";

export default class CountdownSeasons{
  constructor(divEstacoes){
    this.currentYear = new Date().getFullYear();
    this.divEstacoes = document.querySelector(divEstacoes);
    this.divContent = '';
  }
  
  countdownSummer(){
    const startToSummer = new Countdown(`21 December ${this.currentYear - 1} 07:02:00 GMT-0300`);
    const endToSummer = new Countdown(`20 March ${this.currentYear} 00:50:00 GMT-0300`);
    const nextSummer = new Countdown(`21 December ${this.currentYear} 07:02:00 GMT-0300`);

    this.resultSeason(startToSummer, endToSummer, nextSummer, 'no Verão');
  }
  countdownAutumn(){
    const startToWinter = new Countdown(`20 March ${this.currentYear} 00:50:00 GMT-0300`);
    const endToWinter = new Countdown(`20 Juny ${this.currentYear} 18:44:00 GMT-0300`);
    const nextWinter = new Countdown(`20 March ${this.currentYear + 1} 00:50:00 GMT-0300`);

    this.resultSeason(startToWinter, endToWinter, nextWinter, 'no Outono');
  }
  countdownWinter(){
    const startToWinter = new Countdown(`20 Juny ${this.currentYear} 18:44:00 GMT-0300`);
    const endToWinter = new Countdown(`22 September ${this.currentYear} 10:31:00 GMT-0300`);
    const nextWinter = new Countdown(`20 Juny ${this.currentYear + 1} 18:44:00 GMT-0300`);

    this.resultSeason(startToWinter, endToWinter, nextWinter, 'no Inverno');
  }
  countdownSpring(){
    const startToSpring = new Countdown(`22 September ${this.currentYear} 10:31:00 GMT-0300`);
    const endToSpring = new Countdown(`21 December ${this.currentYear} 07:02:00 GMT-0300`);
    const nextSpring = new Countdown(`22 September ${this.currentYear + 1} 10:31:00 GMT-0300`);

    this.resultSeason(startToSpring, endToSpring, nextSpring, 'no Primavera');
  }
  resultSeason(startSeason, endSeason, nextSeason, currentSeason){
    if(startSeason._timeStampDiff > 0){
      this.createCountdownSeason(startSeason, currentSeason);
    } else if(startSeason._timeStampDiff < 0 && endSeason._timeStampDiff > 0){
      this.createCurrentSeason(currentSeason);
    } else if(endSeason._timeStampDiff < 0 && nextSeason._timeStampDiff > 0){
      this.createCountdownSeason(nextSeason, currentSeason);
    } else if(nextSeason._timeStampDiff < 0){
      this.createCurrentSeason(currentSeason);
    }
  }
  createCountdownSeason(time, currentSeason){
    this.divContent +=   `<div class="estacao">
                      <h3>${currentSeason.substr(3)}</h3>
                      <div class="estacao-content">
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
                      </div>
                    </div>`;

    this.divEstacoes.innerHTML = this.divContent;
  }
  createCurrentSeason(currentSeason){
    this.divContent += `<div class="estacao">
                    <h3>${currentSeason.substr(3)}</h3>
                    <div class="estacao-content">
                      <p>Estamos ${currentSeason}</p>
                    </div>
                  </div>`;

    this.divEstacoes.innerHTML = this.divContent;
  }
  updateCountdown(){
    setInterval(() => {
      this.countdownSummer();
      this.countdownAutumn();
      this.countdownWinter();
      this.countdownSpring();
      this.divContent = '';
    }, 1000);
  }
  init(){
    this.updateCountdown();
    return this;
  }
}