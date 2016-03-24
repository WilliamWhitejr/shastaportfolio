var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");
// This code makes it so when you click on the calculate it will do the math 
button.addEventListener("click", doMath);

function doMath() {
   
   // This shows what the plus sign does 
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
        // This determines the fuction of the minus symbol
    }
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
        // This determines the function of the times multiplication symbol  
    }
     if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
       // This determines the function of the Divinding symbol 
    }
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
      //  This determines the function of the percent symbol
    }
    if  (dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        display.innerHTML = answer;
        // This determines the fucntion of the exponent function
    }
    if  (dropdown.value == "^"){
        answer = Math.pow(input1.value,input2.value);
        display.innerHTML = answer;
}
}