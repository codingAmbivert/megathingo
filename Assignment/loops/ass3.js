//multiply the factorial of 12 using for loop


let arr = [];

for (let i = 1; i <= 12; i++){
arr.push(i)
}
let solution = arr[0]*arr[1]*arr[2]*arr[3]*arr[4]*arr[5]*arr[6]*arr[7]*arr[8]*arr[9]*arr[10]*arr[11];
console.log(solution);


//OR


//destructuring
let a,b,c,d,e,f,g,h,i,j,k,l;
let secondArr = [];
for (let i = 1; i <= 12; i++){
 secondArr.push(i)
}
 [a, b,c ,d ,e ,f ,g ,h , i,j ,k, l] = secondArr;
 let solution2 = a*b*c*d*e*f*g*h*i*j*k*l;

console.log(solution2)