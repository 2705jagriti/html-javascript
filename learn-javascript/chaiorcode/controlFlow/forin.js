//xxxxxxxxx  FOR IN XXXXXXXXXX//


const myObj = {
  exr1: "back",
  exr2: "leg",
  exr3: "abbs",
  exr4: "arm",
};
// for object we use forin loop

for (const key in myObj) {
  // console.log(key , ": " , myObj[key]);
  // console.log( key ,"=>" ,myObj[key]);
}
 const arr =[1,2,3,4,5,]
 for (const key in arr) {
  // console.log(key);
  //console.log(key ,":",arr[key]);
  //console.log( key ,":",arr);
 }
// MAP AFE NOT ITRETABLE

 const myMap =  new Map()
 myMap.set("IN" , "india")
 myMap.set("UK" , "United kingdom")
 myMap.set("USA" , "United state America")
 myMap.set("CD" , "Canada")
 for (const key in myMap) {
  //console.log(key);
 }
