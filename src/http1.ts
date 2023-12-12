import { request } from "http";
import { createWriteStream } from "fs";

const fileStream = createWriteStream('./tsdump/http1.txt')

const req = request(
    {
        host: 'jsonplaceholder.typicode.com',
        path: '/todos/1',
        method: 'GET'
    },
    response => {
        console.log(response.statusCode);;
        response.pipe(fileStream)
    }
)

req.end();