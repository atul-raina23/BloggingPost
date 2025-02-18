const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like" // Refers to the Like model
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment" // Refers to the Comment model
    }]
});

module.exports = mongoose.model("Post", postSchema);
