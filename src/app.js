/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const symbolList = ["♠", "♥", "◈", "♣"];
  const valueList = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  const getRandomizer = list => {
    let rnd = Math.random();
    let item = Math.floor(rnd * list.length);
    return list[item];
  };

  const getRandomSymbol = () => getRandomizer(symbolList);

  const getRandomValue = () => getRandomizer(valueList);

  const seterizer = (selector, value) => {
    document.querySelector(selector).innerHTML = value;
  };

  const setSymbolValue = (symbol, selector) => {
    seterizer(selector, symbol);
  };

  const setValueValue = value => {
    seterizer("#value", value);
  };

  window.playCards = () => {
    const symbol = getRandomSymbol();
    const value = getRandomValue();
    setSymbolValue(symbol, "#symbol1");
    setSymbolValue(symbol, "#symbol2");
    setValueValue(value);
    console.log("Play cards button clicked!");
  };
};
