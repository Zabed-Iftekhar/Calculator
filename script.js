//script.js//

//Buttons for all numbers and symbols from left to right//

let clear = document.querySelector("#AC");
let decimal=document.querySelector("#decimal");
let remainder=document.querySelector("#remainder");
let division = document.querySelector("#divide" ) ;
let seven = document.querySelector("#seven" ) ;
let eight = document.querySelector("#eight" );
let nine = document.querySelector("#nine" );
let multiplication = document.querySelector("#multiply");
let four = document.querySelector("#four" );
let five = document.querySelector("#five" );
let six = document.querySelector("#six" );
let subtraction = document.querySelector("#minus");
let one = document.querySelector("#one" );
let two = document.querySelector("#two");
let three = document.querySelector("#three" );
let addition = document.querySelector("#add");
let zero = document.querySelector("#zero" );
let back = document.querySelector("#back");
let equalTo = document.querySelector("#equalto");


//Event listeners for all buttons//
clear.addEventListener('click',()=>{console.log("0")})
decimal.addEventListener('click',()=>{console.log(".")})
remainder.addEventListener('click',()=>{console.log(3%2)})
division.addEventListener('click',()=>{console.log(3/2)})
seven.addEventListener('click',()=>{console.log(7)})
eight.addEventListener('click',()=>{console.log(8)})
nine.addEventListener('click',()=>{console.log(9)})
multiplication.addEventListener('click',()=>{console.log(3*2)})
four.addEventListener('click',()=>{console.log(4)})
five.addEventListener('click',()=>{console.log(5)})
six.addEventListener('click',()=>{console.log(6)})
subtraction.addEventListener('click',()=>{console.log(3-2)})
one.addEventListener('click',()=>{console.log(1)})
two.addEventListener('click',()=>{console.log(2)})
three.addEventListener('click',()=>{console.log(3)})
addition.addEventListener('click',()=>{console.log(3+2)})
zero.addEventListener('click',()=>{console.log(0)})
back.addEventListener('click',()=>{console.log("delete")})
equalTo.addEventListener('click',()=>{console.log("equal to")})


// Functions for addition,subtraction, multiplication, division & remainder 
const add = function(firstNumber,secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber,secondNumber) {
	return firstNumber - secondNumber;
};

const multiply = function(firstNumber,secondNumber) {
    
    return firstNumber * secondNumber

};

const divide = function(firstNumber,secondNumber) {
    
    return firstNumber / secondNumber

};

const remaining = function(firstNumber,secondNumber) {
    
    return firstNumber % secondNumber

};
