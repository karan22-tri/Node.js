const jwt= require('jsonwebtoken');


const auth=async(req,res,next)=>{
  
   let token = req.cookies.jwt;

  if(!token){
    res.status(400).json({msg : "Token not Found"})
  }

  
  let newtoken = jwt.verify(token,"Taskmanagement")

  req.user = newtoken;
  console.log(req.user);
  next();

}

module.exports=auth ;


