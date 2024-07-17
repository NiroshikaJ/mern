const { default: mongoose } = require("mongoose");

const db=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017').then(res=>console.log('connect'))
    } catch (error) {
        console.log(error);
    }
}

module.exports = db;