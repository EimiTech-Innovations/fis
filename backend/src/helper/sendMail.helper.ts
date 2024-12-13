import nodemailer from 'nodemailer';

const sendEmail = async (user: string, subject: string, message: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // hostname
    secure: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    to: user,
    subject: subject,
    html: message,
  });
};

export default sendEmail;
