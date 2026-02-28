import express from 'express';
import { sendEmail } from "../Mails/sendMail.js";


const router = express.Router();


router.post("/send",async (req,res)=>{
    try {
    const {name , email , message} = req.body;

    if(!email || !name || !message){
        return res.json({message:"Enter all the fields"});
    }

    await sendEmail(name,email,message);
    res.json({message:"Email sent successfully"});
    } catch (error) {
    return res.json({message:"Error sending email",error:error.message});
    }
});


export default router;