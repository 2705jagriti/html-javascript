const myArray2 =  new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(myArray2);
myArray2.push(7);
// console.log(myArray2);
myArray2.pop()
// console.log(myArray2);
// Shift remove element zat index 0
myArray2.shift();
// console.log(myArray2);
// console.log(myArray2.includes(33));
//unshift to add element at index 0
// console.log(myArray2.indexOf(9));g
// const newArray = myArray2.join();
// console.log(myArray2);
// console.log( typeof newArray);
//slice ,splice  
 console.log("A" , myArray2);
const  newn1 =  myArray2.slice(1,3)

console.log(newn1);
console.log("B", myArray2);
const  newn2 =  myArray2.splice(1,3)
console.log("C", myArray2);
console.log(newn2);