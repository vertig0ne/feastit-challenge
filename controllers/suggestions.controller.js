const get = (req, res, next) => {
    try {
        const message = 'Hello Again';
        res.json({message});
    } catch (err) { next(err); }
};

module.exports = {
    get,
};