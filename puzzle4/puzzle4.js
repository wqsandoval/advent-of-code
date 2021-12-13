const fs = require('fs');

let rows,parsedContent=[];
let horizontal = 0 ;
let depth = 0 ;
let aim = 0;

fs.readFile('puzzle4/input.txt',(err,data)=>{
    rows = data.toString().split('\n');
    rows.forEach(row => {
        parsedContent.push(row.split(' '));   
    })


    parsedContent.forEach((command) =>{
            switch(command[0]){
            case 'forward' : 
                horizontal += parseInt(command[1]);
                depth += aim * command[1];
                break;
            case 'up' : 
                aim -= parseInt(command[1]); 
                break;
            case 'down' : 
                aim += parseInt(command[1]); 
                break;
        }
    })
    
    console.log(`Multipliction : ${depth * horizontal}`);

});



