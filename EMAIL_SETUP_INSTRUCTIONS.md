# Email Configuration Setup Instructions

## 1. Create a .env.local File

Create a file named `.env.local` in the root directory of your project with the following contents:

```
EMAIL_USER=fairtex.store@gmail.com
EMAIL_PASS=bxpr ubmq mdfi ahvu
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_TLS=true
EMAIL_REDIRECT=https://brisklogix.com
```

Replace the values with your actual Gmail and app password. The redirect URL is optional and will redirect users after form submission if provided.

## 2. For Local Development

The `.env.local` file will be automatically loaded by Vite during development. Make sure to:

1. Never commit this file to Git (it should be in your .gitignore)
2. Restart your development server after creating or modifying the file:
   ```
   npm run dev
   ```

## 3. For Vercel Deployment

When deploying to Vercel, add these same environment variables in the Vercel dashboard:

1. Go to your Vercel project
2. Click on "Settings" at the top
3. Select "Environment Variables" from the left menu
4. Add each variable from your .env.local file:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_SECURE`
   - `EMAIL_TLS`
   - `EMAIL_REDIRECT` (optional)
5. Click "Save" to store your environment variables
6. Redeploy your application to apply the new environment variables

## Important Notes

- The `.env.local` file should be added to your `.gitignore` to prevent committing sensitive information
- For Gmail, you need to use an App Password rather than your regular password
- The `EMAIL_REDIRECT` is optional and will redirect users to that URL after successful form submission

## Security Recommendations

- Do not share your app password with anyone
- Regularly rotate your app password for security
- Consider using a dedicated email account just for this application 