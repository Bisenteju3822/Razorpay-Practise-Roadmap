const { Readable } = require('stream');
const inStream = new Readable({
    read() { }
}

)
inStream.push('GeeksForGeeks : ')
inStream.push(
    'A Computer Science portal for Geeks');

inStream.push(null);
inStream.pipe(process.stdout);