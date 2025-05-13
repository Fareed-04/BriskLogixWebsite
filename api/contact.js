const nodemailer = require('nodemailer');
const config = require('./config');

module.exports = async function handler(req, res) {
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

  // For debugging - log environment variables (except sensitive ones)
  console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
  console.log('EMAIL_PORT:', process.env.EMAIL_PORT);
  console.log('EMAIL_SECURE:', process.env.EMAIL_SECURE);
  console.log('EMAIL_TLS:', process.env.EMAIL_TLS);
  console.log('EMAIL_USER is set:', !!process.env.EMAIL_USER);
  console.log('EMAIL_PASS is set:', !!process.env.EMAIL_PASS);

  // Handle non-POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Debugging - log request body
    console.log('Request body:', req.body);
    
    const { name, company, phone, email, service, description } = req.body;

    // Validate required fields
    if (!name || !company || !email || !service || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Log transporter config (without sensitive data)
    console.log('SMTP Config:', {
      ...config.smtp,
      auth: { user: config.smtp.auth.user, pass: '***HIDDEN***' }
    });
    
    const transporter = nodemailer.createTransport(config.smtp);

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return res.status(500).json({ 
        error: 'Email configuration error', 
        details: verifyError.message 
      });
    }

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

    // Send emails to both recipients
    const emailPromises = config.recipients.map(recipient => {
      return transporter.sendMail({
        from: config.smtp.auth.user,
        to: recipient,
        subject: `New Contact Form Submission: ${service}`,
        html: emailContent,
      });
    });

    const emailResults = await Promise.all(emailPromises);
    console.log('Email sending results:', emailResults);

    // If there's a redirect URL configured, include it in the response
    const redirectUrl = process.env.EMAIL_REDIRECT;
    const response = { success: true };
    
    if (redirectUrl) {
      response.redirectUrl = redirectUrl;
    }

    console.log('Sending success response');
    res.status(200).json(response);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message,
      stack: error.stack
    });
  }
} 