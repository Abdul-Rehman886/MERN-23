function name(p1,p2) {
    console.log(p1); //1
    console.log(p2); //2
    
}
name(1,2)


function name(p1,p2) {
    console.log(p1); //undefined
    console.log(p2); //undefined
    
}
name()


function name(p1,p2) {
    console.log(p1); //1
    console.log(p2); //undefined
    
}
name(1)


function name(p1,p2) {
    console.log(p1); //error
    console.log(p2); //error    
}
// name(,1)

var name=function (p1,p2) {
    console.log(p1); //2
    console.log(p2); //1  
}
name(2,1)
name=20;
console.log(name);


((p1)=>{
    console.log(p1);
    
})

(199)