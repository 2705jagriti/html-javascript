// xxxxxxxxxxxxxxxx FOR OF XXXXXXXXXX//
const arr = [1, 2, 3, 4, 5, 6, 7];
// const coding= ["js" , "ruby ", "java " ,"python" , "cpp "];
// yha pe object ka matlb hai kha pe loop lagana hai
for (const val of arr) {
    //  console.log(val);
}
const greeting = "hellow world";
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
}

//MAP // have ordered ,uniqe and no duplicatce
// map(give number of element )
 const myMap =  new Map()
 myMap.set("IN" , "india")
 myMap.set("UK" , "United kingdom")
 myMap.set("USA" , "United state America")
 myMap.set("CD" , "Canada")
// console.log(myMap);
 for (const [key ,value ] of myMap) {
  // console.log(key ,':', value);
  
 }
 const myObj ={
 "exr1" : "back",
  "exr2" : "leg",
  "exr3 ": "abbs",
 "exr4" : "arm",
  }
   console.log(myObj);
  //  forof does not work for object 
  for (const [key , value] of myObj) {
  console.log(key ,":", value);
  }