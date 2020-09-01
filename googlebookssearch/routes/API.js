const router = require("express").Router();
const db = require("../models");

// Express Routes
// Get
router.get("/api/books", (req, res) => {
    db.Book.find({}).then(dbBook => {
        res.json(dbBook);
    });
});
// Post
router.post("/api/books", (req, res) => {
    db.Book.create(req.body)
        .then(dbBook => {
            res.json(dbBook);
        });
});
// Delete
router.delete("/api/books/:id", (req, res) => {
    db.Book.deleteOne({
        _id: req.params.id
    })
    .then(dbBook => {
        res.json(dbBook);
    });
});