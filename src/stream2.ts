import { Readable } from "stream";

const stream = new Readable()

const read = stream.read.bind(stream);

stream.read = function() {
    console.log('read() called');
    return read()
    
}

stream.push('one')
stream.push('two')
stream.push('three')
stream.push(null)

stream.on('data', chunk => {
    console.log(chunk);
    
})