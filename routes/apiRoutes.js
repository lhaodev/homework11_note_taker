const fs = require('fs');
//const path = require('path');

// ROUTING

module.exports = (app) => {
    let notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    app.get('/api/notes', (req, res) => {
        return res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
        var data = req.body;
        // var noteListLength = notes.length

        // newNote.id = noteListLength;
        notes.push(data);

        //write to db.json file to add updated notes
        fs.writeFileSync("db/db.json", JSON.stringify(notes));
        res.json(notes);


    });


    // app.delete("/api/notes/:id", (req, res) => {


    //     let noteId = (req.params.id).toString();

    //     //filter all notes that does not have matching id and saved them as a new array
    //     //the matching array will be deleted
    //     notes = notes.filter(selected => {
    //         return selected.id != noteId;
    //     })

    //     //write the updated data to db.json and display the updated note
    //     fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    //     res.json(notes);



    //     //  notes.deleteNote(req.params.id).then(() => res.json())
    //     // //         .catch((error) => res.status(200).json(error))

    // })

}