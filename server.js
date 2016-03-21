const express = require('express');
const app = express();
const accepts = require('accepts');
const Address6 = require('ip-address').Address6;
const port = process.env.PORT || 3013;
const R = require('ramda');


const re = /\(.*?\)/;
const findSoftware = R.match(re) // returns list
const removeFirst = R.drop(1);
const removeLast = R.dropLast(1);
const removePathens = R.compose(removeFirst, removeLast, R.head, findSoftware);


app.get('/', function(req, res) {
  const ip = new Address6(req.ip).to4().correctForm()
  const language = R.head(req.acceptsLanguages());
  const fullSoftware = req.headers['user-agent'];
  const software = removePathens(fullSoftware);
  console.log(software)
  res.json({
    ip,
    language,
    software
  })
})

// will only run if this is file is run with node and not imported.
if(!module.parent) {
  app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
  });
}

module.exports = app;
