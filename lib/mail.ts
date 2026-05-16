// import nodemailer from "nodemailer";

// export const sendOTPEmail = async (email: string, otp: string) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: "Your App <no-reply@app.com>",
//     to: email,
//     subject: "Your OTP Code",
//     html: `<h2>Your OTP is: ${otp}</h2>`,
//   });
// };

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendOTPEmail = async (email: string, otp: string) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is: ${otp}</h2>`,
    });

    console.log("EMAIL SENT:", response);
  } catch (error) {
    console.log("EMAIL ERROR:", error);
  }
};
