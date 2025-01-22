function main(m,n)
{
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m)||isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve()
        },5000)
    })
    .then(()=>console.log("Promise is resolved"))
    .then(()=>console.log(10*10))
    
    .catch(()=>console.log("Error Occured"))
}
main(1,10)
//main(1,"10a")
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

// let online=window.navigator.online
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(online==true){
//             return resolve()
//         }else{
//             return reject()
//         }
//     },5000)
// })
// .then(()=> console.log("online....."))
// .catch(()=> console.log("offline....."))