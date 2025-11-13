# PDF Generation & Email Feature - Future Implementation

## Overview
This feature will automatically generate a PDF company profile from the current website content and email it along with contact form submissions.

## Requirements
1. When a user submits the contact form, they should receive:
   - A confirmation email
   - A PDF company profile attached

2. The PDF should be generated dynamically from current website content including:
   - Company information
   - Services offered
   - Client list
   - Contact information
   - Policies & Vision

## Implementation Options

### Option 1: Client-Side PDF Generation (Frontend)
- **Library**: `jspdf` + `html2canvas` or `react-pdf`
- **Pros**: No backend needed, works entirely in browser
- **Cons**: Limited formatting, may not work well with complex layouts
- **Best for**: Simple PDFs, static content

### Option 2: Server-Side PDF Generation (Backend)
- **Libraries**: 
  - Node.js: `puppeteer`, `pdfkit`, or `jsPDF` (server-side)
  - Python: `reportlab`, `weasyprint`
- **Pros**: Better formatting, can use templates, more reliable
- **Cons**: Requires backend server
- **Best for**: Professional PDFs, dynamic content

### Option 3: Third-Party Service
- **Services**: PDFShift, HTMLPDF, DocRaptor
- **Pros**: Easy integration, professional output
- **Cons**: Costs money, external dependency
- **Best for**: Quick implementation, high-quality PDFs

## Recommended Approach: Server-Side with Node.js

### Tech Stack:
- **Backend**: Express.js or Next.js API routes
- **PDF Generation**: Puppeteer (renders HTML to PDF)
- **Email Service**: 
  - Nodemailer (with SMTP)
  - SendGrid
  - AWS SES
  - Mailgun

### Implementation Steps:
1. Create API endpoint for contact form submission
2. Generate PDF from website content using Puppeteer
3. Send email with PDF attachment using email service
4. Store form submission in database (optional)

### Example Structure:
```
/api/contact
  - Receives form data
  - Generates PDF from template
  - Sends email with PDF attachment
  - Returns success/error response
```

## PDF Content Structure
The PDF should include:
1. **Cover Page**: Company name, logo, tagline
2. **About Us**: Company description, mission
3. **Services**: List of services with descriptions
4. **Client List**: Pharmaceutical clients
5. **Why Choose Us**: Key differentiators
6. **Contact Information**: Address, phone, email
7. **Footer**: Copyright, date generated

## Email Template
- **Subject**: "Thank you for contacting NIS - Company Profile Attached"
- **Body**: Professional email with:
  - Thank you message
  - Company overview
  - Next steps
  - PDF attachment

## Notes
- PDF should be generated fresh each time to ensure current content
- Consider caching PDF if content doesn't change frequently
- Ensure PDF is accessible and readable
- Test email delivery across different email providers
- Consider GDPR/privacy compliance for email storage

## Estimated Implementation Time
- Backend setup: 2-3 hours
- PDF generation: 3-4 hours
- Email integration: 2-3 hours
- Testing & refinement: 2-3 hours
- **Total**: ~10-13 hours

