const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: {type: String, required: true, minLength: 1},
    text: {type: String, required: true, minLength: 1},
    timestamp: {type: Date, default: Date.now()},
    author: {type: Schema.Types.ObjectId, ref: "User"},
})

module.exports = mongoose.model("Message", MessageSchema);