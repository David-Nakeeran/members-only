const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    surname: {type: String, required: true, maxLength: 100},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    membership_status: {type: Boolean, default: false},
})

// Full name
UserSchema.virtual("fullName").get(function() {
    return `${this.first_name} ${this.surname}`
})

// UserSchema.virtual("url").get(function() {
//     return `/user/${this._id}`;
// });

module.exports = mongoose.model("User", UserSchema);