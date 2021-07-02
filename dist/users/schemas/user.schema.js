"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    inCome: {
        type: Number
    }
});
exports.UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
exports.UserSchema.methods.checkPassword = function (attempt, callback) {
    let user = this;
    bcrypt.compare(attempt, user.password, (err, isMatch) => {
        if (err)
            return callback(err);
        callback(null, isMatch);
    });
};
//# sourceMappingURL=user.schema.js.map