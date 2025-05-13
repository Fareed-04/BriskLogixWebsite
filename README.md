# BriskLogix Website

## Contact Form Setup

The contact form on this website is configured to send emails to specified recipients when users submit inquiries. Follow these steps to set up the email functionality:

### Current Implementation Note

**Important**: The form is currently set to always run in development mode for local testing and initial deployment. This means:
- Form submissions will be logged to the console but no actual emails will be sent
- Success messages will be shown after form submission
- The form will reset after submission as if it were successful

This configuration allows for testing the form UI without needing to set up the email backend immediately.

### 1. Setting Up Environment Variables (For Vercel Deployment)

When deploying to Vercel, you'll need to set up these environment variables in the Vercel dashboard:

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
  5. Use this generated password in your Vercel environment variables

### 2. Recipient Emails

The form is configured to send emails to:
- hammad@brisklogix.com
- fareedudin2004@gmail.com

If you need to change these recipients, edit the `recipients` array in the `api/contact/index.js` file.

### 3. Development vs Production Mode

- **Development Mode**: In development (when running with `npm run dev`), the form will simulate a successful submission without actually sending emails. This helps with testing without setting up email credentials.
- **Production Mode**: In production (when deployed to Vercel), the form will use the email service to send actual emails to the configured recipients.

### 4. Deploying to Vercel

1. Create a new project in Vercel and connect it to your GitHub repository
2. Set up the environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to the "Environment Variables" section
   - Add the `EMAIL_USER` and `EMAIL_PASS` variables with the appropriate values
3. Deploy the project

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
