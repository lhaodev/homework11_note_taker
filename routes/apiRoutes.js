// LOAD DATA
// We are linking our routes to a series of "data" sources.
const fs = require("fs");
//const notes = require('../db/db.json');
const router = require('express').Router();
//let notes = JSON.parse(fs.readFileSync('../db/db.json'));
const path = require('path');
// ROUTING

//module.exports = (app) => {
// API GET Requests
//responds with notes from db.json through Get "/api/notes"
router.get("/api/notes", (req, res) => {
    try {
        var notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
        console.log({ notes });
        return res.json(notes);
    } catch (e) {
        console.error(e);
    }
});



// let notes = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
// return res.json(notes);
// fs.readFile("./db/db.json", 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     res.json(data);






//  notes.getNotes().then((data) => res.json(data))
//try to find a way to use .catch()
//     .catch((error) => res.status(200).json(error))
//})


router.post("/api/notes", (req, res) => {
    try {
        var notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
        var data = req.body;
        notes.push(data);
        fs.writeFileSync('db/db.json', JSON.stringify(notes));
        res.json(notes);
    } catch (e) {
        console.error(e);
    }
});

// let notes = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
// var data = req.body;
// notes.push(data);
// fs.writeFileSync('../ db / db.json', JSON.stringify(notes));
// res.json(notes)
// fs.writeFile('../db/db.json', JSON.stringif(notes.saveNote(req.body)), function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     res.json(data);
// });

//  notes.saveNote(req.body).then((data) => res.json(data))
//     .catch((error) => res.status(200).json(error))




// router.delete("/api/notes/:id", (req, res) => {
//     notes.deleteNote(req.params.id).then(() => res.json())
//         .catch((error) => res.status(200).json(error))

// })



module.exports = router;