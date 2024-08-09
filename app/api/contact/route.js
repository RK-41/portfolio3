import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
	if (req.method === 'POST') {
		try {
			const { name, email, message } = await req.json();

			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					user: 'goforsomethingnew@gmail.com',
					pass: 'djdx ojtl vume fnzh',
				},
			});

			const mailOptions = {
				from: email,
				to: 'goforsomethingnew@gmail.com',
				subject: 'Contact from portfolio',
				html: `
               <h1>Contact Form</h1>
               <p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>
            `,
			};

			await transporter.sendMail(mailOptions);

			return NextResponse.json('Email has been sent successfully');
		} catch {
			return NextResponse.json('Failed to send the email');
		}
	} else {
		return NextResponse.json('Method not allowed');
	}
}
