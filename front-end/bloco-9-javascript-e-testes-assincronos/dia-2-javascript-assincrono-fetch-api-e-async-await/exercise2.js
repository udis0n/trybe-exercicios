const coinCap_url = "https://api.coincap.io/v2/assets";
const currency_url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json";

const getCriptoArray = async () => {
  try {
    const response = await fetch(coinCap_url);
    const dataJson = await response.json();
    const { data } = dataJson;
    return data;
  } catch (err) {
    console.log("Deu ruim meu parceiro!");
  }
};

const currencyConverter = async () => {
  try {
    const response = await fetch(currency_url);
    const dataJson = await response.json();
    const { brl } = dataJson;
    return brl;
  } catch (err) {
    console.log("Deu ruim meu parceiro!");
  }
};

const createListElement = (string) => {
  const ul = document.querySelector("#list-of-coins");
  const li = document.createElement("li");
  li.innerText = string;
  ul.appendChild(li);
};

const putCoinsInList = async () => {
  const allCoinsArray = await getCriptoArray();
  const brl = await currencyConverter();
  const tenCoinsArray = allCoinsArray.filter((coin) => coin.rank <= 10);

  tenCoinsArray.forEach(({ name, symbol, priceUsd }) => {
    const string = `${name} (${symbol}): R$ ${priceUsd * brl}`;
    createListElement(string);
  });
};

window.onload = putCoinsInList();
