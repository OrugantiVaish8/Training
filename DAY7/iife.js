(function(){
    console.log("hello")
})();

((a,b)=>{
    console.log(a+b);
})(10,10);

(function demo()
{
    console.log("hi");
})();

let arr = [10,"hello",true,1n,undefined]
console.log(arr);

let arr1=new Array(10,20,30)
console.log(arr1);

let obj={
    name:"abc",
    id:1,
    boolean:true,
    arr:[10,20,30],
    null:null,
    Undefined:undefined,
    demo:function(){
        console.log("hello")
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.arr);
console.log(obj.id);
console.log(obj.boolean);
console.log(obj.null);
console.log(obj.Undefined);
obj.demo();

const obj1 = (name, id) => {
    let obj = {};
    obj.name = name;
    obj.id = id;
    return obj;
};

let p1 = obj1("abc", 1);
console.log(p1);
console.log(p1.name);
console.log(p1.id);




