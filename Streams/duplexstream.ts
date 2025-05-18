import { Duplex } from 'stream';

class MyDuplexStream extends Duplex {
    private data: Buffer[];

    constructor(options?: object) {
        super(options);
        this.data = [];
    }

    _write(chunk: Buffer, encoding: string, callback: () => void): void {
        console.log('Writing:', chunk.toString());
        this.data.push(chunk);
        callback();
    }

    _read(size: number): void {
        if (this.data.length > 0) {
            this.push(this.data.shift());
        } else {
            this.push(null); // End the stream
        }
    }
}

const duplexStream = new MyDuplexStream();

duplexStream.write(Buffer.from('Hello, Duplex Stream!'));
duplexStream.on('data', (chunk: Buffer) => {
    console.log('Reading:', chunk.toString());
});