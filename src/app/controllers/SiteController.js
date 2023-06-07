const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../uti/mongoose");

class SiteController {
  // [GET] /
  index(req, res,next) {
    Course.find({})
      .then((courses) =>  {
        res.render('home',{
          courses: multipleMongooseToObject(courses)
        })
      })
      .catch(next);
    //;
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }

  // [GET] /about
  about(req, res) {
    res.render("about");
  }
}

module.exports = new SiteController();
