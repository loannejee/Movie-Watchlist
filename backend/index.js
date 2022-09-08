const express = require("express");
const app = express();
const PORT = 8080;
/*
Wasn't able to create tables with this:
const db = require("./db/db");
But able when required from ./db/index
*/
const {db} = require("./db/index");

const startServer = async () => {
    // good to do before turning server on. this checks to see of database models match with code models. remember the 'await' because your code/db connection is talking to the database outside of the program
    await db.sync();
    app.listen(PORT, () => {
        console.log(`📡📡📡 SERVER IS RUNNING ON PORT: ${PORT}!`)
    });
}

startServer()

// main route:
app.get('/', (req, res) => {
    res.send('Hello World! 😀 The main route is working.')
})
