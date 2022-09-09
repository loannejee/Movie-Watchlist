const router = require('express').Router();
const { Genre } = require('../db/index')

// GET /api-routes/genre
// respond with HTML text to be rendered by the browser
// when we hit this route, we're sending back a html form:
router.get('/', async (req, res, next) => {
    res.send(
        `
        <DOCTYPE html>
        <html>
            <style>
                body {
                    background-color: powderblue;
                    font-family: Monospace
                }
                input {
                    padding: 6px 10px;
                    box-sizing: border-box;
                    height: 46px;
                    width: 300px
                }
                h1 {
                    margin-top: 20px;
                    box-sizing: border-box;
                    font-size: 40px;
                }
                label {
                    font-size: 36px;
                }
                button {
                    font-size: 20px;
                    height: 46px;
                    width: 150px
                }
            </style>

            <head><title>Add a new genre</title></head>

            <body>
                <h1>Add new genre</h1>
                <form method="POST" action="/api-routes/genre">
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name"/>
                        <button type="submit">Add Genre</button>
                    </div>
                </form>
            </body>
        </html>
        `
    )
});

// POST /api-routes/genre
router.post('/', async (req, res, next) => {
    try {
        // lowercase the new genre user has submitted:
        let newGenre = req.body.name.toLowerCase();
        // check if the new genre already exists in db
        const checkGenre = await Genre.findAll({
            where: {
                name: newGenre
            }
        });
        // does not exist, create new genre and redirect
        console.log(">>>>>>>", checkGenre[0])
        if (checkGenre[0] === undefined) {
            newGenre = await Genre.create({ name: newGenre });
            console.log(newGenre, "New Genre successfully added!")
            res.redirect("/api-routes/genre")
        } else {
            // exists then send error message
            console.log("This genre already exists in the database.");
            res.statusMessage = "This genre already exists in the database.";
            res.status(400).end();
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;