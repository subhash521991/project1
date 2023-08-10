const blogModel = require("../models/blogModel.js");

const getBlog = async function (req, res) {
  {
		
		try {

const query = req.query;

if (Object.keys(query).length==0) {

  const allBlogs = await blogModel.find({isPublished:true,isDeleted:false});

   
  if (allBlogs.length !=0 ) {

    return res.status(200).send({status:true,data:allBlogs})
    
  }

}

if (Object.keys(query).length!=0) {

  query.isDeleted = false; query.isPublished = true;
      const getByQuery = await blogModel.find(query)

           if(getByQuery.length !=0){
            return res.status(200).send({status:true , data:getByQuery})
          }

          if (getByQuery.length ==0){
            return  res.status(404).send({ status: false, msg: "No blogs found by filter"});
          }
  
  
}

      
    } catch (error) {
      res.status(500).send({status:false, error:message.error})
      
    }
	}
  };
  


module.exports.getBlog = getBlog; 