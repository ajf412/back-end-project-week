const express = require('express');

const Note = require('./notes/noteModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Note.find()
  .then(notes => {
    res.status(200).json(notes);
  })
  .catch(err => {
    res.status(500).json( { errorMessage: "Cannot find notes." });
  });
})