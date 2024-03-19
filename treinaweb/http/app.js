import * as http from 'http'

// const server = http.createServer((req, res) => {
//     res.writeHead('200', { 'content-type': 'text/html' });
//     res.write('<h1>TreinaWeb</h1>');
//     res.end();
// });

const server = http.createServer((req, res) => {
    res.writeHead('200', { 'content-type': 'text/html' });
    var url = req.url;
    if (url === '/sobre') {
        res.write('<strong><h1>Treianmento Sobre</h1></strong>');
        res.write('<em><p>validando servido Node.js</p></em>');
        res.end();
    } else if (url === '/contato') {
        res.write('<h1>TreinWeb Contato</h1>')
        res.end();
    } else {
        res.write('<h1>TreinaWeb</h1><br><a href="/sobre">Sobre</a><br> href="/contato">Contato</a> ');
        res.end();
    }

});

server.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000!');
})