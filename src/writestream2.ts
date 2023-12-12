import * as fs from 'fs'

const readable = fs.createReadStream('./tsdump/writer.txt')
const writable = fs.createWriteStream('./tsdump/writercopy.txt')

readable.on('data', chunk => {
    writable.write(chunk);
})


/*
using pipe function ::
readable.pipe(writable)
*/