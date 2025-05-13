# BriskLogix Website

## Contact Form Setup

The contact form on this website is configured to send emails to specified recipients when users submit inquiries. Follow these steps to set up the email functionality:

### 1. Setting Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

Notes:
- For Gmail, you need to use an App Password rather than your regular password
- To create an App Password:
  1. Go to your Google Account > Security
  2. Under "Signing in to Google," enable 2-Step Verification
  3. Once enabled, go back to the Security page and look for "App passwords"
  4. Generate a new app password for "Mail" and "Other (Custom name)"
  5. Use this generated password in your `.env.local` file

### 2. Recipient Emails

The form is configured to send emails to:
- hammad@brisklogix.com
- fareedudin2004@gmail.com

If you need to change these recipients, edit the `recipients` array in the `api/contact.js` file.

### 3. Development vs Production Mode

- **Development Mode**: In development (when running with `npm run dev`), the form will simulate a successful submission without actually sending emails. This helps with testing without setting up email credentials.
- **Production Mode**: In production (when deployed to Vercel), the form will use the email service to send actual emails to the configured recipients.

### 4. Deploying to Vercel

When deploying to Vercel, make sure to set up the environment variables in the Vercel dashboard:
1. Go to your project settings
2. Navigate to the "Environment Variables" section
3. Add the `EMAIL_USER` and `EMAIL_PASS` variables with the appropriate values

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```
