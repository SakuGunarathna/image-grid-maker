const mongoose = require('mongoose');
const { mongoDb } = require('./variables');

/**
 * Connected to mongo db
 * 
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
    mongoose.connect(mongoDb.uri,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err, db) {
            if (err) console.log(err);
            else console.log('successfully connected to db');
        });
    return mongoose.connection;
}