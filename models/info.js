var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/IT_NHT');

const Schema = mongoose.Schema;
const infoSchema = new Schema({
  username: String,
  role: String, 
  school: String, 
  Class: String,
  score: Number
}, {
    collection: 'info'
});


const infoModel = mongoose.model('info', infoSchema)

module.exports = infoModel