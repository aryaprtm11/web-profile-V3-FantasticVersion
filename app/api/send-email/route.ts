import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { from_name, from_email, subject, message } = await request.json();

    // Validate required fields
    if (!from_name || !from_email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    // Note: You'll need to use App Password, not regular Gmail password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'arya.prtama89@gmail.com',
      replyTo: from_email,
      subject: `New Contact from ${from_name} - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #67729D; padding-bottom: 10px;">
            New Contact from Portfolio Website
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #67729D; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${from_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${from_email}">${from_email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #67729D; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This message was sent from your portfolio website contact form.</p>
            <p>You can reply directly to this email to respond to ${from_name}.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email berhasil dikirim!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim email. Silakan coba lagi.' },
      { status: 500 }
    );
  }
} 