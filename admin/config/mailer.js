const mailer=require("nodemailer");

const transport = mailer.createTransport({
  service : "gmail",
  auth : {
    user : "trivedikaran88@gmail.com",
    pass : "qhdh eumd xtnh yvep"
  }
})

module.exports.sendOtp=(to,otp)=>{
  let mailOption = {
    from : "trivedikaran88@gmail.com",
    to : to,
    subject : "Your OTP",
    text : `Your OTP is ${otp}`
  }

  transport.sendMail(mailOption,(err)=>{
    err && console.log(err);
  })
  
}