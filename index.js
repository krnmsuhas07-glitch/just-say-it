const express = require("express");
const app = express();
let port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodoverride = require("method-override");
app.use(methodoverride('_method'));



app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [{
    id: uuidv4(),
    username: "suhas",
    content: "i will work hard no matter what!.."
}, {
    id: uuidv4(),
    username: "allu",
    content: "Make way for ur king.."
}, {
    id: uuidv4(),
    username: "pranav",
    content: "i am the goat of coding"
},]

app.get("/", (req, res) => {
    res.render("/posts");
})
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})
app.post("/posts", (req, res) => {
    req.body.id = uuidv4();
    posts.push(req.body);
    res.redirect("/posts");
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("show.ejs", { post });
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs", { post });
})

app.get("/posts", (req, res) => {
    res.redirect("/posts");
})

app.patch("/posts/:id", (req, res) => {
    let newContent = req.body.content;
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    post.content = `${newContent}`;
    res.redirect("/posts");

})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
})
app.listen(port, () => {
    console.log("listening..");
})