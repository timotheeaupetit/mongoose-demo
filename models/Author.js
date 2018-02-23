const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MongoEntity = require('./MongoEntity');

class Author extends MongoEntity {
    constructor(dbName, collectionName) {
        const schema =  {
            _id: {
                type: Schema.Types.ObjectId,
                required: true,
                unique: true
            },
            fullName: {
                type: String,
                required: true,
                unique: true
            },
            born: Date
        };
        super(dbName, collectionName, schema);
    }

    getAll(res) {
        this.model.find(function(err, authors) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.status(200)
                .send(
                    JSON.stringify({
                        status: "ok",
                        authors: authors
                    })
                );
        });
    }
}

module.exports = Author;
