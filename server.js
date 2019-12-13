const express = require('express');
const app = express();
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
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

Object.values(routes).forEach(route => {
    app.use(`/api/v1/${route.name}`, route.router);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    return res.json({ name: err.name, message: err.message });
});

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    return res.json({ name: 'NotFound', message: 'Page Not Found' });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;