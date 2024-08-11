import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
	try {
		// Parsing the incoming JSON data
		const { name, email, message } = await req.json();

		// Nodemailer transporter
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'goforsomethingnew@gmail.com',
				pass: 'djdx ojtl vume fnzh',
			},
		});

		// Email options
		const mailOptions = {
			from: email,
			to: 'goforsomethingnew@gmail.com',
			subject: 'Contact from portfolio',
			html: `
				<h1>Contact Form</h1>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong> ${message}</p>
			`,
		};

		// Sending the email
		await transporter.sendMail(mailOptions);

		// Responding with a success message
		return NextResponse.json(
			{ message: 'Email has been sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Failed to send the email:', error);

		// Responding with an error message
		return NextResponse.json(
			{ message: 'Failed to send the email' },
			{ status: 500 }
		);
	}
}
