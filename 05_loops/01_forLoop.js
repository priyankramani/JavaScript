for(let i=0; i<=10; i++){
    console.log(i);
}

for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}

// Break and Continue
for(let i=1; i<=10; i++){
    if(i == 5){
        console.log("Detected 5");
        // continue;
        break;
    }
    console.log(`Value of i is ${i}`);
}