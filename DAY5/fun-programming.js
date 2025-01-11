function main(task){
    console.log(task(10,10));
    
}
main(function(a,b){
    return a+b;
})
main(function(a,b){
    return a-b;
})

//ARROW FUNCTION
//IMPLICIT RETURN ARROW FUNCTION

let a=() => console.log("IMPLICIT ");
a();
console.log(a);


//EXPLICIT RETURN ARROW FUNCTION 
let b= ()=>{return "explicit"}
console.log(b());
console.log(b);


//FUNCTION PROGRAMMING USING ARROW FUNCTION
    let main1=(task)=>{
        console.log(task);
        console.log(task());    
    }
    main1(()=>{
        return "i am cb1";
    })



// function main(task){
//     console.log(task());
        
// }
// main(function(a,b){
//     a = Number(prompt("Enter a number"));
//     b = Number(prompt("Enter a number"));
//     return a+b;
// })
// main(function(a,b){
//     a = Number(prompt("Enter a number"));
//     b = Number(prompt("Enter a number"));
//     return a-b;
// })

// main(function(a,b){
//     a = Number(prompt("Enter a number"));
//     b = Number(prompt("Enter a number"));
//     return a*b;
// })
    



let operation=(a,b,task)=>{
    console.log(task(a,b));
    
}
operation( a = Number(prompt("Enter a number ")),b = Number(prompt("Enter a number")),(a,b)=>{
    return a+b;
})
operation( a = Number(prompt("Enter a number")),b = Number(prompt("Enter a number")),(a,b)=>{
    return a-b;
})
operation( a = Number(prompt("Enter a number")),b = Number(prompt("Enter a number")),(a,b)=>{
    return a*b;
})