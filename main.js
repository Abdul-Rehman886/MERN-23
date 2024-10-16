const user = require("./user");
let header;

const setHeader =(newValue)=>{
    header= newValue;
    
};
user(setHeader); 




header=="home" && console.log("Home");
header=="task" && console.log("Task");
header=="profile" && console.log("Profile");