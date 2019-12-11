const express = require('express');
const app = express();
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('json spaces', 2);
app.set('base', '/api/v1/');
app.enable('trust proxy');

app.get('/', (req, res) => {
    const message = 'Hello World!';
    res.json({message});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;