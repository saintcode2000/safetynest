import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async (req: Request, res: Response) => {
  const { name, email, phone, address, message, plan } = req.body;

  try {
    await transporter.sendMail({
      from: `"Safety Nest Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission (${plan})`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email Error:", err);
    res.status(500).json({ success: false });
  }
};
