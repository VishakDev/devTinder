const express = require('express');
const {auth} = require('../src/middleware/auth');
const connectDB = require('../src/config/database');
const User = require('../src/model/user');

const app = express();

app.use(express.json());

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
    //console.log("input req--", req.body);
    const userDetails = req.body;
    const user = new User(userDetails);

    await user.save();
    res.send("User added succesfully");
});

app.get('/feed', async (req, res) => {
    try{
        const userDetails = await User.find({});
        if (userDetails.length){
            res.send(userDetails);
        }
        else {
            res.status(404).send("No user found")
        }
    } catch(err) {
        res.status(500).send("Something went wrong")
    }
});

app.get('/user', async (req, res) => {
    try{
        const input = req.body.emailId;
        const userDetails = await User.find({emailId: input});
        if (userDetails.length){
            res.send(userDetails);
        }
        else {
            res.status(404).send("No user found")
        }
    } catch(err) {
        res.status(500).send("Something went wrong")
    }
});

app.delete('/user', async (req, res) => {
    try{
        const input = req.body.emailId;
        const userDetails = await User.deleteOne({emailId: input});
        res.send("Delete successful")
    } catch(err) {
        res.status(500).send("Something went wrong")
    }
});

app.patch('/user', async (req, res) => {
    try{
        const inputEmail = req.body.emailId;
        const input = req.body;
        //console.log("inputEmail--", inputEmail, "input--", input);
        const userDetails = await User.findOneAndUpdate({emailId: inputEmail}, input);
        res.send("Update successful")
    } catch(err) {
        res.status(500).send("Something went wrong")
    }
});

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
 

