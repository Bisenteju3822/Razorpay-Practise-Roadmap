const fs = require('fs');

// Create a writable stream to a file
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, Tejasave!\n');  // Writes data
writableStream.write('This data is saved in output.txt\n'); 

writableStream.end(() => { 
    console.log('Finished writing to file.');
});
