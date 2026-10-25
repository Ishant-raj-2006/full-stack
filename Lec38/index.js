const person = {
    Name : "Ishant Raj",
    age : 21,
    salary : 1234567890,
    phone : 8317735828,
    gmail : "ishant786raj@gmail.com"
}
console.log(person)

const laptop ={
    Model_name :"HP ProBook",
    Ram :"16 GB",
    ssd : "512 GB",
    price : 90000
}

console.log(laptop)

// Spread operator  ka use kr ke three dot se kisi bhi object ko kisi dusare object me copy kr sakte hai jaise ki niche maine ek new object banya hai laptop2 naam se aur ab mujhe bs uss ka ek part update krna tha toh maine spread operator ka use kiya hai aur iss me mera kaam 2 line me coplite ho gya hai 
const laptop2 = {...laptop, ram :"20 GB"}
console.log(laptop2)