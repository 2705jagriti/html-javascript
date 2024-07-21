//xxx loops xxxxxx
//xxxxxx date  and time xxxxx//
let currentDate = new Date()
// console.log(currentDate.toISOString());
// console.log(currentDate.toLocaleDateString());
// console.log( typeof currentDate);

 let mydate  = new Date (2002,3,3)
// console.log(mydate.toLocaleDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);// current milisecond from that time
console.log(mydate.getTime());
// to compaire two
console.log(Date.now()/1000); 
console.log(Math.floor(Date.now()/1000));
//give value in deciaml to convert we use math.floor
//mydate.toLocaleDateString() is good it take object as an argument 
