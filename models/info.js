var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const infoSchema = new Schema({
  username: String,
  role: String, 
  school: String, 
  Class: String,
  Quiz: Array,
  score: Number,
  email: String,
}, {
    collection: 'info'
});


const infoModel = mongoose.model('info', infoSchema)

module.exports = infoModel