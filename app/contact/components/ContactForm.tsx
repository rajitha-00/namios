"use client";

import { useState, type FormEvent } from "react";

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      property: String(form.get("property") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      propertyType: String(form.get("propertyType") ?? "").trim(),
      roomCount: String(form.get("roomCount") ?? "").trim(),
      topic: String(form.get("topic") ?? "").trim(),
      message: String(form.get("message") ?? "").trim()
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({ type: "success", text: data.message });
        formElement.reset();
      } else {
        throw new Error(data.message || "Failed to submit enquiry.");
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      // Fallback prepare mailto link option
      const subject = encodeURIComponent(`NamiOS enquiry · ${payload.property || payload.name}`);
      const body = encodeURIComponent([
        `Name: ${payload.name}`,
        `Property: ${payload.property}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "Not provided"}`,
        `Property type: ${payload.propertyType}`,
        `Room count: ${payload.roomCount || "Not provided"}`,
        `Enquiry: ${payload.topic}`,
        "",
        payload.message
      ].join("\n"));

      const mailtoUrl = `mailto:hello@namios.io?subject=${subject}&body=${body}`;

      setStatusMessage({
        type: "error",
        text: err.message || "Something went wrong sending your message."
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="nami-contact-form" onSubmit={handleSubmit}>
      <header>
        <span>CONTACT FORM</span>
        <strong>Let’s map your property.</strong>
        <p>Tell us enough to make the first reply useful. Required fields are marked.</p>
      </header>

      {statusMessage && (
        <div
          className={`form-status-banner ${statusMessage.type}`}
          style={{
            padding: "12px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "16px",
            backgroundColor: statusMessage.type === "success" ? "#f0fdf4" : "#fef2f2",
            color: statusMessage.type === "success" ? "#166534" : "#991b1b",
            border: `1px solid ${statusMessage.type === "success" ? "#bbf7d0" : "#fecaca"}`
          }}
        >
          {statusMessage.text}
          {statusMessage.type === "error" && (
            <p style={{ marginTop: "6px", fontSize: "13px" }}>
              Alternatively, email us directly at{" "}
              <a href="mailto:hello@namios.io" style={{ textDecoration: "underline", fontWeight: 600 }}>
                hello@namios.io
              </a>
            </p>
          )}
        </div>
      )}

      <div className="form-field-row">
        <label>
          <span>Your name *</span>
          <input autoComplete="name" name="name" placeholder="e.g. Amara Silva" required />
        </label>
        <label>
          <span>Work email *</span>
          <input autoComplete="email" name="email" placeholder="you@property.com" required type="email" />
        </label>
      </div>
      <div className="form-field-row">
        <label>
          <span>Property name *</span>
          <input autoComplete="organization" name="property" placeholder="Your hotel or villa" required />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input autoComplete="tel" name="phone" placeholder="+94 7X XXX XXXX" type="tel" />
        </label>
      </div>
      <div className="form-field-row form-field-row-three">
        <label>
          <span>Property type *</span>
          <select defaultValue="" name="propertyType" required>
            <option disabled value="">Select type</option>
            <option>Hotel</option>
            <option>Villa</option>
            <option>Guesthouse</option>
            <option>Resort</option>
            <option>Restaurant</option>
            <option>Hotel group</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Rooms</span>
          <input inputMode="numeric" min="0" name="roomCount" placeholder="e.g. 24" type="number" />
        </label>
        <label>
          <span>I need help with *</span>
          <select defaultValue="" name="topic" required>
            <option disabled value="">Select topic</option>
            <option>Product demo</option>
            <option>Pricing and trial</option>
            <option>Migration and onboarding</option>
            <option>Direct-booking website</option>
            <option>Existing customer support</option>
            <option>Partnership</option>
          </select>
        </label>
      </div>
      <label>
        <span>What should we understand first? *</span>
        <textarea
          name="message"
          placeholder="Tell us about your current system, the repeated work slowing the team down, or the outcome you want."
          required
          rows={5}
        />
      </label>
      <div className="contact-form-footer">
        <p>Submitting sends your request directly to our team. Read our <a href="/privacy">Privacy Policy</a>.</p>
        <button disabled={submitting} type="submit">
          {submitting ? "Sending..." : "Submit enquiry"}
          <svg className="lucide-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
};

