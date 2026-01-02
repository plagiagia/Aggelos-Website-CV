import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In a real implementation, you would send an email here using:
    // - Resend (recommended): https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Nodemailer: https://nodemailer.com
    // 
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: process.env.CONTACT_EMAIL || 'your-email@example.com',
    //   subject: `New contact form submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    // For now, we'll just log it and return success
    // In production, replace this with actual email sending
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
