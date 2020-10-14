const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express Resume Json' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  let data = JSON.stringify(req.body);
  fs.writeFileSync('resume-data', req.body);

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));