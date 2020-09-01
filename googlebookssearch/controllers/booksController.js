const db = require("../models/book");

module.exports = {
    // CRUD methods
    // Create
    create: function(req, res) {
        db.Book.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Read
    findAll: function(req, res) {
        db.Book.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Update
    findById: function(req, res) {
        db.Book.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Delete
    remove: function(req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}