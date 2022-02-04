export default function initFetchBitcoin(){
  const btc = document.querySelector('#bitcoin');
  const brl = document.querySelector('#brl');
  const eventos = ['keyup', 'change'];

  async function fetchBitcoin(url){
    const bitcoinJSON = await (await fetch(url)).json();

    const priceBitcoin = (bitcoinJSON.BRL.sell).toFixed(10);

    return priceBitcoin;
  }
  
  async function calcBrlToBitcoin(event){
    const priceBitcoin = await fetchBitcoin('https://blockchain.info/ticker');
    const userValue = event.target.value;

    const result = userValue / priceBitcoin;

    btc.value = result;
  }

  async function calcBictoinToBrl(event){
    const priceBitcoin = await fetchBitcoin('https://blockchain.info/ticker');
    const userValue = event.target.value;

    const result = userValue * priceBitcoin;

    brl.value = result;
  }

  async function priceUpdate(){
    const priceBitcoin = await fetchBitcoin('https://blockchain.info/ticker');
    const userValue = brl.value;

    const result = userValue / priceBitcoin;

    btc.value = result;
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