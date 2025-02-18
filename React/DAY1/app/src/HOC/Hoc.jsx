let Hoc=(OriginalComponent)=>{
    let newComponent=()=>{
        let arr=[
            {
                name:"Vaish",
                id:1,
                role:"Developer"
            },
            {
                name:"Vaishnavi",
                id:2,
                role:"Tester"
            },
        ]
        return <OriginalComponent arr1={arr}/>
    }
    return newComponent
}
export default Hoc