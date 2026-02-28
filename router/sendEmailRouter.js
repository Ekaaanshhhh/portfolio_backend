import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    await resend.emails.send({
      from: "ekaaanshhhh@gmail.com",
      to: "ekanshsatsangi@gmail.com", // your receiving email
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;