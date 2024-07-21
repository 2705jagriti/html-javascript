const user ={
    userName : "jagriti",
    price:533,

    welcomemessage :function(){
        console.log(`${this.userName} welcome to the website `);
        console.log(this);
    }
}
// user.welcomemessage()
// user.userName = "sam"
// user.welcomemessage()
//console.log(this);
// in window's it will give windows object as back times js was only executable by one engine only 
//but now we can execute it with node and other engin also

// otherhand when we call this in function it gives a number of values 

// function chai(){
//     let userName = "jagriti"
//     //we cant use this as we use it in object 
//     console.log(this);
// }
// chai()
const   chai = ()  => {
    let userName = "jagriti"
    console.log(this);
}
//chai()
// xxxxxxxx arrow function xxxxxxxxxxxxx//

// const addTwo = (num1 ,num2 ) => {
// return num1+num2
// }
// console.log(addTwo(2,8));

// implicite return in this we dont need to use the parenthesis
// we can directly shift in same line and use() for parameter

//const addTwo = (num1 ,num2 ) => (num1+num2)

const addTwo = (num1 ,num2 ) => ({userName : "jagriti"})

     console.log(addTwo(2,6));

const myArray =[2,5,3. ,7,3,8]
myArray.forEach( () => {})