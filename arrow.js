// const a=2;
// const promise1= new Promise ((res,rej)=>{
// if (a%2==0) {

//     setTimeout(() => {
//         res (new Date())
//     }, 3000);
// }
// else{
// rej("odd")
// }
// })

// const promise2= new Promise ((res,rej)=>{
// if (a%2==0) {
//     res (new Date())

// }
// else{
// rej("false")
// }
// })

// promise1.then((res)=>{
// console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })

// promise2.then((res)=>{
//     console.log(res);
//     }).catch((rej)=>{
//         console.log(rej);
//     })

// const funct= async()=>{

//    await promise1.then((res)=>{
//         console.log(res);
//         }).catch((rej)=>{
//             console.log(rej);
//         })

//      await   promise2.then((res)=>{
//             console.log(res);
//             }).catch((rej)=>{
//                 console.log(rej);
//             })

// }
// funct()

// const promise1 = new Promise((res) => {
//     res(new Date());
// });

// let promise2 = new Promise((res) => {
//    setTimeout(() => {
//         res(new Date());
//     }, 1000);
// });


// // const funct = async () => {
//    promise1.then((res) => {
//         console.log(res);
//     });

// const func=()=>{


// while (promise2  ) {

//     promise2.then((res) => {
//         console.log(res);
//         promise2++
//     });
// }
// }
// func()


//     // funct();
// // };

// // funct();






// async (newTime)=>{
// await newTime(()=>{
// while (1) {
//    newTime()
// }
// })

// }
// newTime()





const promise1 = new Promise((res) => {
  setTimeout(() => {
        res(new Date());
    }, 1000);
})

const main = async () => {
    promise1.then((res) => {
        console.log(res);

    });


}

while (main) {
        
    main()
}
