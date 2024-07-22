//xxxx if condition xxxxx
const month = 3;
// switch (month) {
//   case 1: {
//     console.log("January");
//     break;
//   }
//   case 2: {
//     console.log("febrary");
//     break;
//   }
//   case 3: {
//     console.log("March");
//     break;
//   }
//   case 4: {
//     console.log("April");
//     break;
//   }
//   case 5: {
//     console.log("May");
//     break;
//   }
//   default:
//     console.log("Wrong input");
// }
//xxxxxxxx truthy and falsy xxxxxxxxxx//
const userEmail= [];

// string are by default TRUE;;
const userEmai="0";
if(userEmai){
    // console.log("do have email");

}
else{
    // console.log("dont have email");
}
// FALSEY 0 ,-0 ,bigint 0n , null ,NaN ,undefined , ""
// TRUTHY string ,number  , array ,"0" ,'false' , {empty object }, function(){empty function}
// const userEmail11= [];
// if (userEmail11.length === 0 ){
//     console.log("Array is empty");
// }
const obj1 = {}
// Object.keys() return arrya of keys
if (Object.keys(obj1).length === 0){
// console.log("empty");
}
// NULLISH COALESCING OPERATOR(??) : null , undefined \
let val1;
// val1 = 5 ?? 10 ;
// val1 = null ?? 10 ;
val1 = undefined ?? 20;
//console.log(val1);
// ternary condition ? true : false//
let userName ="jagriti";
2==="2"? console.log("correct "): console.log("Incorrect");