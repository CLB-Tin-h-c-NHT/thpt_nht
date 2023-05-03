var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/IT_NHT');

const Schema = mongoose.Schema;
const TKBSchema = new Schema({
  School: String,
  Class: String,
  Sang:{
    T2: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T3: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T4: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T5: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T6: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T7: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    }
  },
  Chieu:{
    T2: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T3: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T4: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T5: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T6: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    },
    T7: {
        t1: String,
        t2: String,
        t3: String,
        t4: String,
        t5: String
    }
  }
}, {
    collection: 'TKB'
});


const TKBModel = mongoose.model('TKB', TKBSchema)

module.exports = TKBModel