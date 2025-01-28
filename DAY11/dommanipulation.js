//MANIPULATION OR MODIFICATION OF DOM
//USED TO UPADATE OR MOD
//2 WAYS TO MODIFY
//STEP 1----> create element usin createElement("")
let a = document.createElement("h1");
console.log(a);//an empty h1 is created
a.textContent="Hello world";

//STEP2 ----->  TO APPEND WE USE append() or appendChild() to append that tag to parent tag
document.body.appendChild(a);//here we append h1 to body tag
a.style.backgroundColor="red";
//document.body.append(a);---------->similar menthod instead of appendChild()
//the hello world is appended to body and printed in browser

//create a div in body and ol in div      body--->div--->ol
let div = document.createElement("div");
console.log(div);
document.body.appendChild(div);
div.style.border="5px solid";

let ol=document.createElement("ol");
console.log(ol);
div.appendChild(ol);


let li1=document.createElement("li");
console.log(li1);
li1.textContent="Node";
ol.appendChild(li1);

let li2=document.createElement("li");
console.log(li2);
li2.textContent="React ";
ol.appendChild(li2);
ol.setAttribute("type","i")
