//loop trough 1-100 if the number is divisible by 3 print Julia 
// if it is divisible by 5 print James
// if it is divisible by both 3 and 5 print JuliaJames
// if not divisible by any print the number

for (let i = 1; i <= 20; i++) {
 while (i % 3 === 0 && i % 5 === 0){
  console.log('JuliaJames');
  break;
 }  
   while (i % 3 === 0){
    console.log('Julia');
    break;
   }
     while (i % 5 === 0){
      console.log('James');
      break;
     }
     console.log(i);
}