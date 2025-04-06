const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        console.log('MONGO_URI:', process.env.MONGO_URI); // Debug log
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('DB Error', error);
        process.exit(1); 
    }
};

module.exports = connectDb;
