import nodemailer from "nodemailer";

// Configure the transporter for your email provider
const transporter = nodemailer.createTransport({
  service: "gmail", // Or your email service provider (e.g., Gmail, SendGrid, etc.)
  auth: {
    user: process.env.NODEMAILER_USER, // Your email address
    pass: process.env.NODEMAILER_PASS, // Your email password or app-specific password
  },
});

export const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "your_email@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
