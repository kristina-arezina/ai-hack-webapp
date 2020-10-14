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
  console.log("req.body", req.body);

  let data = JSON.stringify(req.body);
  fs.writeFileSync('resume-data.json', data);

console.log('This is after the read call');

  res.send(
    `We received your data, please click on the 'go to next step' button.`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));