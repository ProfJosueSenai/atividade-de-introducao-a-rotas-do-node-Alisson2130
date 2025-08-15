const http = require('http');
const porta = 3000

const server = http.createServer((req, res) => {
    
    // Mostra a rota solicitada
    const url = req.url;
    console.log('url: ', url);

    // Aqui vão as Rotas
    if (url === '/') {
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Mercadinho do jojo</h1>');
    } else if (url === '/verduras') {
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>alface</li><li>rucula</li></ul>');
    } else if (url === '/carnes') {
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>frango</li><li>carne bovina</li><li>peixe</li></ul>');
    } else if (url === '/frutas') { 
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>maçã</li><li>banana</li><li>laranja</li></ul>');
    } else if (url === '/bebidas') { 
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>água</li><li>suco de laranja</li><li>refrigerante</li></ul>');
    } else { 
       res.writeHead(404, 'Página não encontrada', { 'Content-Type': 'text/html; charset=utf-8' });
       res.end('Página não encontrada');
    }
});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});