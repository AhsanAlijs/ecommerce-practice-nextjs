import nodemailer from "nodemailer";

export const sendOTPEmail = async (email: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "Ecommerce <no-reply@app.com>",
    to: email,
    subject: "Your OTP Code for Password Reset",

    html: `
    <div style="
      font-family: Arial, sans-serif;
      background: #f5f7fb;
      padding: 40px 0;
    ">

      <div style="
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 15px rgba(0,0,0,0.12);
        border: 1px solid #e2e8f0;
      ">

        <!-- Header -->
        <div style="
          background: linear-gradient(135deg, #dc2626, #2563eb);
          padding: 20px;
          text-align: center;
          color: #ffffff;
        ">
          <h1 style="margin:0; font-size:20px;">
            Ecommerce Verification
          </h1>
          <p style="margin:5px 0 0; font-size:12px;">
            Secure OTP Authentication
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 30px; text-align: center;">

          <h2 style="color:#111827; margin-bottom:10px;">
            Your One Time Password
          </h2>

          <p style="color:#475569; font-size:14px; margin-bottom:25px;">
            Use this OTP to verify your account. It will expire in 1 minutes.
          </p>

          <!-- OTP Box -->
          <div style="
            display:inline-block;
            background:#fee2e2;
            color:#dc2626;
            font-size:28px;
            font-weight:bold;
            letter-spacing:6px;
            padding:15px 30px;
            border-radius:10px;
            border:1px dashed #dc2626;
          ">
            ${otp}
          </div>

          <p style="
            margin-top:25px;
            font-size:12px;
            color:#94a3b8;
          ">
            If you did not request this code, ignore this email.
          </p>

        </div>

        <!-- Footer -->
        <div style="
          background:#0f172a;
          color:#ffffff;
          text-align:center;
          padding:15px;
          font-size:12px;
        ">
          © 2026 Ecommerce Platform. All rights reserved.
        </div>

      </div>
    </div>
    `,
  });
};