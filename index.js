const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', () => {
    res.end('<h1>test run</h1>');
});

app.listen(PORT, () => {
    console.log('Server has been started !!!');
});