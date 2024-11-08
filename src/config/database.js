const mongoose = require('mongoose');



const connectDB = async () => {
  await mongoose.connect('mongodb+srv://vishak:Wagon3057@mydb.8rqfx.mongodb.net/User');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//connect().catch(err => console.log(err));

module.exports = connectDB;