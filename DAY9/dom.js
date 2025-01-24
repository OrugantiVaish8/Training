// console.log(window);
// console.log(window.document);
// console.log(typeof document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title="vaishh"
// console.log(document.body);
// console.log(document);

// let link=document.links;
// console.log(link);
// // console.log(link[0]);

// for(let i=0;i<link.length;i++){
//     console.log(link[i]);
//     link[i].className="demo"
//     link[i].href="https://chatgpt.com/"
//     link[i].target="_blank"
// }
let a =document.getElementById("demo")
console.log(a);
console.log(a.textContent)
a.textContent="vaish"
a.style.backgroundColor="red"
a.style.textAlign="center"

let b=document.getElementsByClassName("demo1")
console.log(b)
b[0].style.backgroundColor="yellow"
console.log(b[0])
console.log(b[1])

let c=document.getElementsByTagName("p");
console.log(c);
console.log(c[1]);
c[1].style.color="blue"
c[1].textContent="hello"

let d=document.getElementsByName("demo2");
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor="pink"

// let e =document.querySelector("#demo");
// console.log(e)

let e1=document.querySelectorAll(".demo1");
console.log(e1);

// let f =document.querySelectorAll("#demo");
// console.log(f);
// console.log(f[0]);
