module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })

    server.get('/filmes', (require, response) => {
        const sql = 'SELECT * FROM filmes';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("filmes: ", res);
            response.json(res)
        })
    })
};
