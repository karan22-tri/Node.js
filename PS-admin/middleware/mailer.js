const nodemailer = require("nodemailer")
const mailer = nodemailer.createTransport({


    service:"gmail",
    auth:{
        user:"trivedikaran88@gmail.com",
        pass:"qhdh eumd xtnh yvep"
    },
});

module.exports.sendOtp = (email,otp)=>{
    let mailoptions ={
        from : "trivedikaran88@gmail.com",
        to: email,
        sub: "your password Reset OTP",
        text:`your OTP is${otp}`
    }



    mailer.sendMail(mailoptions,(err)=>{
        err ? console.log(err) : console.log("mail send succesfully")
    })
}