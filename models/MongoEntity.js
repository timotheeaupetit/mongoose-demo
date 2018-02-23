const mongoose = require('mongoose');

class MongoEntity {
    constructor(dbName, collectionName, schema) {
        this.host = 'mongodb://localhost:27017/' + dbName;
        this.schema = mongoose.Schema(schema);
        this.model = mongoose.model(collectionName, this.schema);
        MongoEntity.connectDB(this.host);
    }

    static connectDB(host) {
        mongoose.connect(host);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("Connected to database '" + host + "'")
        });
    }
}

module.exports = MongoEntity;
