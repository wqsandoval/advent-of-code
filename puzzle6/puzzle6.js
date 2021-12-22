const { match } = require('assert');
const fs = require('fs');

let rows=[];
let counter = 0 ;
let iter = 0;
let oxygen = 0, carbon = 0;

fs.readFile('puzzle6/input.txt',(err,data)=>{
    rows = data.toString().split('\n');

    //Oxigen Generator rating 
    while(rows.length > 1){
        rows.forEach(row =>{
            counter +=  row.charAt(iter)==1?1:0
        })

        if(counter >= (rows.length/2)){
            rows = rows.filter(row => row.charAt(iter) == 1);
        }else{
            rows = rows.filter(row => row.charAt(iter) == 0);
        }
        iter++;
        counter = 0;
    }

    oxygen = parseInt(rows,2);
    console.log(`Oxigen Generator : ${rows}`);
    
    counter = 0 ;
    iter = 0;
    
    rows = data.toString().split('\n');
    //CO2 Scrub rating 
    while(rows.length > 1){
        rows.forEach(row =>{
            counter +=  row.charAt(iter)==1?1:0
        })
        
        if(counter >= (rows.length/2)){
            rows = rows.filter(row => row.charAt(iter) == '0');            
        }else{
            rows = rows.filter(row => row.charAt(iter) == '1');
        }            
        iter++;
        counter = 0;
    }
    carbon = parseInt(rows,2);
    console.log(`CO2 scrub : ${rows}`);
    console.log(`Final result : ${oxygen * carbon}`);
});