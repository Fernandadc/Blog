import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

var userPost = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/postPage", (req, res) => {
    res.render("postPage.ejs");
});

app.get("/contacts", (req, res) => {
    res.render("contacts.ejs");
});

app.post("/submit", (req, res) => {
    userPost.push({user : req.body["user"], title : req.body["title"], post : req.body["post"]});
    res.render("postPage.ejs", { posts : userPost });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });