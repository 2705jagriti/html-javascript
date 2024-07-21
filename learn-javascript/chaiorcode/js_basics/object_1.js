// can be declares as  litral or constructor
//jb litral ki trh declare karty hai to singaltun nhi banta hai
Object.create//constructor ke through
const mysym = Symbol("key1")
const jsUser = {
    userName:"jagriti",
    // add symbol 
   [ mysym]: "myKay1",
    age : 21,
    email :"js738@gmail.com",
     fullName : "jagriti chaudhary"

}
//Object.freeze(jsUser)
//console.log(jsUser.full name  );
//  console.log(jsUser["fullName"]);
//  console.log(jsUser[mysym]);
// jsUser.email = "jdks32@jsds.com"
// console.log(jsUser["email"]);
//console.log(jsUser);
//jsUser.greeting = function(){
//     console.log("hello user");

// }
// //console.log(jsUser.greeting());
// jsUser.greetingTwo = function(){
//     console.log(`hello user, how are you ${this.userName}`);

//}
//console.log(jsUser.greetingTwo());


//xxxxxxxxx object xxxxxxxxxxxxxx//


//const tinderUser = new Object()//singelton object 
//const tinderUser ={}// non singelton object 
const tinderUser={
    userId : 12354,
    name :"samy" ,
    ageUser: 12 ,
    fullNameUser : {
        firstName:"jagriti",
        midName:null,
        latsName: "chaudhary"
    }

}
//console.log(tinderUser[typeof latsName]);
//console.log(tinderUser.fullNameUser.latsName);
 //const obj1 = {tinderUser , jsUser}
 // const obj1 = Object.assign({}, tinderUser,jsUser)
 //console.log(obj1);


 //xxxxxxx object 3   xxxxxxxxxxx
 //destructure 
 const course={
    courseName:"javascript",
    price: 800,
    courseInstructor:"Hitesh"
 }
 //course.courseInstructor
 //from where to extract value 
 const  {courseInstructor } = course
 console.log(courseInstructor)
 //console.log(instructor);