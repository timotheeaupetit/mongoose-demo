const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MongoEntity = require('./MongoEntity');

class Publication extends MongoEntity {
    constructor(dbName, collectionName) {
        const schema =  {
            url: String,
            type: String,
            pages:{
                start: Number,
                end: Number
            },
            title: {
                type: String,
                required: true,
            },
            authors: [{
                // type: Schema.Types.ObjectId,
                // ref: 'Author'
                type: String
            }],
            booktitle: String,
            year: Number
        };
        super(dbName, collectionName, schema);
    }

    getAll(res) {
        this.model.find(function(err, publications) {
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
                        publications: publications
                    })
                );
        });
    }
}

module.exports = Publication;
