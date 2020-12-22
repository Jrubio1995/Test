const mongoose = require('mongoose');
require('dotenv').config({ path: "info.env" });

const connectMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(' Connected to DataBase of Hobbies')
    } catch (error) {
        console.log(error);
        process.exit(1); // if is some error will close the app
    }
}

module.exports = connectMongo;