var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

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