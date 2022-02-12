export default function fetchBitcoin(url, divBtc, divBrl){
  const btc = document.querySelector(divBtc);
  const brl = document.querySelector(divBrl);
  const eventos = ['keyup', 'change'];

  async function getBitcoin(){
    const bitcoinJSON = await (await fetch(url)).json();

    const priceBitcoin = (bitcoinJSON.BRL.sell).toFixed(10);

    return priceBitcoin;
  }
  
  async function calcBrlToBitcoin(event){
    const priceBitcoin = await getBitcoin();
    const userValue = event.target.value;

    const result = userValue / priceBitcoin;

    btc.value = result.toFixed(7);

    if(!result){
      btc.value = 0;
    }
  }

  async function calcBictoinToBrl(event){
    const priceBitcoin = await getBitcoin();
    const userValue = event.target.value;

    const result = userValue * priceBitcoin;

    brl.value = result.toFixed(7);

    if(!result){
      brl.value = 0;
    }
  }

  async function priceUpdate(){
    const priceBitcoin = await getBitcoin();
    const userValue = brl.value;

    const result = userValue / priceBitcoin;

    btc.value = result.toFixed(7);
  }

  priceUpdate();
  // setInterval(() => {
  //   priceUpdate();
  // }, 1000 * 30);

  eventos.forEach((evento) => {
    brl.addEventListener(evento, calcBrlToBitcoin);
    btc.addEventListener(evento, calcBictoinToBrl);
  });
}