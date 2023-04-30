var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/IT_NHT');

const Schema = mongoose.Schema;
const accountSchema = new Schema({
  username: String,
  password: String, 
  role: String
}, {
    collection: 'account'
});


const accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel