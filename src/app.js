/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

const generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  const indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
