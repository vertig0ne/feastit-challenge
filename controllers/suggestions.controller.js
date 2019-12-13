const { Client } = require('pg');
const client = new Client();
client.connect();

const get = (req, res, next) => {
    try {
        if (!req.query.q) throw new Error('No Query Provided');
        let query = `SELECT * FROM movies WHERE film ILIKE '%${req.query.q}%'`;
        if (req.query.sortBy) {
            switch (req.query.sortBy) {
            case 'rotten':
                query += ' ORDER BY rotten_score DESC';
                break;
            case 'audience':
                query += ' ORDER BY audience_score DESC';
                break;
            default:
                throw new Error('Unknown sorting field');
            }
        }

        client.query(query, (err, pgres) => {
            if (err) throw err;
            res.json(pgres.rows);
        });
    } catch (err) { next(err); }
};

module.exports = {
    get,
};