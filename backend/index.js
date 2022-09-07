const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`📡📡📡 SERVER IS RUNNING ON PORT: ${PORT}!`)
})

// main route:
app.get('/', (req, res) => {
    res.send('Hello World! 😀 The main route is working.')
})