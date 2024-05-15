const mongoose = require("mongoose");
const { Schema } = mongoose;

const resourcesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
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
    }
});

const Resources = mongoose.model("Resources", resourcesSchema);

module.exports = Resources;
