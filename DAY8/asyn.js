// function main(m,n)
// {
//     setTimeout(()=>{
//         for(let i=m; i<=n;i++ )
//             {
//                 console.log(i);
//             }
//     },5000)
// }
// // main(1,10)
// main(1,"10a")
// function demo()
// {
//     console.log("no's printed");
// }
// demo()

// window.setTimeout(()=>{
//     console.log("i am set Timeout")
// },5000)

// window.setInterval(()=>{
//     console.log("i am set interval")
// },3000)

let online=window.navigator.online
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(online==true){
            return resolve
        }else{
            reject
        }
    },5000)
})
.then(()=> console.log("online....."))
.catch(()=> console.log("ofline....."))