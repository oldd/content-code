const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

UserSchema.pre('save', function(next) {
  // getting access to the user model
  // user is an instance of the usermodel
  // user has a specific email and password that we could reference with user.email and user.password
  const user = this;

  // generate a salt then run callback
  // salt is randomly generated data that is used for hashing passwords
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.compare = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) callback(err)
    callback(null, isMatch)
  })
}

const User = mongoose.model('user', UserSchema)

module.exports = User
