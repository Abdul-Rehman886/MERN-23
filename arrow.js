const a=2;
const promise1= new Promise ((res,rej)=>{
if (a%2==0) {

    setTimeout(() => {
        res (new Date())
    }, 3000);
}
else{
rej("odd")
}
})

const promise2= new Promise ((res,rej)=>{
if (a%2==0) {
    res (new Date())

}
else{
rej("false")
}
})

promise1.then((res)=>{
console.log(res);
}).catch((rej)=>{
    console.log(rej);
})

promise2.then((res)=>{
    console.log(res);
    }).catch((rej)=>{
        console.log(rej);
    })

const funct= async()=>{

   await promise1.then((res)=>{
        console.log(res);
        }).catch((rej)=>{
            console.log(rej);
        })

     await   promise2.then((res)=>{
            console.log(res);
            }).catch((rej)=>{
                console.log(rej);
            })

}
funct()

const promise1 = new Promise((res) => {
    res(new Date());
});

const promise2 = new Promise((res) => {
   setTimeout(() => {
        res(new Date());
    }, 1000);
});


const funct = async () => {
    await promise1.then((res) => {
        console.log(res);
    });

    await promise2.then((res) => {
        console.log(res);
    });

    funct();
};

funct();
