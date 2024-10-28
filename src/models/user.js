const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'editor'],
      default: 'user'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

module.exports = model('User', userSchema)