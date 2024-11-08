const express = require('express');
const {auth} = require('../src/middleware/auth');
const connectDB = require('../src/config/database');
const User = require('../src/model/user');

const app = express();

// app.use("/welcome", (req, res) => {
//     res.send("Welcome to learning");
// });

// app.use("/details", (req, res) => {
//     res.send("Here we learn about Node, express and mongodb");
// });

// app.use("/", (req, res) => {
//     res.send("Hello Vishak");
// });

// app.get("/user/:id/:id1", (req, res) => {
//     const value = req.params;
//     res.send(value);
// });

// app.get("/user", (req, res) => {
//     const value = req.query;
//     res.send(value);
// });

// app.get("/user", auth, (req, res, next) => {
//     console.log("here");
//     res.send("Welcome to the learning world");
// });

app.post('/signup', async (req, res) => {
    const user = new User({
        firstName: "Phil",
        lastName: "Foden",
        emailId: "phil@foden.com",
        password: "phil1",
        hobby: "football" 
    });

    await user.save();
    res.send("User added succesfully");
})

connectDB()
    .then(() => {
        console.log("DB connected succesfully");
        app.listen(7777, () => {
            console.log("Server is up in port 7777");
        });
    })
    .catch((err) => {
        console.error("DB not connected!!", err.message)
    });
 

