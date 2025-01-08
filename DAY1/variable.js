console.log("start")
// global scope(declare any variable using var)

// in var it is possible
var a=10;
console.log(a);

// local scope(declare any variable using let,var)

//in let redeclaration is not possible but reinstallation is possible
let b=20;
console.log(b);

// in const  redeclaration and reinstallation is not possible we have to give first preference
const c=30;
console.log(c);

// block scope
{
    var m=200;
    console.log(m);

    let n="hello";
    console.log(n);

    const o=300;
    console.log(o);
}
console.log("stop")