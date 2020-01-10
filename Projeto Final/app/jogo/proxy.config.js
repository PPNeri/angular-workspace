// http://localhost:8000/api/...

const PROXY_CONFIG = [{
    context: ['/api'], // estabelecendo qual o endereço do servidor que vai acessar pelo back-end
    target: 'https://swapi.co/', // endereço do servidor sem as uris, antes das rotas do serviço
    secure: true, // pois é http, se fosse https seria true
    logLevel: 'debug', // 3 tipos: debug (faz modificações), info (ver informações) e error (ver os erros)
    pathRewrite: { '^/api': '' } // defini quando utilizamos um serviço de backend que não começa com /api, que geralmente são serviços legados
    // ^ é uma negação. Envez de /api, estamos utilizando tal caminho...
}];

module.exports = PROXY_CONFIG;