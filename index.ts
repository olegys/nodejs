import express from 'express';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient('mongodb+srv://olegys:<password>@clouddb-w19nf.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoClient.connect(function (err, client) {

    if (err) {
        return console.log(err);
    }
    

    console.log('connect to db !');

    client.close();
});

const server = express();

const PORT = process.env.PORT || 80;

server.get('/', (req, res) => {
    res.end('<h1>test123</h1>');
});

server.listen(PORT, () => {
    console.log('Server has been started !!!');
});