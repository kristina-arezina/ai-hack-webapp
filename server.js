const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Getting get request when go to loading page from backend (2 resumes)
app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

// Getting get rquest when go to loading page
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express Resume Json' });
});

// Getting get rquest when go to loading page
app.get('/api/world', (req, res) => {
  res.send({ express: 'Hola From world' });
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