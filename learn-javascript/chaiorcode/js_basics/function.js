// xxxxx function xxxxxxxxxx
function stdInf(){
   let name = "jagriti"
   console.log(name);
}
//stdInf()
function sum (num1 , num2){
 return num1 +num2
}
const result = sum(3,5)
//console.log("Result :"  ,result);
// how to pass value in condition 
function log( userName){
    if(!userName){
        console.log("please enter  USERNAME");
        return
    }
    return`${userName} just loged in `
}
//const loginfo =log();
//console.log(loginfo);
//xxxxxxxxxxxxx function 2 xxxxxxxxxxxxxxx//
//when we dont know the number of argument 
//... are slide operator its name depend on the use case  
function calCarprise(val1 ,val2 ,...num1){
    let value1 = val1;
    let value2 = val2;
    //console.log([value1] , [value2]);
   return  num1

}
//console.log(calCarprise(200,444,637,3432));
const  user= {
     name :"jagriti",
     branch : "CSE",
     year :3
}
function handleObject(anyobject){
//console.log(`Username is ${anyobject.name} and branch is ${anyobject.branch}`    );
}
//handleObject(user )
handleObject({
    name :"jagriti",
     branch : "CSE",
})
const myArray =[200,300,429,942,432];
function getAnyArray(anyarray){
    return anyarray[3]
}
let values = getAnyArray(myArray)
console.log(values);const addTwo = (num1 ,num2 ) => (num1+num2)