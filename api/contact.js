const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, phone, email, service, description } = req.body;

    // Validate required fields
    if (!name || !company || !email || !service || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Required:</strong> ${service}</p>
      <p><strong>Project Description:</strong> ${description}</p>
    `;

    // Recipient emails
    const recipients = ['hammad@brisklogix.com', 'fareedudin2004@gmail.com'];

    // Send emails to both recipients
    const emailPromises = recipients.map(recipient => {
      return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: `New Contact Form Submission: ${service}`,
        html: emailContent,
      });
    });

    await Promise.all(emailPromises);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
} 