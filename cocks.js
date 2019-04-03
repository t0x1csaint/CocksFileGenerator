//shit
const fs = require('fs');
const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout
});
//Where the shit takes ya stupid fucking words and converts it to cocks
readline.question(`Input Text `, (text) => {
    // takes ur letterz
 const userInputText = text.trim();
 //tells you the stupid shit you said...
 console.log(`Text: ${text}`)
 // writes it to file
 fs.writeFile('New text file.cocks', text, (err) => {  
    // MF EHROR
    if (err) throw err;

    // WOOOO IT WORKY
    console.log('Cocks Saved');
     readline.close();
   });
});