const arr=["string",1,true,null,undefined]
const arr1=["string",1,true,null,arr]

const [a,b,c,d,e]=arr1
console.log(a);
console.log(e);

arr1[4][1]="string"
console.log(arr1);
console.log(arr);

const obj={
    name:"ali",
    age:20,
    dob:1990,
    cnic:333-333-333,
    "i will not go":"idk",
    obj1:{
        name:"ali",
        age:20,
        dob:1990,
        cnic:44,    
    }
}
const {age,obj1}=obj
console.log(age);
console.log(obj1);
const{cnic}=obj.obj1
console.log(
    cnic
);

const func=({name,obj1,cnic})=>{
console.log(name);
console.log(obj1.cnic);
console.log(cnic);

}

func(obj)

const func1=([a,...b])=>{
console.log(a);
console.log(b[3][3]);
// console.log(e[3]);

}
func1(arr1)

const arr2=["string",1,true,null,undefined]
arr3=[...arr2]
arr3[0]='aa'
console.log(arr3);
console.log(arr2);


const obj2={
    name:"ali",
    age:20,
    dob:1990,
    cnic:333-333-333,
    "i will not go":"idk",
    obj1:{
        name:"ali",
        age:20,
        dob:1990,
        cnic:44,    
    }
   
}
const {name,...rest}=obj2
console.log(name);
console.log(rest.obj1.cnic);

const arr4=["string",1,true,null,undefined,arr2]
arr5=[...arr4]
arr5[5][1]="ali"
console.log(arr5);
console.log(arr4);

for (let a = 0; a <10; a++) {
 console.log(a);

 
}

let g=1
while (g<10) {
    console.log(g);
    g++
}


for (let a = 0; a <60; a++) {
if(a%2==0){
    continue
}   
if (a==57) {
    break
}
else
{
    console.log(a);
    
}
    
   }

   const arr6=[1,2,3,4,5,6]
   arr6.forEach((value,index,arra)=>{
console.log(value);
console.log(index);
console.log(arra);

   })


   const arr34=[1,2,3,4,5]
   arr34.map((value,index,are)=>{
    console.log(value*10);
    console.log(index);
    are[3]=99
console.log(are);

   })
 console.log(arr34);


 const arr38=[1,2,3,4,5]
 arr34.map((value,index,are)=>{
  return value

 })
console.log(arr38)

const people={
    name:'ali',
    age:90,
    cnic:333
}
 console.log(Object.keys(people));
 console.log(Object.entries(people));
 console.log(Object.values(people));

 const user={
    username:"Ali",
    price:999,

    funct:function (){console.log(`${user.username} ,hello`);

}
    
 }
user.funct()
user.username='sss'
user.funct()
