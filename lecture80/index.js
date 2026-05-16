// including express module and initialising an application
const express = require('express');
const app = express();

// variable to hold the port number
const port = 3000;

app.get('/', (req, res) => {
    res.send("Get request received");
});

// request -> get / put / post / delete
// path -> / , /about, /articles, /blog

// start your application or server
app.listen(port, () => {
    console.log("Application start ho chuki hai on port");
});