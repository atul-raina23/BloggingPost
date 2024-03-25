const mongoose=require('mongoose');
require("dotenv").config();
//here we make dbCOnnect function that can make connection between them;

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection Successful');
    })
    .catch(error => {
        console.error('Connection Failed:', error);
    });
}

module.exports = dbConnect;