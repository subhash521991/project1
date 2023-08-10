const blogModel = require("../models/blogModel.js");

const updateBlog = async function (req, res) {
    try {
      let blogId = req.params.blogId;
      if (Object.keys(blogId).length==0) {
return res.status(400).send({status:false, msg: "blog id is required"});        
      }

      const availableBlog = await blogModel.findById(blogId);
      
      if (!availableBlog) {
        return res.status(404).send({status:false, msg:"blognot found"})
      } 

      if (availableBlog.isDeleted===true) {
        return res.status(404).send({status:false, msg: "Blog has already been deleted"})
        
      }

      if (availableBlog.isDeleted===false) {
        const data = req.body;

        const updatedBlog = await blogModel.findOneAndUpdate({_id:blogId},{$set:data},{new:true});    
     updatedBlog.isPublished=true;
     updatedBlog.publishedAt = Date.now();
     updatedBlog.save();

     return res.status(200).send({status:true,data:updatedBlog});
     
      }
  
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  
module.exports.updateBlog = updateBlog;