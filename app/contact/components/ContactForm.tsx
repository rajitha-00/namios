"use client";

import type { FormEvent } from "react";

export const ContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const property = String(form.get("property") ?? "").trim();
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const propertyType = String(form.get("propertyType") ?? "").trim();
    const roomCount = String(form.get("roomCount") ?? "").trim();
    const topic = String(form.get("topic") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`NamiOS enquiry · ${property || name}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Property: ${property}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Property type: ${propertyType}`,
      `Room count: ${roomCount || "Not provided"}`,
      `Enquiry: ${topic}`,
      "",
      message
    ].join("\n"));

    window.location.href = `mailto:hellonamios@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="nami-contact-form" onSubmit={handleSubmit}>
      <header><span>CONTACT FORM</span><strong>Let’s map your property.</strong><p>Tell us enough to make the first reply useful. Required fields are marked.</p></header>
      <div className="form-field-row">
        <label><span>Your name *</span><input autoComplete="name" name="name" placeholder="e.g. Amara Silva" required /></label>
        <label><span>Work email *</span><input autoComplete="email" name="email" placeholder="you@property.com" required type="email" /></label>
      </div>
      <div className="form-field-row">
        <label><span>Property name *</span><input autoComplete="organization" name="property" placeholder="Your hotel or villa" required /></label>
        <label><span>Phone / WhatsApp</span><input autoComplete="tel" name="phone" placeholder="+94 7X XXX XXXX" type="tel" /></label>
      </div>
      <div className="form-field-row form-field-row-three">
        <label><span>Property type *</span><select defaultValue="" name="propertyType" required><option disabled value="">Select type</option><option>Hotel</option><option>Villa</option><option>Guesthouse</option><option>Resort</option><option>Restaurant</option><option>Hotel group</option><option>Other</option></select></label>
        <label><span>Rooms</span><input inputMode="numeric" min="0" name="roomCount" placeholder="e.g. 24" type="number" /></label>
        <label><span>I need help with *</span><select defaultValue="" name="topic" required><option disabled value="">Select topic</option><option>Product demo</option><option>Pricing and trial</option><option>Migration and onboarding</option><option>Direct-booking website</option><option>Existing customer support</option><option>Partnership</option></select></label>
      </div>
      <label><span>What should we understand first? *</span><textarea name="message" placeholder="Tell us about your current system, the repeated work slowing the team down, or the outcome you want." required rows={5} /></label>
      <div className="contact-form-footer"><p>Submitting opens your email app with this enquiry prepared. Read our <a href="/privacy">Privacy Policy</a>.</p><button type="submit">Prepare my enquiry <span>→</span></button></div>
    </form>
  );
};
