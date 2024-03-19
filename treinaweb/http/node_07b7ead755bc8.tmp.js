import * as http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead('200', { 'content-type': 'text/html' });
    res.write('<h1>TreinaWeb</h1>');
    res.end();
});

server.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000!');
})