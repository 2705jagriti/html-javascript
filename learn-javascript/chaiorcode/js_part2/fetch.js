fetch('https://api.github.com/users/jagritichaudhary')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error :" , error);
})