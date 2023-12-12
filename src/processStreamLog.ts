import * as fs from 'fs'

const readable = fs.createReadStream('./tsdump/readstream.txt')

readable.pipe(process.stdout)