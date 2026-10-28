// For In loop ka use Object me hoga 
const phone = {
    brand : 'Realme',
    model : 'p1',
    price : 15000,
    camera : '50 mp',
    ram : '16 GB',
    rom : '128 GB'
}
for(let key in phone){
    console.log(key, phone[key]);
}