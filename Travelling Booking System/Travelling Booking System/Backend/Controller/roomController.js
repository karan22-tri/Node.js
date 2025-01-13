const Room = require("../Models/roomModel");


const getRooms = async (req, res) => {
 

  const data=await Room.find({});

  data ? res.status(200).json({msg : data}): res.status(400).json({msg : "data not show..!!"})
};

// create room
const createRoom = async (req, res, next) => {
  if(!req.file){
    res.status(404).json({msg : "Image not found.."});
    }else {
      let image=req.file.path.replace(/\\/g,"/");
      req.body.image=image;
      console.log(req.body);
      let data = await Room.create(req.body)
  
      data ? res.status(202).json({msg : "Room Created Successfully"}) : console.log("Room  not cretaed...");
    }
};

const deleteRoom = async (req, res) => {


  const room=await Room.findByIdAndDelete(req.params.id);

 room ?  res.status(200).json({msg : "data deleted successfully..!!"}) : res.status(400).json({msg : "something went to rong pls try again..."});

};

module.exports = {
  getRooms,
  createRoom,
  deleteRoom,
};
