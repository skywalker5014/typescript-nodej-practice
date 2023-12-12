import { createServer, IncomingMessage,  ServerResponse } from "http";

const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    if(request.method === 'POST'){
        request.on('data', data => {
            console.log(data.toString());
            
        })
    }
    response.end('hello world');
})

//@ts-ignore
server.listen(port , error  => {
    error ? console.log(error) : console.log('server listening on port ' + port)
})