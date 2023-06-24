const nodemailer = require('nodemailer');

export default function handler(req, res) {

  const message = {
    from: req.body.email,
    to: "alihadimedlej001@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6ac5b8fc12997f",
      pass: "cf62212425f85f"
    }
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}