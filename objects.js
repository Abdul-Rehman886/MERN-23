const obj={
naam:"abdulrehman",
age:20,
dob:2004,
cnic:333,
"what do i like":"idk"
}
console.log(
    obj["name"]
);

obj["class"]=14

console.log(
    obj
);

obj.height="5'9"


console.log(
    obj
);

obj.name="ali"
console.log(
    obj
);


console.log(
    obj["what do i like"]
);

const obj1={
    naam:"abdulrehman",
    age:20,
    dob:2004,
    cnic:333,
    "what do i like":"idk",
    course:{
name:"mern",
classname:23
    }
    }
    console.log(obj1.course.classname);
    
    obj1["course"]["gender"]="male"
    console.log(obj1);
    
const{naam,age}=obj1
console.log(naam);
console.log(age);

const func=(p1)=>{
console.log(p1);

}
func(obj1.cnic)

const func1=({cnic})=>{
    console.log(cnic);
    
    }
    func1(obj1)

    const arr=[1,2,3,4,5]
    const[a,b,...c]=arr
    console.log(a);
    console.log(b);
    console.log(c);
    
    const arr1= [...arr]
     arr1[2]=9;
     console.log(arr);
     console.log(arr1);
     
const {cnic,dob,...rest}=obj1
console.log(cnic);
console.log(dob);
console.log(rest);

const arr2=[1,2,3,[4,5]]
console.log(arr2[3][1]);
const arr3=[...arr2]
arr3[2]=9
console.log(arr2);
console.log(arr3);

arr3[3][1]=9
console.log(arr2);
console.log(arr3);

const arr4=([a,b,...c])=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
arr4(arr2)

const arr5=(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
arr5(...arr2)

