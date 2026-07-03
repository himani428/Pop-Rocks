// Sends a plain-text notification email to the studio owner whenever someone
// enrolls in a class, requests a booking, or sends a contact message.
//
// Configure SMTP_* env vars to activate this (see .env.example). If they're
// not set, notifications are just logged to the console instead of sent —
// so the API never breaks or slows down just because email isn't configured
// yet.

const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
  return transporter;
}

async function notifyOwner({ subject, lines, replyTo }) {
  const ownerEmail = process.env.OWNER_EMAIL;
  const text = lines.join("\n");

  const t = getTransporter();
  if (!t || !ownerEmail) {
    console.log("[mail] SMTP not configured — would have sent:\n" + `Subject: ${subject}\n${text}`);
    return;
  }

  try {
    await t.sendMail({
      from: `"Pop Rocks Dance Academy" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      replyTo: replyTo || undefined,
      subject,
      text
    });
  } catch (err) {
    // Never let a failed email break the API response — just log it.
    console.error("[mail] Failed to send notification:", err.message);
  }
}

module.exports = { notifyOwner };