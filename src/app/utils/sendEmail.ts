
import nodemailer from "nodemailer"

export const sendEmail = async(to:string,html:string)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "mostafiz.cse.1257@gmail.com",
          pass: "ucdx bpel wtaa oxpa",
        },
      });

    await transporter.sendMail({
        from: 'mostafiz.cse.1257@gmail.com', // sender address
        to, // list of receivers
        subject: "Change your password", // Subject line
        text: "Here is  your reset password link,please reset your password within 10 minutes.", // plain text body
        html, // html body
      });
}