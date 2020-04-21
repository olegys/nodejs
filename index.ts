import express from 'express';

const server = express();

const PORT = process.env.PORT || 80;

server.get('/', (req, res) => {
    res.end('<h1>test123</h1>');
});

server.listen(PORT, () => {
    console.log('Server has been started !!!');
});