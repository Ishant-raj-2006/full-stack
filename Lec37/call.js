console.log("CallBack Function ");

let greet = (name , callback) => {
    console.log("Hello Ishant Raj"+name);
    callback();
}
let sayBye = () => console.log("Bye !");
greet("Ishant ",sayBye);