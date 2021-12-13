const fs = require('fs');
let increaseCounter=0;

fs.readFile('puzzle1/input1.txt',(err,data)=>{
    let content,parsedInput = [],lastElement = Number.MAX_SAFE_INTEGER;


    if(err){
        console.log(err.message)
    }else{        
    content = data.toString().split('\n');
    
    parsedInput = content.map(element => parseInt(element));
    
    parsedInput.forEach(element => {
        if(element > lastElement){
            increaseCounter++;            
        }
        lastElement = element;
    });

    console.log(increaseCounter);
    }
});
