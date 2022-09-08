// the seed file isn't going to be used by the server.
// we're running this separately.
const db = require('./db');

const runSeed = async () => {
    await db.sync({force: true});
    console.log("🌱 Seed is complete!")
    // terminate yourself:
    process.kill(0);
}

runSeed();