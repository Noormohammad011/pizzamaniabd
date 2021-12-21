const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: {
      type: String,
      trim: true,
      required: 'Email is required',
      unique: true,
    },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('users', userSchema)
