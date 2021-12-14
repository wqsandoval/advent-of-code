const fs = require('fs');

let rows,parsedContent=[];

let mostSignificantBit = 0,leastSignificantBit=0;
let bits = []
let bitsAccumulator= [0,0,0,0,0,0,0,0,0,0,0,0];

fs.readFile('puzzle5/input.txt',(err,data)=>{
    rows = data.toString().split('\n');
    


    rows.forEach(row => {
        bits = row.split('');
        console.log(bits);

        for (iter = 0;iter < bits.length;iter++){
            bitsAccumulator[iter] +=  parseInt(bits[iter]);
        }
    })

    for(iter = 0 ;iter < bitsAccumulator.length;iter++){
        if(bitsAccumulator[iter] > rows.length/2){
            mostSignificantBit += 1 * (2**(11-iter)) 
        }else{
            leastSignificantBit += 1 * (2**(11-iter)) 
        }
        console.log(mostSignificantBit);
        console.log(leastSignificantBit);    
    }


    console.log(mostSignificantBit * leastSignificantBit);    
});


