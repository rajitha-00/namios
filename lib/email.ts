import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  property: string;
  phone?: string;
  propertyType: string;
  roomCount?: string;
  topic: string;
  message: string;
}

/* ------------------------------------------------------------------ */
/*  Transporter                                                        */
/* ------------------------------------------------------------------ */

export const createMailTransporter = () => {
  const host = process.env.SMTP_HOST || "mail.spacemail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE !== undefined
    ? process.env.SMTP_SECURE === "true"
    : port === 465;
  const user = process.env.SMTP_USER || "hello@namios.io";
  const pass = process.env.SMTP_PASS || "";

  return nodemailer.createTransport({
    host, port, secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: true }
  });
};

/* ------------------------------------------------------------------ */
/*  Shared styles & layout pieces                                      */
/* ------------------------------------------------------------------ */

const BRAND = {
  dark: "#0a0e1a",
  accent: "#14b8a6",
  accentDark: "#0d9488",
  surface: "#111827",
  card: "#1e293b",
  text: "#e2e8f0",
  muted: "#94a3b8",
  white: "#ffffff",
  border: "#334155"
};

/** Full-width email wrapper — dark theme, premium aesthetic. */
const emailShell = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NamiOS</title></head>
<body style="margin:0;padding:0;background-color:${BRAND.dark};font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.dark};">
<tr><td align="center" style="padding:40px 16px;">

  <!-- Container -->
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;border:1px solid ${BRAND.border};background-color:${BRAND.surface};">
    ${content}
  </table>

  <!-- Footer -->
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin-top:24px;">
    <tr><td style="text-align:center;padding:0 16px;">
      <p style="margin:0 0 6px;font-size:12px;color:${BRAND.muted};line-height:1.5;">
        NamiOS · A modern hospitality operating platform by DesignNetrix
      </p>
      <p style="margin:0;font-size:11px;color:#475569;line-height:1.5;">
        Colombo, Sri Lanka · <a href="https://namios.io" style="color:${BRAND.accent};text-decoration:none;">namios.io</a>
      </p>
    </td></tr>
  </table>

</td></tr>
</table>
</body>
</html>`;

/** Brand header bar with NamiOS wordmark + optional tagline. */
const headerBar = (tagline: string) => `
  <tr><td style="background:linear-gradient(135deg, ${BRAND.dark} 0%, ${BRAND.surface} 100%);padding:36px 40px 28px;border-bottom:1px solid ${BRAND.border};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <h1 style="margin:0;font-size:26px;font-weight:700;color:${BRAND.white};letter-spacing:-0.5px;">
            Nami<span style="color:${BRAND.accent};">OS</span>
          </h1>
          <p style="margin:6px 0 0;font-size:13px;color:${BRAND.muted};letter-spacing:0.5px;text-transform:uppercase;">
            ${tagline}
          </p>
        </td>
        <td style="text-align:right;vertical-align:top;">
          <div style="display:inline-block;background:${BRAND.accent};color:${BRAND.dark};font-size:11px;font-weight:700;padding:5px 12px;border-radius:20px;letter-spacing:0.5px;text-transform:uppercase;">
            ${tagline.includes("Enquiry") ? "New Lead" : "Confirmation"}
          </div>
        </td>
      </tr>
    </table>
  </td></tr>`;

/** Styled detail row used inside tables. */
const detailRow = (label: string, value: string, isLast = false) => `
  <tr>
    <td style="padding:12px 0;color:${BRAND.muted};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;width:140px;vertical-align:top;border-bottom:${isLast ? "none" : `1px solid ${BRAND.border}`};">${label}</td>
    <td style="padding:12px 0 12px 12px;color:${BRAND.white};font-size:14px;font-weight:500;border-bottom:${isLast ? "none" : `1px solid ${BRAND.border}`};">${value}</td>
  </tr>`;

/** Call-to-action button */
const ctaButton = (text: string, href: string) => `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px auto 0;">
    <tr>
      <td style="background:linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentDark});border-radius:8px;text-align:center;">
        <a href="${href}" target="_blank" style="display:inline-block;padding:14px 36px;color:${BRAND.dark};font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.3px;">
          ${text} →
        </a>
      </td>
    </tr>
  </table>`;

/* ------------------------------------------------------------------ */
/*  Internal notification email (to hello@ / support@)                */
/* ------------------------------------------------------------------ */

function buildInternalEmail(data: ContactFormData): string {
  return emailShell(`
    ${headerBar("Website Enquiry")}

    <!-- Greeting -->
    <tr><td style="padding:32px 40px 0;">
      <p style="margin:0;font-size:15px;color:${BRAND.text};line-height:1.6;">
        A new enquiry has been submitted through the NamiOS website. Here are the details:
      </p>
    </td></tr>

    <!-- Details card -->
    <tr><td style="padding:24px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:12px;padding:24px;">
        <tr><td>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow("Name", `<strong>${data.name}</strong>`)}
            ${detailRow("Email", `<a href="mailto:${data.email}" style="color:${BRAND.accent};text-decoration:none;">${data.email}</a>`)}
            ${detailRow("Property", data.property)}
            ${detailRow("Phone", data.phone || "Not provided")}
            ${detailRow("Type", data.propertyType)}
            ${detailRow("Rooms", data.roomCount || "Not provided")}
            ${detailRow("Topic", `<span style="background:${BRAND.accent}22;color:${BRAND.accent};padding:3px 10px;border-radius:4px;font-size:12px;font-weight:600;">${data.topic}</span>`, true)}
          </table>
        </td></tr>
      </table>
    </td></tr>

    <!-- Message block -->
    <tr><td style="padding:0 40px 32px;">
      <div style="background:${BRAND.card};border:1px solid ${BRAND.border};border-left:4px solid ${BRAND.accent};border-radius:12px;padding:20px 24px;">
        <p style="margin:0 0 8px;font-size:11px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;">Enquiry Message</p>
        <p style="margin:0;font-size:14px;color:${BRAND.text};line-height:1.7;white-space:pre-wrap;">${data.message}</p>
      </div>
    </td></tr>

    <!-- Quick actions -->
    <tr><td style="padding:0 40px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align:center;">
            ${ctaButton("Reply to enquiry", `mailto:${data.email}?subject=${encodeURIComponent(`Re: NamiOS enquiry · ${data.property}`)}`)}
          </td>
        </tr>
      </table>
    </td></tr>
  `);
}

/* ------------------------------------------------------------------ */
/*  Customer confirmation email (to the person who submitted)          */
/* ------------------------------------------------------------------ */

function buildConfirmationEmail(data: ContactFormData): string {
  const firstName = data.name.split(" ")[0];

  return emailShell(`
    ${headerBar("Request Received")}

    <!-- Greeting -->
    <tr><td style="padding:36px 40px 0;">
      <h2 style="margin:0 0 8px;font-size:22px;color:${BRAND.white};font-weight:700;line-height:1.3;">
        Hello ${firstName}, we've received your request.
      </h2>
      <p style="margin:0;font-size:15px;color:${BRAND.text};line-height:1.7;">
        Thank you for reaching out about <strong style="color:${BRAND.white};">${data.property}</strong>. Our team is reviewing your details and will get back to you with a clear, useful next step.
      </p>
    </td></tr>

    <!-- What you shared summary card -->
    <tr><td style="padding:28px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:12px;padding:24px;">
        <tr><td>
          <p style="margin:0 0 16px;font-size:11px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;">What you shared</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow("Property", data.property)}
            ${detailRow("Type", data.propertyType)}
            ${data.roomCount ? detailRow("Rooms", data.roomCount) : ""}
            ${detailRow("Topic", `<span style="background:${BRAND.accent}22;color:${BRAND.accent};padding:3px 10px;border-radius:4px;font-size:12px;font-weight:600;">${data.topic}</span>`, true)}
          </table>
        </td></tr>
      </table>
    </td></tr>

    <!-- Timeline / What happens next -->
    <tr><td style="padding:0 40px;">
      <p style="margin:0 0 20px;font-size:11px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;">What happens next</p>

      <!-- Step 1 -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr>
          <td width="44" style="vertical-align:top;">
            <div style="width:36px;height:36px;background:${BRAND.accent}22;border:2px solid ${BRAND.accent};border-radius:50%;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:${BRAND.accent};">1</div>
          </td>
          <td style="padding-left:12px;vertical-align:top;">
            <p style="margin:0;font-size:14px;font-weight:700;color:${BRAND.white};">We review your details</p>
            <p style="margin:4px 0 0;font-size:13px;color:${BRAND.muted};line-height:1.5;">Our team maps your property type, size, and needs to the right NamiOS path.</p>
          </td>
        </tr>
      </table>

      <!-- Step 2 -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr>
          <td width="44" style="vertical-align:top;">
            <div style="width:36px;height:36px;background:${BRAND.accent}22;border:2px solid ${BRAND.accent};border-radius:50%;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:${BRAND.accent};">2</div>
          </td>
          <td style="padding-left:12px;vertical-align:top;">
            <p style="margin:0;font-size:14px;font-weight:700;color:${BRAND.white};">We reach out within 1 business day</p>
            <p style="margin:4px 0 0;font-size:13px;color:${BRAND.muted};line-height:1.5;">Expect a personal reply from our Sri Lankan hospitality team — not a generic deck.</p>
          </td>
        </tr>
      </table>

      <!-- Step 3 -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="44" style="vertical-align:top;">
            <div style="width:36px;height:36px;background:${BRAND.accent}22;border:2px solid ${BRAND.accent};border-radius:50%;text-align:center;line-height:32px;font-size:14px;font-weight:700;color:${BRAND.accent};">3</div>
          </td>
          <td style="padding-left:12px;vertical-align:top;">
            <p style="margin:0;font-size:14px;font-weight:700;color:${BRAND.white};">Tailored demo or next step</p>
            <p style="margin:4px 0 0;font-size:13px;color:${BRAND.muted};line-height:1.5;">We show you the relevant NamiOS screens for your property — configured, not templated.</p>
          </td>
        </tr>
      </table>
    </td></tr>

    <!-- CTA -->
    <tr><td style="padding:8px 40px 20px;text-align:center;">
      ${ctaButton("Explore NamiOS", "https://namios.io/products")}
    </td></tr>

    <!-- Urgent help -->
    <tr><td style="padding:8px 40px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:10px;padding:16px 20px;">
        <tr>
          <td>
            <p style="margin:0;font-size:13px;color:${BRAND.muted};line-height:1.6;">
              <strong style="color:${BRAND.text};">Need urgent help?</strong><br>
              Call our hotline at <a href="tel:+94707140146" style="color:${BRAND.accent};text-decoration:none;font-weight:600;">+94 70 714 0146</a>
              or WhatsApp us at <a href="https://wa.me/94707140146" style="color:${BRAND.accent};text-decoration:none;font-weight:600;">wa.me/94707140146</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  `);
}

/* ------------------------------------------------------------------ */
/*  Send function                                                      */
/* ------------------------------------------------------------------ */

export async function sendContactEnquiry(data: ContactFormData) {
  const pass = process.env.SMTP_PASS || "";
  if (!pass || pass === "your_password_for_this_email_account") {
    throw new Error(
      "SMTP password is not set. Please set your actual email password for hello@namios.io in .env.local (SMTP_PASS)."
    );
  }

  const transporter = createMailTransporter();

  // The authenticated SMTP user — ALL emails must be sent from this address
  const senderEmail = process.env.SMTP_USER || "hello@namios.io";

  const isSupport = data.topic.toLowerCase().includes("support");
  const recipientEmail = isSupport
    ? process.env.SUPPORT_EMAIL || "support@namios.io"
    : process.env.CONTACT_EMAIL || "hello@namios.io";

  const subject = `NamiOS Enquiry (${data.topic}) · ${data.property || data.name}`;

  const textContent = [
    "New NamiOS Website Enquiry",
    "",
    `Name: ${data.name}`,
    `Work Email: ${data.email}`,
    `Property Name: ${data.property}`,
    `Phone / WhatsApp: ${data.phone || "Not provided"}`,
    `Property Type: ${data.propertyType}`,
    `Room Count: ${data.roomCount || "Not provided"}`,
    `Topic: ${data.topic}`,
    "",
    "Message / Details:",
    data.message
  ].join("\n");

  // 1) Send internal notification to team
  await transporter.sendMail({
    from: `"NamiOS Website" <${senderEmail}>`,
    to: recipientEmail,
    replyTo: `"${data.name}" <${data.email}>`,
    subject,
    text: textContent,
    html: buildInternalEmail(data)
  });

  // 2) Send confirmation to the customer (must also use senderEmail as From)
  try {
    const firstName = data.name.split(" ")[0];
    await transporter.sendMail({
      from: `"NamiOS Team" <${senderEmail}>`,
      to: data.email,
      subject: `We've received your request, ${firstName} · NamiOS`,
      text: [
        `Hello ${firstName},`,
        "",
        `Thank you for reaching out to NamiOS about ${data.property}.`,
        "",
        `We have received your enquiry regarding "${data.topic}" and our Sri Lankan hospitality team is reviewing your details now.`,
        "",
        "What happens next:",
        "  1. We review your property details and requirements.",
        "  2. We reach out within 1 business day with a clear next step.",
        "  3. If relevant, we schedule a tailored demo for your property.",
        "",
        "Need urgent help?",
        "  Call: +94 70 714 0146",
        "  WhatsApp: https://wa.me/94707140146",
        "  Email: support@namios.io",
        "",
        "Best regards,",
        "NamiOS Team",
        "https://namios.io"
      ].join("\n"),
      html: buildConfirmationEmail(data)
    });
  } catch (ackErr) {
    // Log but don't block the main submission
    console.warn("Auto-acknowledgement email error:", ackErr);
  }
}
