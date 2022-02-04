import Countdown from "./countdown.js";

export default function initCountdownSeasons(){
  const daysToWinter = new Countdown('20 July 2022 23:59:59 GMT-0300');

  console.log(daysToWinter.total);
}