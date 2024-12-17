const adminSchema = require("../model/dbSchema")
const fs = require("fs")

module.exports.viewData = async(req,res)=>{
    await adminSchema.find()
    .then((data)=>{
            res.status(200).json({message : "Data view ", data})
        })
}

module.exports.addData = async(req,res)=>{
    if(req.file){
    req.body.image = req.file.path}
    await adminSchema.create(req.body)
    .then((data)=> {res.status(200).json({message : "Data Add Succesfully ", adddata : data})
})
}

module.exports.updateData = async(req,res)=>{
    await adminSchema.findByIdAndUpdate(req.params.id,req.body)
    .then((data)=>{
        res.status(200).json({message : "data update Succesfully",updatedata : data})
    })
}

module.exports.deleteData = async(req,res)=>{
     const data = await adminSchema.findById(req.params.id);

     if (data && data.image) {
         fs.unlink(data.image, (err) => {
             if (err) {
                 return res.status(500).json({ message: "Error delete image", error: err });
             }
         });
     }
     await adminSchema.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.status(200).json({message : "Data deleted Succesfully",data})
    })
}

