var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const historyChatSchema = new Schema({
  username: String,
  content: String,
  time: String
}, {
    collection: 'historyChat'
});


const historyChatModel = mongoose.model('historyChat', historyChatSchema)

module.exports = historyChatModel