const express = require('express');
const route = express.Router();
const YogaSchema = require('../models/yoga_Schema');

// route.get('/', (req, res) => {
//   const data = new YogaSchema(
//     {
//       types: req.body.types,
//       ideal: req.body.ideal,
//       sweat: req.body.sweat,
//       peace: req.body.peace
//     }
//   )
  
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(e => {
//     console.log('error', e);
//   })
// });

route.get('/', (req, res) => {
    YogaSchema.find()
  .then((response)=>{
    res.send(response);
  });
});

module.exports = route;