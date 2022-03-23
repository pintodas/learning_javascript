// console.log("hello world!")
// variable 
let firstName = "pinto";
console.log(firstName)


// contstant 
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

// primitive types 

let name = "most"; //string type
let age = 30; // number type
let isAproved = false; // boolean
let selectColor = null;
let firstname = undefined;

// objects 
let person= {
    name :"pinto",
    age : 22,

};

// dot notation 
person.name = "das";
console.log(person.name);

// bracket notation 
person['name'] = "ratul";
console.log(person['name']);

// arrays 

let selectColors = ["green","white"];
selectColors[2] = 1
console.log(selectColors);


// funtcion 
function greet(){
    console.log("hello world!");
}
greet();

// calculate a value 
function square(number){
    return number*number;
}
let ans = square(3);
console.log(ans);


// arithmetic operator 

let x = 10;
let y = 3;

console.log(x+y); 
console.log (x - y) ;
console.log (x - y) ;
console.log (x * y) ;
console.log (x / y) ;
console.log (x ** y) ;


// equality 
// strict equlity 
console.log(1===1);

// equlity 
console.log(1==1);

// ternary operator 

let points = 90;
let c = points>100 ? 'gold':'silver';
console.log(c);

// swap two variable 

let a = 'red';
let b = 'blue';
console.log(a,b);
let new_color = '';

new_color = a
a = b
b = new_color
console.log(a,b);

// find a big number into three number 
let number_one = 5;
let number_two = 10;
let number_three = 2;

if (number_one > number_two && number_one > number_three){
    console.log(number_one + ' is the big number among three');
} 
else if (number_two > number_one && number_two > number_three){
    console.log( number_two + ' is the big number among ' ,number_one , number_two,number_three);
}
else{
    console.log( number_three + ' is the big number among ' ,number_one , number_two,number_three);
}

// using ternary 
let large_value = number_one>number_two ? (number_one>number_three ? number_one : number_three)  : (number_two>number_three ? number_two:number_three)  ;
console.log(large_value);


// switch statement 

let today="sundayy";
switch(today){
    case 'saturday':
        console.log(today + " is the off day");
        break;
    case 'sunday':
        console.log(today + " is the on day");
        break;
    case 'monday':
        console.log(today + " is the on day");
        break;
    case 'tuesday':
        console.log(today + " is the on day");
        break;
    case 'wednesday':
        console.log(today + " is the on day");
        break;
    case 'thrusday':
        console.log(today + " is the on day");
        break;
    case 'firday':
        console.log(today + " is the on day");
        break;
    default:
        console.log(today + " is nat a day");
        break;
}


