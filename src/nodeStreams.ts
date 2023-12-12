import * as fs from 'fs'

const stream = fs.createReadStream('./tsdump/readstream.txt', {encoding: "utf-8"});

stream.on('data', (chunk) => {
    console.log('new chunk of data: \n', chunk);
    // console.log(chunk.toString());
    
    
})