  const heading = document.querySelector('h1')
  heading.style.backgroundColor = "gray"
 const randomValue = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let  i =0 ; i<6 ;i++) {
      color +=hex[(Math.floor(Math.random()*16))]
    }
    return color;
 };
 let interval;
 const startcolor = function(){
    interval=setInterval(selectcolor, 1000)
    function selectcolor(){
        document.body.style.background= randomValue();
    }
 }

 const stopcolor = function(){
    clearInterval(interval)
 }

 document.getElementById('start').addEventListener('click' , startcolor); 
 document.getElementById('stop').addEventListener('click' , stopcolor); 