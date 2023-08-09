const blogModel = require("../models/blogModel.js");

const getBlog = async function (req, res) {
    try {
      //const data = req.body;
      const authorId = req.params.authorId;
      if (!authorId) {
        return res
          .status(400)
          .send({ status: false, msg: "Blog Author is required field" });
      }
     

     
     
      const getAllBlog = await blogModel.find({authorId:authorId});
      res
        .status(200)
        .send({
          status: true,
          message: "Blog Found successfully",
          data: getAllBlog,
        });
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  


module.exports.getBlog = getBlog;