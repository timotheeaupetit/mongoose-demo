const MongoEntity = require('./MongoEntity');

class User extends MongoEntity {
    constructor(dbName, collectionName) {
        const schema = {
            name: {
                type: String,
                required: true,
                unique: true
            },
            born: Date
        };
        super(dbName, collectionName, schema);
    }

    get(id, res) {
        this.model.findById(id, {}, {}, function(err, user) {
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
                        name: user["name"],
                        id: user["_id"]
                    })
                );
        })
    }

    update(id, content, res) {
        this.model.findOneAndUpdate({"_id": id}, {$set: content}, {upsert: true, returnNewDocument: true}, function(err, user) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.status(200)
                .send(JSON.stringify({
                    status: "ok",
                    updated_user: user
                }))
        })
    }

    delete(id, res) {
        this.model.findOneAndRemove({"_id": id}, {}, function(err) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.status(204).send();
        })
    }

    getAll(res) {
        this.model.find(function(err, users) {
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
                        users: users
                    })
                );
        });
    }

    insert(val, res) {
        const request = new this.model(val);
        request.save(function (err, user) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.status(201)
                .send(
                    JSON.stringify({
                        status: "ok",
                        name: user["name"],
                        id: user["_id"]
                    })
                );
        });
    }
}

module.exports = User;
