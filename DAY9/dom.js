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

