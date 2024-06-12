require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.ATLAS_URI || "";

const connectToDatabase = () => {
    try {
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection Successful...");
    } catch (error) {
        console.error("Error in DB connection:", error);
    }
};

connectToDatabase();

const db = mongoose.connection;


module.exports = db;
