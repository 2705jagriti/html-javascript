// // creat promises
// const promiseOne = new Promise(function (resolve, reject) {
//   // do a async task
//   //DB calls, cryptography,networking
//   setTimeout(function () {
//     //console.log("Async task completed");
//     resolve()
//   }, 1000);

// });
// promiseOne.then(function () {
//  // console.log("Promise comsumed ");
// });

// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//        // console.log("passing task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     //console.log("doen");
// })
//  const promise3 = new Promise((resolve, reject) => {
//     setTimeout(function(){
// resolve({userName:"jagriti" , email :"xyz@gmail.com"})
//     }, 1000)
//     // prameter passed under resolve automa.. comes in then(function)
// }).then(function(user){
//     //console.log(user);
// })

const promise4 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "jagriti", email: "xyz@gmail.com" });
    } else {
      reject("ERROR");
    }
  }, 1000);
});
promise4
  .then((user) => {
    //console.log(user);
    return user.userName;
  })
  .then((userName) => {
    //console.log(userName);
  })
  .catch(function (error) {
    //console.log(error);
  })
  .finally(() => {
    //console.log("either resolve or reject");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error= true;
    if (!error) {
      resolve({ userName: "jagriti", email: "xyz@gmail.com" });
    } else {
      reject("ERROR");
    }
  }, 1000);
})
// async function consumePromise5(){
//     const response = await promise5;
//     console.log(response);
// }
// consumePromise5()


async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()

