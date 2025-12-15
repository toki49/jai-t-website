# EmailJS Setup Guide for Submission Form

The submission form in Contact.jsx is now configured to send emails to **evidenceforjustice@georgetown.edu** using EmailJS.

## Quick Setup (5-10 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" (it's free - 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Select "Gmail"
3. Click "Connect Account"
4. Sign in with **evidenceforjustice@georgetown.edu**
5. Grant permissions
6. Copy your **Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Click "Email Templates" in the sidebar
2. Click "Create New Template"
3. Switch to "HTML" mode (toggle in the editor)
4. Use this HTML template:

**Template Name:** `jait_submission_form`

**Subject:** `New JAI-T Submission from {{from_name}}`

**HTML Content:**
```html
<div
  style="
    font-family: system-ui, sans-serif, Arial;
    font-size: 14px;
    color: #333;
    padding: 20px 14px;
    background-color: #f5f5f5;
  "
>
  <div style="max-width: 600px; margin: auto; background-color: #fff; border: 1px solid #ddd">
    <div style="text-align: center; background-color: #011e41; padding: 20px">
      <h1 style="color: #fff; font-size: 24px; margin: 0">Justice and AI Tracker</h1>
      <p style="color: #fff; font-size: 14px; margin: 5px 0 0 0">New Submission Received</p>
    </div>
    <div style="padding: 30px">
      <h2 style="font-size: 20px; margin-bottom: 20px; color: #011e41">Submission Details</h2>
      
      <table style="width: 100%; border-collapse: collapse">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <strong>Submitted by:</strong>
          </td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            {{from_name}}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <strong>Email:</strong>
          </td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <a href="mailto:{{from_email}}" style="color: #5f9ae2">{{from_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <strong>Phone:</strong>
          </td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            {{phone}}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <strong>Domain:</strong>
          </td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            {{domain}}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <strong>AI Task Force:</strong>
          </td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            {{ai_taskforce}}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            <strong>Submitted:</strong>
          </td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee">
            {{submission_date}}
          </td>
        </tr>
      </table>

      <div style="margin-top: 25px">
        <h3 style="font-size: 16px; margin-bottom: 10px; color: #011e41">Additional Information</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; line-height: 1.6">
          {{additional_info}}
        </p>
      </div>

      <div style="margin-top: 20px">
        <h3 style="font-size: 16px; margin-bottom: 10px; color: #011e41">Article Link</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px">
          <a href="{{article_link}}" style="color: #5f9ae2; word-break: break-all">{{article_link}}</a>
        </p>
      </div>
    </div>
    <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #ddd">
      <p style="margin: 0; font-size: 12px; color: #666">
        This is an automated email from the JAI-T submission form<br/>
        Evidence for Justice Lab | Georgetown University
      </p>
    </div>
  </div>
</div>
```

4. Save the template
5. Copy your **Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find "Public Key" section
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxx`)

### Step 5: Update Contact.jsx
1. Open `src/pages/Contact.jsx`
2. Find line ~53 with the `handleSubmit` function
3. Replace these three values:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';     // Replace with your Service ID
   const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID
   const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
   ```

### Step 6: Test
1. Go to your website's contact form
2. Fill out and submit a test entry
3. Check **evidenceforjustice@georgetown.edu** inbox
4. You should receive an email with all the submission details!

## Email Template Variables

The form sends these variables to EmailJS:
- `from_name` - User's full name
- `from_email` - User's email address
- `phone` - User's phone number
- `domain` - Selected domain category
- `additional_info` - Additional information text
- `article_link` - Article link URL
- `ai_taskforce` - Yes/No answer
- `submission_date` - Timestamp of submission

## Troubleshooting

**Email not sending?**
- Check browser console for error messages
- Verify all three IDs are correctly entered
- Make sure EmailJS service is connected to the correct Gmail account
- Check EmailJS dashboard for error logs

**Need help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

## Cost
- **Free tier:** 200 emails/month
- **Paid plans:** Start at $7/month for 1,000 emails if you need more

## Security Note
The Public Key is safe to expose in client-side code. It only allows sending emails through your pre-configured template - it cannot be used to send spam or arbitrary emails.
