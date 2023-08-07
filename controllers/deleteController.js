const blogModel = require("../models/blogModel.js");

const deleteBlog = async function (req, res) {
    try { 
        const blogId = req.params.blogId
        const blog = await blogModel.findById(blogId);
    if (!blog) {
  
      return res.status(404).send({status:false,message:"blog not found"})

    }
    if (blog.isDeleted == true) {
    
      return res.status(400).send({status:false, message: "blog has already been deleted"})
      
    }
    
    const deletedBlog = await blogModel.findByIdAndUpdate(blogId ,
    {$set: {isDeleted:true}}, {new:true})
    
    return res.status(201).send({status:true,msg:"blog deleted successfully"})
    
    
      } catch (error) {
    
        res.status(500).send({status:false,error:error.msg})
      
        
      }
      
  };


module.exports.deleteBlog = deleteBlog;



/*const deleteBlog = async function (req, res) {
  try {
      const authorId = req.params.authorId
      const author = await blogModel.findById(authorId);
      if (!author) {
          return res.status(404).send({ status: false, message: "blog not found" })
      }
      if (author.isDeleted == true) {
          return res.status(400).send({ status: false, message: "blog has already been deleted " })
      }
      const deletedBlog = await blogModel.findByIdAndUpdate(authorId,
          { $set: { isDeleted: true } }, { new: true })


      return res.status(201).send({ status: true, msg: "blog deleted successfully" })
  } catch (error) {
      return res.status(500).send({ status: false, error: error.msg });
  }
}

module.exports.deleteBlog = deleteBlog;*/
