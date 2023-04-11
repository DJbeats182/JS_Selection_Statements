console.log("Exercise 1\n==========\n");
 let favNumber = 23;
 let userInput = prompt("Enter a number");
 if (userInput < favNumber) {
  console.log("too low");
 } else if (userInput > favNumber) {
  console.log("too high");
 } else {
  console.log("Congratulations!!!");
 }

console.log("Exercise 2\n==============\n");
let birthMonth = prompt("What month were you born in?");
switch (birthMonth) {
  case "January":
  case "February":
  case "December":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer!");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  default:
    console.log("Unknown Input");
}

console.log("Exercise 3\n==============\n");
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);