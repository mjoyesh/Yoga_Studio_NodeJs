const express = require('express');
const route = express.Router();
const ContactSchema = require('../models/contact_Schema');

route.post('/', (req, res) => {
  const data = new ContactSchema(
    {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message
    }
  )
  data.save()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(e => {
    console.log('error', e);
  })
});

route.get('/', (req, res) => {
  ContactSchema.find()
  .then((response)=>{
    res.send(response);
  });
});

module.exports = route;