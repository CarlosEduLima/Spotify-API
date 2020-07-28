global.__require = function (file) {
    return require(__dirname + '/' + file)
}
const express = require('express');

const routes = require('./routes');
const app = express();
const server = require('http').Server(app);

app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})
const port = 3000;

server.listen(port, () => console.log(`app is running at port ${port}`));