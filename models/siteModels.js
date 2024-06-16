const mongoose = require("mongoose");
const { Schema } = mongoose;

const resourcesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    webpage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
});

const Resources = mongoose.model("Resources", resourcesSchema);

module.exports = Resources;
