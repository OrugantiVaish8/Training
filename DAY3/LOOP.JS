// looping statement
// used to execute/iterate set of instructions based on conditions

// while loop 
// it will iterate set of instructions until the condition become false
// by default 0 iteration
// syntax
// while(condition)
// {
    // set of instruction
// }

let i=1;
while(i <= 5){
    console.log(i);
    i++  //output --> 1 2 3 4 5
}

// do while loop
// it will execute first then it will check the condition
// by default it will takes one iteration
// syntax
// do(
    // set of instruction
// )while(condition)

let a=5;
do{
    console.log(a);
    a--;  //output --> 5 4 3 2 1 
}while(a >= 1)

// for loop
// three arguments
// 1)initialization
// 2)condition
// 3)increment/decrement
// synatx
// for(initialization; Condition; increment/decrement){
//     set of instruction
// }

for(let i=1; i<=5; i++){
    console.log(i);   //output --> 1 2 3 4 5
}
