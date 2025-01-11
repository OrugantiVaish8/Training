// function parent()
// {
//     function child() {
//         console.log("I am Child Function")
//     }
//     child()
// }
// parent()

// var a =10
// let b=20
// function parent1()
// {
//     var a="hello"
//     let b="hi"
//     console.log(a)
//     console.log(b)
//     console.log(this.a)
//     console.log(this.b)
// }
// parent1()

//lexical scope/scope chain
//the ability of js engine search bar variable in local scope if it is not available it will start search in global scope
// function main()
// {
//     let a=10
//     function child(){
//         console.log(a)
//     }
//     child()
// }
// main()


// console.log("start")
// function parent()
// {
//     let a = 10
//     function child()
//     {
//         console.log(a)
//     }
//     return child
// }
// parent()()

function parent()
{
    function child1()
    {
        console.log("I am child 1")
        function child3(){
            console.log("i am child 3")
        }
        return child3
    }
    

    function child2()
    {
        console.log("I am child 2")
    }
    return [child1, child2] 
}
parent()[0]()()
parent()[1]()