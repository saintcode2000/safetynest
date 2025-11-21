import { Router } from "express";
import { sendContactEmail, transporter } from "../controllers/contactController";

const router = Router();

router.post("/", sendContactEmail);

router.get("/test", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "This is a test email from Safety Nest.",
    });

    res.send("Email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed");
  }
});

export default router;
