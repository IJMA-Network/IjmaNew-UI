const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// var authRoutes = require("./routes/auth");

const app = express();

const { PORT } = require("./core/index");
const { Terms } = require("./dbmodule/module");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("short"));

app.post("/addTerms", (req, res, next) => {
  if (!req.body.title||!req.body.hash||!req.body.content) {
    res.status(409).send(`
    Please send proper body
    e.g:
    {
      "title":"file1",
      "hash":"hash1",
      "content":"content1"
    }
      
`);
    return;
  } else {
    const newTerms = new Terms({
      title: req.body.title,
      hash: req.body.hash,
      content: req.body.content,
    });

    newTerms.save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "an error occured : " + err,
        });
      });
  }
});



// get names ofall files
app.get("/allnames", (req, res, next) => {
  Terms.find({}, { title: 1 }) // Include only the title field
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      next(error); // Pass error to error handler middleware
    });
});
//API to filter withlimited projections
app.post("/getfiltereddocuments", (req, res, next) => {
  if (!req.body.filter) {
    res.status(409).send(`
    Please send filter object
    e.g:
    {
      "filter":{"title"},
      "projection":"hash1",
      "content":"content1"
    }
      
`);
    return;
  }

  Terms.find(req.body.filter, req.body.projections) // Include only the title field
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      next(error); // Pass error to error handler middleware
    });
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
