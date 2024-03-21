import * as http from 'http';
import * as fs from 'fs';
import * as pdf from 'html-pdf';

const server = http.createServer((req, res) => {
    var html = fs.readFileSync('index.html', 'utf8');
    const currentDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    html = html.replace('{{data_atual}}', currentDate);
    

    const options = {
        format: 'A4',
        orientation: 'portrait'
    };

    pdf.create(html, options).toBuffer((err, buffer) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(err));
        }
        res.setHeader('Content-Type', 'application/pdf');
        res.end(buffer);
    });
});

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000!');
});
