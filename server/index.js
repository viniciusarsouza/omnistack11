const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Omnistack 11.0',
        aluno: 'Vinicius'
    });
});

app.listen(3333);