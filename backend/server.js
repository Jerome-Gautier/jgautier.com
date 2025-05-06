const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3100;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SECRET_EMAIL_HOST,
  port: process.env.SECRET_EMAIL_PORT,
  secure: process.env.SECRET_EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SECRET_EMAIL_ADDRESS,
    pass: process.env.SECRET_EMAIL_PASSWORD
  }
});

// API endpoint for sending emails
app.post('/api/contact', async (req, res) => {
  const { name, email, message, subject } = req.body;
  console.log(process.env.SECRET_EMAIL_HOST)
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
  }
  
  try {
    // Email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.SECRET_EMAIL_ADDRESS}>`,
      to: process.env.SECRET_EMAIL_ADDRESS,
      replyTo: email,
      subject: subject || `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});