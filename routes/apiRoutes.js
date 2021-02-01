// LOAD DATA
// We are linking our routes to a series of "data" sources.
const fs = require("fs");
const notes = require('../db/db.json');

// ROUTING

module.exports = (app) => {
    // API GET Requests

    app.get('/api/notes', (req, res) => res.json(notes))
};



// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------
app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware


    const newNotes = req.body;

    console.log(newNotes);

    notes.push(newNotes);

    res.json(notes);

    fs.writeFileSync("../db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw (err);
    });


});


