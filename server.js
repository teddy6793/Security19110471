const path = require('path');
const express = require('express');
const https = require('https');


const PORT =3000;

const app = express();

app.get('/secret',(req,res)=>{
    return res.send('your personal secret value is 20');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

https.createServer({
    key:"",
    cert:"",

}).listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
})
