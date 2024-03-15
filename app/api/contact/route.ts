import { NextResponse } from "next/server";

const mailer = require("nodemailer");

export async function POST(req: Request) {
  const request: any = await req.json();

  console.log(request);

  let transporter = mailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: "true",
    auth: {
      user: "contact@umarbashir.com",
      pass: "ustjjjcnancdajkw",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: request.email, // sender address
    to: "contact@umarbashir.com", // list of receivers
    subject: "Message From Portfolio Website", // Subject line
    text: request.message, // plain text body
    html: `
    <p>Name: ${request.name}</p>
    <p>Company: ${request.company}</p>
    <p>Email: ${request.email}</p>
    <p>Message: ${request.message}</p>
    `, // html body
  });

  return NextResponse.json({
    message: "Form Submitted Successfully",
    success: true,
  });
}
