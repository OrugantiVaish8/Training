// let obj={
//     name:"kumar",
//     id:1,
//     designation:"developer"
// }
// console.log(obj);

// let obj1=JSON.stringify(obj);
// console.log(obj1);

// let obj2=JSON.parse(obj1);
// console.log(obj2);

// let a=window.fetch()
// console.log(a);

window.fetch('https://fakestoreapi.com/products')
.then((data)=>data.json())
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    // console.log(res[1]);
    // console.log(res[0].name);

    res.map((x)=>{
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        document.body.innerHTML+=`<h1>${x.id}</h1>`
        document.body.innerHTML+=`<h1>${x.title}</h1>`
        document.body.innerHTML+=`<h1>${x.price}</h1>`
        document.body.innerHTML +=`<img src="${x.image}" alt="${x.title}" width="200"/>`; 
    })
})

