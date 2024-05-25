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
      user: "info.cooltechdesign@gmail.com",
      pass: "xtsrzmbfycywzjya",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Portfolio Website <info.cooltechdesign@gmail.com>", // sender address
    to: "mail.umarbashir@gmail.com", // list of receivers
    subject: "Message From Portfolio Website", // Subject line
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
