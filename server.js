'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser'); // req.body
const cors = require('cors'); // 8080

let contacts = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Http verbs: GET, POST, PUT, DELETE, PATCH

// GET 'Contacts'
app.get('/api/contacts', (request, response) => {
    if (!contacts) {
        response.status(404).json({ message: 'No contacts found' });
    }
    response.json(contacts);
 });

 app.get('/api/contacts/:id', (request, response) => {

     const requestId = request.params.id;

     let contact = contacts.filter( contact => {
         return contact.id == requestId;
     });

     if (!contacts) {
         response.status(404).json({ message: 'No contacts found' });
     }

     response.json(contact[0]);
 });

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
