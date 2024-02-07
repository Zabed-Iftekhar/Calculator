//script.js//

//Buttons for all numbers and symbols from left to right//

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


//Variables for firstNumber, operator & secondNumber
let firstNumber;
let operator;
let secondNumber;

//Two arrays;   
let array=[]; // array consist of all the values of buttons clicked
let processedArray=[] // processedArray will contain all values of array combined together according to various conditions


//Event listeners for all buttons//
clear.addEventListener('click',()=>{
    array.length=0
    console.log(array)
})

decimal.addEventListener('click',()=>{
    array.push(".")
    console.log(array) 
})
remainder.addEventListener('click',()=>{
    array.push("%")
    console.log(array)
})
division.addEventListener('click',()=>{
    array.push("/")
    console.log(array)
})

seven.addEventListener('click',()=>{
    array.push(7)
    console.log(array)
    
})
eight.addEventListener('click',()=>{
    array.push(8)
    console.log(array)
})
nine.addEventListener('click',()=>{
    array.push(9)
    console.log(array)
})
multiplication.addEventListener('click',()=>{
    array.push("*")
    console.log(array)
})

four.addEventListener('click',()=>{
    array.push(4)
    console.log(array)
})
five.addEventListener('click',()=>{
    array.push(5)
    console.log(array)
})
six.addEventListener('click',()=>{
    array.push(6)
    console.log(array)
})
subtraction.addEventListener('click',()=>{
    array.push("-")
    console.log(array)
})
one.addEventListener('click',()=>{
    array.push(1)
    console.log(array)
})
two.addEventListener('click',()=>{
    array.push(2)
    console.log(array)
})
three.addEventListener('click',()=>{
    array.push(3)
    console.log(array)
})
addition.addEventListener('click',()=>{
    array.push("+")
    console.log(array)
})
zero.addEventListener('click',()=>{
    array.push(0)
    console.log(array)    
})

back.addEventListener('click',()=>{
    array.pop()
    console.log(array)
})
equalTo.addEventListener('click',()=>{
    array.push("=")
    console.log(array)

})


//Function to process the array consisting of numbers and operators

const processing= function(){  
    for (let i=0;i<array.length;i++){  // [1,"+"]
        if (typeof array[i]=='number'&& typeof array[i+1]=='string' && typeof array[i-1]=='undefined'){
            processedArray.push(array[i])    
                
        }
        
        // ["+",1]
        else if (typeof array[i]=='number' && typeof array[i+1]=='undefined' ){ 
            processedArray.push(array[i]) 
        }

        // ["+",1,2]
        else if (typeof array[i]=='number' && typeof array[i+1]=='number' && typeof array[i+2]=='undefined' ){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()))
            array.splice(i+1,1)
        }
        // ["+",1,2,3]
        else if (typeof array[i]=='number' && typeof array[i+1]=='number' && typeof array[i+2]=='number' && typeof array[i+3]=='undefined' ){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()+ array[i+2].toString()))
            array.splice(i+1,2)
        }
        // ["+",1,2,3,4]
        else if (typeof array[i]=='number' && typeof array[i+1]=='number' && typeof array[i+2]=='number' && typeof array[i+3]=='number'&& typeof array[i+4]=='undefined' ){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()+ array[i+2].toString()+array[i+3].toString()))
            array.splice(i+1,3)
        }

        //following 1 item is number  [3,5,"+"]
        
        else if (typeof array[i]=='number' && typeof array[i+1]=='number'&& typeof array[i+2]=='string'){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()))
            array.splice(i+1,1)
        }

        //following 2 items are numbers [3,4,5,"+"]
        
        else if (typeof array[i]=='number' && typeof array[i+1]=='number' && typeof array[i+2]=='number' && typeof array[i+3]=='string'){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()+array[i+2].toString()))
            array.splice(i+1,2)
                
        }
        //following 3 items are numbers [3,2,4,5,"+"]

        else if (typeof array[i]=='number' && typeof array[i+1]=='number' && typeof array[i+2]=='number' && typeof array[i+3]=='number' && typeof array[i+4]=='string'){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()+array[i+2].toString()+array[i+3].toString()))
            array.splice(i+1,3)
                
        }

        //following 4 items are numbers [3,2,1,4,5,"+"]
        else if (typeof array[i]=='number' && typeof array[i+1]=='number'&& typeof array[i+2]=='number'&& typeof array[i+3]=='number'&& typeof array[i+4]=='number' && typeof array[i+5]=='string'){
            processedArray.push(parseInt(array[i].toString()+array[i+1].toString()+array[i+2].toString()+ array[i+3].toString()+array[i+4].toString()));
            array.splice(i+1,4);
        }
        
        else if (typeof array[i+1]=='string' && typeof array[i-1]=='string' || typeof array[i-1]=='undefined'){
            processedArray.push(array[i]);
        }

        else if (typeof array[i+1]=='string' && typeof array[i-1]=='number' || typeof array[i-1]=='undefined'){
            processedArray.push(array[i]);
        }
                

        else if (array[i]=="." || array[i]=="+" ||array[i]=="-"||array[i]=="*" || array[i]=="/" || array[i]=="%"||array[i]=="="){
            processedArray.push(array[i]);
        }


        else if (typeof array[0]=='+'||typeof array[0]=='-'||typeof array[0]=='*'||typeof array[0]=='/'
        ||typeof array[0]=='%'||typeof array[0]=='.'){
            alert("Invalid format provided")
            array.length=0;
        }

    }
}

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
