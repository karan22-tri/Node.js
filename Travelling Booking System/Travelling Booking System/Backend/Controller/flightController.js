const Flight = require("../Models/flightModel");



const getFlights = async (req, res) => {
 

  const data=await Flight.find({});

  data ? res.status(200).json({msg : data}): res.status(400).json({msg : "data not show..!!"})
};

// create room
const createFlight = async (req, res, next) => {
  if(!req.file){
    res.status(404).json({msg : "Image not found.."});
    }else {
      let image=req.file.path.replace(/\\/g,"/");
      req.body.image=image;
      console.log(req.body);
      let data = await Flight.create(req.body)
  
      data ? res.status(202).json({msg : "Flight Created Successfully"}) : console.log("Room  not cretaed...");
    }
};

const deleteFlight = async (req, res) => {


  const flight=await Flight.findByIdAndDelete(req.params.id);

 flight ?  res.status(200).json({msg : "data deleted successfully..!!"}) : res.status(400).json({msg : "something went to rong pls try again..."});

};

module.exports = {
  getFlights,
  createFlight,
  deleteFlight,
};
