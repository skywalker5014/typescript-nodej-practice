import * as fs from 'fs'

const stream = fs.createWriteStream('./tsdump/writer.txt');

stream.write('Hello world', () => {
    console.log('file created');
})

stream.on('finish', () => {
    console.log('all the data is transmitted');
})

stream.write('hello')
stream.write('again')