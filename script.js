//script.js//

//Buttons for all numbers and operators//

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

let display= document.querySelector("#display-screen > p")


//Variables for firstNumber, operator & secondNumber
let firstNumber;
let operator;
let secondNumber;

//stringToArray will hold string characters taken from display.innerText as items. 
let stringToArray=[];


//Event listeners for all buttons//
clear.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    document.querySelector("#display-screen").style.backgroundColor="#805a6a"
    display.innerText=" 0 "
    firstNumber=" "
    secondNumber=" "  
})

decimal.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    display.innerText+="."
    
})

addition.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    display.innerText+=" + "
})

subtraction.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    display.innerText+=" - " 
   
})

multiplication.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    display.innerText+=" * "
   
})

division.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    display.innerText+=" / "
    
})

remainder.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    display.innerText+=" % "
})


zero.addEventListener('click',()=>{  
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="0"
})


one.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="1"  
})


two.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="2"   
})


three.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="3"
})


four.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="4" 
})


five.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="5"
})


six.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="6"    
})

seven.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="7"
  
})

eight.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="8"
})


nine.addEventListener('click',()=>{
    display.style.cssText=("font-size:30px")
    if (display.innerText=="0"|| display.innerText==="Error"){
        display.innerText="";
    }
    display.innerText+="9"    
})


back.addEventListener('click',()=>{
    if (display.innerText.length>=2){
        display.innerText=display.innerText.substring(0,display.innerText.length-1)
    }
})

equalTo.addEventListener('click',()=>{
    display.style.cssText=("font-size:50px")

    for (let i=0;i<display.innerText.length;i++){
        if (display.innerText[0]=='+'||
        display.innerText[0]=='-'||
        display.innerText[0]=='*'||
        display.innerText[0]=='/'||
        display.innerText[0]=='%'){
            display.style.cssText=("font-size:30px")
            display.innerText="Invalid format used."

        }

        if (display.innerText[i]=='+'){
            stringToArray=display.innerText.split('+')
            firstNumber=Number(stringToArray[0])
            operator='+'
            secondNumber=Number(stringToArray[1])
            display.innerText=""
            document.querySelector("#display-screen").style.backgroundColor="#9FD4A3"
            display.innerText=add(firstNumber,secondNumber).toFixed(2)
            if (display.innerText.length>12){
                display.style.cssText=("font-size:30px")
                document.querySelector("#display-screen").style.backgroundColor="#FF7F7F"
                display.innerText="Error, press AC to reset"
                alert("Can't enter more than 12 digits")
            }
            
        }

        if (display.innerText[i]=='-'){
            stringToArray=display.innerText.split('-')
            firstNumber=Number(stringToArray[0])
            operator='-'
            secondNumber=Number(stringToArray[1])
            display.innerText=""
            document.querySelector("#display-screen").style.backgroundColor="#9FD4A3"
            display.innerText=subtract(firstNumber,secondNumber).toFixed(2)
            if (display.innerText.length>12){
                display.style.cssText=("font-size:30px")
                document.querySelector("#display-screen").style.backgroundColor="#FF7F7F"
                display.innerText="Error, press AC to reset"
                alert("Can't enter more than 12 digits")
            }
        }

        if (display.innerText[i]=='*'){
            stringToArray=display.innerText.split('*')
            firstNumber=Number(stringToArray[0])
            operator='*'
            secondNumber=Number(stringToArray[1])
            display.innerText=""
            document.querySelector("#display-screen").style.backgroundColor="#9FD4A3"
            display.innerText=multiply(firstNumber,secondNumber).toFixed(2)
            if (display.innerText.length>12){
                display.style.cssText=("font-size:30px")
                document.querySelector("#display-screen").style.backgroundColor="#FF7F7F"
                display.innerText="Error, press AC to reset"
                alert("Can't enter more than 12 digits")
            }
        }

        if (display.innerText[i]=='/'){
            stringToArray=display.innerText.split('/')
            firstNumber=Number(stringToArray[0])
            operator='/'
            secondNumber=Number(stringToArray[1])
            display.innerText=""
            document.querySelector("#display-screen").style.backgroundColor="#9FD4A3"
            display.innerText=divide(firstNumber,secondNumber).toFixed(2)
            if (display.innerText.length>12){
                display.style.cssText=("font-size:30px")
                document.querySelector("#display-screen").style.backgroundColor="#FF7F7F"
                display.innerText="Error, press AC to reset"
                alert("Can't enter more than 12 digits")
            }
        }

        if (display.innerText[i]=='%'){
            stringToArray=display.innerText.split('%')
            firstNumber=Number(stringToArray[0])
            operator='%'
            secondNumber=Number(stringToArray[1])
            display.innerText=""
            document.querySelector("#display-screen").style.backgroundColor="#9FD4A3"
            display.innerText=remaining(firstNumber,secondNumber).toFixed(2)
            if (display.innerText.length>12){
                display.style.cssText=("font-size:30px")
                document.querySelector("#display-screen").style.backgroundColor="#FF7F7F"
                display.innerText="Error, press AC to reset"
                alert("Can't enter more than 12 digits")
            }
        }
    }  
})


//Functions for addition,subtraction, multiplication, division & remainder 
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
    if (secondNumber===0){
        document.querySelector("#display-screen").style.backgroundColor="#FF7F7F"
        display.style.cssText=("color:#e8e7ec")
        display.innerText="Can't divide by zero"
        return display.innerText
    }
    else {
        return firstNumber / secondNumber
    }
};

const remaining = function(firstNumber,secondNumber) {
    return firstNumber % secondNumber
};
