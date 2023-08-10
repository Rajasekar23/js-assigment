
// Aassigment 1
function getNumberType(number){
    if(number){
        console.log(number +" is Positive")
    }else if(number == 0){
        console.log(number +" is Zero")
    }else{
        console.log(number +" is Negative")
    }
}

getNumberType(5);

// Assigment 2 - Factorial

function factorial(number){
    
    if(number <= 0){
        console.log("Enter valid number");
        return false;
    }
    
    let result = 1;
    for(let i=number; i>1; i--){
        result = result*i;
    }
    console.log(result);
    
}
factorial(6);

// Assigment 3 - Large Number

function getLargeNumber(num1, num2){
    
    return num1>num2?num1:num2;
}
let largeNumber = getLargeNumber(8, 6);
console.log(largeNumber);

// Assesment 4

function palindormeOrNot(value){
    
    let revString = '';
    for(let i = value.length-1; i>=0; i--){
        
        revString = revString+value[i]; 
    }
    if(revString === value){
        console.log("Is Palindrome");
    }
        console.log(revString);
}

palindormeOrNot('rarar');

// Assesment 6
function calculator(number1, number2, operator){
    
    let result = 0;
    
    if (operator == '+') { 
        result = number1 + number2;  
    }  
    else if (operator == '-') {   
        result = number1 - number2;  
    }  
    else if (operator == '*') { 
        result = number1 * number2;  
    }  
    else {  
        result = number1 / number2; 
    }
    console.log("Result "+result);
}
calculator(5, 6, '*');


// assigment 7

function getvowelsCount(value){
    
    let vowels = ['a','e','i','o'];

    let count = 0;

    vowels.forEach((item)=> {
        if(value.includes(item)){
            count++;
        }
    });
    console.log("Total Vowels count "+count);
    
    
}

getvowelsCount('rajae');


// Assesment 10
function getMultiplicationTable(number){
    
    for(let i = 1; i<=10; i++){
        
        console.log(number*i);
    }
}
getMultiplicationTable(5);

