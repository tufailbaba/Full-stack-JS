setInterval (()=>
    console.log('This function will be executed every 2 second.'),
2000 );
    
 // setTimeout
setTimeout(function(){
    console.log('This function will be executed after 3 sec');

    
},3000)

//clear interval

const intervalId = setInterval(function(){
    console.log('This function is being executed at the interval');
    
},1000);
setTimeout(function(){
    clearInterval(intervalId)
    console.log('Interval Stopped');
    
},100000)