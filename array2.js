const arr= require("./array")
const arr2=[1,2,arr]
console.log(arr2[2][4]);

const arr3=arr;
console.log(arr3[3]);
arr3[3]=5
 console.log(arr3);
 arr3[5]="iddk"
 console.log(arr3);
 arr3[arr.length]='123'
 console.log(arr3);
 console.log(arr);
arr3.push("ali")
console.log(arr);
arr.pop()
console.log(arr3);
arr.shift()
console.log(arr3);

arr.unshift('ALI')
console.log(arr3);

console.log(
arr3.indexOf("ALI")
);

arr4=[1,2,arr]
console.log(
    arr4[2].indexOf(null)
    );
    console.log(arr4[2].includes(null));
    