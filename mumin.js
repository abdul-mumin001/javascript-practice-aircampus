// let a=20;
// let b=30;
// if(a>b){
//     console.log(a)
// }else{
//     console.log(b)
// }

// let a=process.argv[2];
// let b=process.argv[3]

// console.log(a+b)

// let a=parseInt(process.argv[2]);
// let b=parseInt(process.argv[3])

// console.log(a+b)


// let a=process.argv[2];
// let b=process.argv[3]

// console.log(process.argv)


//Q. Using a loop print all the natural numbers up to and including n


// let n=parseInt(process.argv[2])
// for(let i=1; i<=n;i++){
//     console.log(i)
// }

//Q. using a loop print all even numbers up to and including n.

// let n=parseInt(process.argv[2])
// for(let i=1; i<=n;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


//Q. print all the numbers from a to b in their reverse order

let a=parseInt(process.argv[2])
let b=parseInt(process.argv[3])
for(let i=a; i<=b;i--){
    console.log(i)
}

