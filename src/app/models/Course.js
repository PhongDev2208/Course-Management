const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String,  },
    image: { type: String, maxlength: 255 },
    videoID: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// Custom query helpers
Course.query.sortAble = function(req) {
  if(req.query.hasOwnProperty('_sort')) {
    let isValidType = ['asc', 'desc'].includes(req.query.type) 
    return this.sort({
      [req.query.column] :  isValidType ? req.query.type : 'asc'
    })
  }
  return this
}

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ 
  overrideMethods: 'all',
  deletedAt : true 
});

module.exports = mongoose.model("Course", Course);
