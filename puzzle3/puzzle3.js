const fs = require('fs');
let rows,parsedContent=[];
let horizontal = 0 ;
let vertical = 0 ;

fs.readFile('puzzle3/input.txt',(err,data)=>{
    rows = data.toString().split('\n');
    rows.forEach(row => {
        parsedContent.push(row.split(' '));   
    })

    console.log(parsedContent);
    
    parsedContent.forEach((command) =>{
        console.log(command[0]);
        console.log(command[1]);
    
        switch(command[0]){
            case 'forward' : horizontal += parseInt(command[1]);break;
            case 'up' : vertical += parseInt(command[1]); break;
            case 'down' : vertical -= parseInt(command[1]); break;
        }
    })
    
    console.log(`Horizontal : ${horizontal}`);
    console.log(`Vertical : ${vertical}`);


    console.log(`Multipliction : ${vertical * horizontal}`);

});



