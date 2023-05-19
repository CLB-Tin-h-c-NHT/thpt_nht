var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const historySchema = new Schema({
  username: String,
  QuizID: String,
  time: String,
  score: Number
}, {
    collection: 'history'
});


const historyModel = mongoose.model('history', historySchema)

module.exports = historyModel