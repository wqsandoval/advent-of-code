const { Console } = require('console');
const fs = require('fs');
let increaseCounter=0;

fs.readFile('puzzle2/input.txt',(err,data)=>{
    let content,parsedInput = [],parsedWindows= [] ;
    let lastElement = Number.MAX_SAFE_INTEGER;


    if(err){
        console.log(err.message)
    }else{        
    content = data.toString().split('\n');    
    parsedInput = content.map(element => parseInt(element));
    
    for(let index = 0; index < parsedInput.length-2; index++) {
        const window = parsedInput[index] + parsedInput[index + 1] + parsedInput[index + 2];
        parsedWindows.push(window);
    }

    parsedWindows.forEach(element => {
        if(element > lastElement){
            increaseCounter++;            
        }
        lastElement = element;
    });
    
    console.log(increaseCounter);
    }
});
