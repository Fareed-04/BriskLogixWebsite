import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle non-POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, phone, email, service, description } = req.body;

    // Validate required fields
    if (!name || !company || !email || !service || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Configure email transporter with expanded configuration options
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        enabled: process.env.EMAIL_TLS === 'true',
        rejectUnauthorized: false
      }
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
    
    // If there's a redirect URL configured, include it in the response
    const redirectUrl = process.env.EMAIL_REDIRECT;
    const response = { success: true };
    
    if (redirectUrl) {
      response.redirectUrl = redirectUrl;
    }

    res.status(200).json(response);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
} 