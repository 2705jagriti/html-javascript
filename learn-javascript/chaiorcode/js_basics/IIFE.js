// Immediate Invoked Funtion Expession (IIFE)
// we use iife to prevent from global scope polution (globe declation)

(function chai(stdname){
    //named iife
    console.log(`DB connected to ${stdname}`)
})("hitesh");


// without writting chai() for immediate invokation by addinfg ()


((name) => {
// without name with parameter 

   console.log(`DB connected to  ${name}`) ;
}) ("jagriti")