// reduce(): Reduce an array to a single value by applying a function to each element. 
let re = [312,12,34214,4321,214,546,45,78789,678,23];
let res = re.reduce((prev , ele)=> prev+ele,0);
console.log(res)