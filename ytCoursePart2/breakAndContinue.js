// BREAK
// breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i += 1) {
    if(i == 13){
        break;                      // break will end the code at i = 13
    }
    console.log(i);
}

for(let i = 1; i <= 20; i += 1) {
    if(i == 13){
        continue;                   // continue will skip the console.log() method for i = 13, then continue until i = 20
    }
    console.log(i);
}