const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const links = require('./router/Links');

app.use(cors());
app.use(express.json());

const run = async ()=>{
    await mongoose.connect('mongodb://localhost/url', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use('/url', links);
    app.listen(port)
};

run().catch(e=>{
    console.error(e)
});