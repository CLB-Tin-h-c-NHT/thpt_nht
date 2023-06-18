var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const POSTSchema = new Schema({
  content: String,
  id_IMG: String
}, {
    collection: 'POST'
});


const POSTModel = mongoose.model('POST', POSTSchema)

module.exports = POSTModel