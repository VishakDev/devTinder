const express = require('express');

const app = express();

app.use("/welcome", (req, res) => {
    res.send("Welcome to learning");
});

app.use("/details", (req, res) => {
    res.send("Here we learn about Node, express and mongodb");
});

app.use("/", (req, res) => {
    res.send("Hello Vishak");
});

app.listen(7777, () => {
    console.log("Server is up in port 7777")
})