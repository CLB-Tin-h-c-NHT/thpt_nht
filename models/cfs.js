var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const CFSSchema = new Schema({
  content: String
}, {
    collection: 'CFS'
});


const CFSModel = mongoose.model('CFS', CFSSchema)

module.exports = CFSModel