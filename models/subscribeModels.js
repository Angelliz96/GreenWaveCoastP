const mongoose = require("mongoose");
const { Schema } = mongoose;


const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
});


const Subscribe = mongoose.model("Subscribe", subscribeSchema);

module.exports = Subscribe;