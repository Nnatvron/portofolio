const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail", // Gunakan layanan email (contoh: Gmail)
    auth: {
        user: "natravelsitra07@gmail.com", // Ganti dengan email Anda
        pass: "Kingz_jb1", // Ganti dengan password email Anda
    },
});

// Route untuk mengirim email
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "natravelsitra07@gmail.com", // Ganti dengan email tujuan Anda
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Failed to send email");
        }
        res.status(200).send("Email sent successfully!");
    });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
