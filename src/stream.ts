import { Readable } from "stream";

const stream = new Readable();

stream.push('line one')
stream.push('line two')
stream.push('line three')
stream.push('line four')
stream.push(null) // passing null indicates or signals that the stream is done outputting data

stream.on('data', chunk=>{
        console.log(chunk.toString());  
} )


/*
in the example above, we push data before attaching the ‘data‘. 
We receive the chunks with the ‘data‘ event listener because when we first 
create the stream, it is in a paused mode. Thanks to that, we don’t lose the data.
 */