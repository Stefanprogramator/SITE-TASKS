const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");


const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.post("/posts", (req, res) => {
    const postsList = readJSONFile();
    var newPost = {
        id : uuid.v4.apply(),
        info: req.body.info,
        desc: req.body.desc,
        img: req.body.img
    }

    postsList.push(newPost);
    writeJSONFile(postsList);
    res.status(200).send(newPost);
});

app.get("/posts/:id", (req, res) => {
  const postsList = readJSONFile();
  var id = req.params.id;
  console.log(id);
  var checkIfPostExists = false;
  postsList.forEach(post => {
      if(post.id === id) {
          checkIfPostExists = true;
          res.status(200).send(post);
      }
  });

  if(checkIfPostExists === false) {
      res.status(404).send("No post found!");
  }
});

app.get("/posts", (req, res) => {
  const postsList = readJSONFile();
  if(postsList != undefined){
    res.status(200).send(postsList);
  } else {
      res.status(404).send("No post found");
  }
  
});

app.put("/posts/:id", (req, res) => {
    var id = req.params.id;
    var checkIfPostExists = false;
    const postsList = readJSONFile();
    for(let i = 0; i < postsList.length; i++) {
        if(postsList[i].id === id) {
            postsList[i].info = req.body.info;
            postsList[i].desc = req.body.desc;
            postsList[i].img = req.body.img;
            checkIfPostExists = true;
            break;
        }
    }

    if(checkIfPostExists === true) {
        writeJSONFile(postsList);
        res.status(200).send("Post updated!");
    } else {
        res.status(404).send("Post not found!");
    }
});

app.delete("/posts/:id", (req, res) => {
  const postsList = readJSONFile();
  var id = req.params.id;
  var checkIfPostExists = false;
  for(let i = 0; i < postsList.length; i++) {
      if(postsList[i].id === id) {
          checkIfPostExists = true;
          postsList.splice(i, 1); 
          break;
      }
  }

  if(checkIfPostExists === true) {
    writeJSONFile(postsList);
    res.status(200).send("Post deleted!");
} else {
    res.status(404).send("Post not found!");
}

});

function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["posts"];
}

function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ posts: content }, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);
