const coinList = [500, 100, 50, 10];

function changeCoin(coinList = [], price) {
  let count = 0;
  coinList.forEach((coin) => {
    count += Math.floor(price / coin);
    price %= coin;
  });
  console.log(count);
}
changeCoin(coinList, 3200);
