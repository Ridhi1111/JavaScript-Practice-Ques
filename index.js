/*var x = 7;

function getName() {
    console.log("Namaste Javascript");
}
getName();
console.log(x);*/

/*getName();
console.log(x);

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}*/

/*var x = 7;

function getName() {
    console.log("Namaste Javascript");
}
console.log(getName);*/

/*console.log(getName);

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}*/


// var a = 10;
// function b() {
//     var x = 10;
//     let a = 2;
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);



/*var a = 1;
console.log(a,"outside 1")


const ab = () =>{
 var a = 2;
console.log(a,"inside")
}
ab()
console.log(a,"outside 2")*/

/*function a() {
    var b = 10;
    c();
    function c() {
        
    }
}
a();
console.log(b);*/
// console.log(a);
// let a =12;

// var b = 100;

/*ab()


var ab = ()=> {
    // a=1
    var a=2;
console.log(a,'hello')

}*/

/*a = 5;
console.log(a);
var a;*/

/*console.log(a);
var a = 5;*/

/*a = 5;
console.log(a);
var a;*/

/*greet();

function greet() {
    console.log('Hi, there');
}*/

/*greet();

let greet = function() {
    console.log('Hi, there');
}*/

/*var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);*/

/*let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);*/

/*const c = 100;
function x() {
    const c = 30;
    console.log(c);
}
x();
console.log(c);*/

//Shadowing
/*function func() {
    let a = 'Geeks';

    if(true) {
        let a = 'GeeksforGeeks';
        console.log(a);
    }
    console.log(a);
}
func();*/

//Illegal Shadowing
/*let a = 20;
{
    var a = 20;
}*/

//We can shadow like this.
/*var a = 20;
{
    let a = 20;
}*/

/*let a = 20;
function x() {
    var a = 20;
}*/

/*function func() {
    var a = 'Geeks';
    let b = 'Geeks';

    if(true) {
        let a = 'GeeksforGeeks'; // Legal Shadowing
        var b = 'Geeks'; // Illegal Shadowing
        console.log(a);
        console.log(b);
    }
}
func();*/

/*const a = 20;
{
    const a = 100;
    {
        const a = 200;
        //console.log(a);
    }
    //console.log(a);
}
 console.log(a);*/

// Lexical Scoping
/*var x = 2;
var add = function() {
    var y = 1;
    return x+y;
};
 console.log(add());*/

/*function x() {
    var a = 7;
    function y() {
        console.log(a);
        a = 100;
        console.log(a);
    }
    
    return y;
 }
 var z = x();
 console.log(z);
 z();*/

 /*function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b);
        }
        y();
    }
    x();
 }
 z();*/

/*function foo() 
{
    var b = 1;
    function inner() {
        return b;
    }
    return inner;
}
var get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());*/

// function foo(outer_arg) {
//     function inner(inner_arg) {
//         return outer_arg + inner_arg;
//     }
//     return inner;
// }
// var get_func_inner = foo(5);

// console.log(get_func_inner(4));
// console.log(get_func_inner(3));




//Outer function
// function outer()
// {
// 	var arr = [];
// 	var i;
// 	for (i = 0; i < 4; i++)
// 	{
// 		// storing anonymous function
// 		arr[i] = function () 
//         {   return i;
//         }
        
// 	}
    
// 	return arr;
// }
// outer();

// var get_arr = outer();
// console.log(get_arr);
// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());





// Outer function

//console.log(get_arr[3]());

/*function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 1000);
    console.log("Namaste Javascript");
}
x();*/

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

/*function x() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();*/

/*function x() {
    for(var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
    console.log("Namaste JavaScript");
}
x();*/

/*var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x); 
}*/

/*function outer(b) {
    function inner() {
        console.log(a,b);
    }
    let a = 10;
    return inner;
}
var close = outer("helloworld");
close();*/

/*function outest(){
    var c = 20;
    function outer(b){

        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var close = (outest())("helloworld");
close();*/

/*function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter()
counter1();
counter1();*/

/*function Counter(){
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();*/

// Function Statement
// function a() {
//     console.log("a called");
// }
// a();

// Function Expression
// var b = function () {
//     console.log("b called");
// }
// b();

// Anonymous Function
// function() {

// };

// What is a Callback Function in JavaScript.
// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// });

/*function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        alert("Button Clicked");
    });
}
attachEventListeners();*/

// function myFirst() {
//     console.log("Hello");
//   }
  
//   function mySecond() {
//     console.log("Goodbye");
//   }
//   mySecond();
//   myFirst();

//   function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);
  
// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

//callback function
// function callMe() {
//     console.log('I am callback function');
// }

// passing function as an argument
//greet('Peter', callMe);


// program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
//     myFunction(name);
// }

// callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// }, 5000);

// console.log("End");

// million

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }
// console.log("While expires");

// Here x is a callback function and y is a higher order function. 
// function x() {
//     console.log("Namaste");
// }

// function y(x) {
//     x();
// }

// const radius = [3,1,2,4];

// const calculateArea = function(radius) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));

// const arr = [5,1,3,2,6];

// Double - [10,2,6,4,12]

// Triple - [15,3,9,6,18]

// Binary - ["101","1","11","10","110"]

// function double(x) {
//     return x*2;
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(binary);

// const output = arr.map((x) => x.toString(2));
// console.log(output);

 //const arr = [5,1,3,2,6];

//filter odd values

// function isOdd(x) {
//     return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

//const arr = [5,1,3,2,6];

// sum or max

// function findSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

const arr = [5,1,3,2,6];
const output = arr.reduce(function(acc,curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);

// sum or max

// function findMax(arr) {
//     let max = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(max, curr) {
//     if(curr > max) {
//         max = curr;
//     }
//     return max;
// },0);
// console.log(output);

// const users = [
//     { firstName: "akshay", lastName: "saini", age: 26},
//     { firstName: "donald", lastName: "trump", age: 75},
//     { firstName: "elon", lastName: "musk", age: 50},
//     { firstName: "deepika", lastName: "padukone", age: 26},
// ];

// // const output = users.map((x) => x.firstName + " " + x.lastName);

// const  output = users.reduce(function(acc,curr) {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});
// console.log(output);

//x = 5; // Assign 5 to x

//elem = document.getElementById("demo"); // Find an element
//elem.innerHTML = x;                     // Display x in the element

//var x; // Declare x

// Hoisting
// function codeHoist() {
//     a = 10;
//     let b = 50;
// }
// codeHoist();

// console.log(a); // 10
//console.log(b); // ReferenceError: b is not defined

// let greeting = "say Hi";
// let times = 4;

// if(times > 3) {
//     let hello = "say Hello instead";
//     console.log(hello); // "say hello instead"
// }
// console.log(hello); // hello is not defined

// closure
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
// const myFunc = makeFunc();
// myFunc();

// var greet = function () {
//     console.log("Welcome to GeeksforGeeks!");
// };
  
// greet();

// function
// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }

// greet('Peter'); // Hi Peter

// const arr = [1, 2, 3, 4, 5];
// const output = arr.map((num) => num += 10)
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(output); // [11, 12, 13, 14, 15]
