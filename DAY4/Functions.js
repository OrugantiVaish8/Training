//FUNCTION EXPRESSION\

// console.log(a());   --->   reference error

console.log("Function expression example start");

let a=function(){
    console.log("hello");
    
}
console.log(a);
console.log(a());
a();

console.log("Function expression example end");



//ARITHMETIC OPERATIONS OF THREE NUMBERS AND LARGEST OF THEM

let sample= function (a,b,c){
    let add=a+b+c
    console.log("Addition of three numbers");
    console.log(add);

    let d=a-b-c
    console.log("Subtraction of three numbers");
    console.log(d);

    let e=a*b*c
    console.log("Multiplication of two numbers");
    console.log(e);

    let f=a/b/c
    console.log("Division of two numbers");
    console.log(f);

    let g=a%b%c
    console.log("Modulus of two numbers");
    console.log(g);
    
    let h=a++
    console.log("Post Increment of 1st number");
    console.log(h);

    let i= ++b
    console.log("Pre Increment of 2nd number");
    console.log(i);
    console.log(a);
    console.log(b);
    
    let j= a--
    console.log("Post decrement of 1st number");
    console.log(j);

    let k= --b
    console.log("Pre decrement of 1st number");
    console.log(k);

    if(a>=b && a>=c){
        console.log("first number is the largest");

    }else{
        if(b>=c && b>=a){
            console.log("second number is largest");
            
        }
        else{
            console.log("third number is largst");
            
        }
    }
    
}
let x = Number(prompt("Enter first number "));
let y =Number(prompt("Enter second number "));
let z= Number(prompt("Enter the third number"))
sample(x,y,z)

//ARGUMENT OBJECT

//console.log("ARGUMENT OBJECT START");

let b=function(a){
    console.log(a);
    //console.log(arguments);
    console.log(arguments[1]);
    
    
}
b(10,20,30)

console.log("ARGUMENT OBJECT END");

//FUNCTION PROGRAMMING USING 

function main(a){
    console.log(a);
    a();
    
}
main(function(){
    console.log("1st call back func");
    
});
main(function(){
    console.log("2nd call back func");
    
});