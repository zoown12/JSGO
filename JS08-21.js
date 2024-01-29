outer : for(i=0;i<4;i++){
    for(j=0; j<4; j++){
        if(i+j === 3){break outer;}
        console.log([i,j]);
    }
}
console.log("DONE!!");