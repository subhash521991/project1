const blogModel = require("../models/blogModel.js");

const updateBlog = async function (req, res) {
    try {
      let blogId = req.params.blogId;
      let data = req.body;
      
      if (blogId) { 
       
        const blog1 = await blogModel.findById(blogId);
        if(blog1) {   
           
            if (data.title && data.content) {
                const updateBlog1 = await blogModel.findOneAndUpdate({_id: blogId} ,
                    {$set:{title:data.title, body:data.content}},{new:true});
                    
                    return res.status(201).send({status:true,msg:"blog1 update successfully", data: updateBlog1})
            }
            else {
              return res
                .status(400)
                .send({ status: false, msg: "Blog Title and Content is required for Update " });
            }
  
            
          }
      }

      else {

        return res
          .status(400)
          .send({ status: false, msg: "BlogId is required field" });


      }
  
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };
  
module.exports.updateBlog = updateBlog;