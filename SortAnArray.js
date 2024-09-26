//sort
const names =['noman','Aman','Arman','Rahim'];
const sortednNames = names.sort();
console.log(sortednNames);
//ascending
const num =[2,4,3,5,6,1,7,8];
// const num_asc =num.sort()
const num_asc = num.sort(function(a,b) {return a-b})
console.log(num_asc);
//Decending
const num_dsc = num.sort(function(a,b) {return b-a})
console.log(num_dsc);