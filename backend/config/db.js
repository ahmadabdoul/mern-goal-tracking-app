const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongDB Connected: ${conn.connection.host}`.cyan.underline);


    }catch (e) {
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDb;