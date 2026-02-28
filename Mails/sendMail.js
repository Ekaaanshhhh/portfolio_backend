
import { transporter } from "./config.js";

export const sendEmail = async (name,email,message) => {
  try{await transporter.sendMail({
    from: `${name} <${process.env.GMAIL_USER}>`,
    to: "ekanshs.ug24.ec@nitp.ac.in",
    subject: "Someone viewed your portfolio and wants to connect with you",
    html:`<h2>Message from ${name}</h2><p>${message}</p><p>Contact email: ${email}</p>`
  });}
  catch(error){
    console.log("Error sending email",error);
    throw new Error(`Error sending email ${error}`);
  }
};

