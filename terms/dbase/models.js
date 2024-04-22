const mongoose = require('mongoose');

const TermsSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

let terms = mongoose.model("Terms", TermsSchema);

module.exports = {
  terms: terms
};


