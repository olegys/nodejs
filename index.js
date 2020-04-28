const express = require('express');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://olegys:olegys2020@cluster0-w19nf.gcp.mongodb.net/sample_analytics?retryWrites=true&w=majority';

const server = express();

const PORT = 3000;

server.get('/', (req, res) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
        if (err) throw err;
    
        console.log('connection is ready !!!');
    
        const accountSchema = mongoose.Schema({ name: String, age: Number, email: String });
        const accounts = mongoose.model('accounts', {});
      
        //await Account.create({ name: 'A', age: 30, email: 'a@foo.bar' });
        //await Account.create({ name: 'B', age: 28, email: 'b@foo.bar' });
      
        // Find all
        accounts.findOne({}, (err, data)=> {
            res.end(data);
        });
    });
    
});

server.listen(PORT, () => {
    console.log('Server has been started !!!', PORT);
});