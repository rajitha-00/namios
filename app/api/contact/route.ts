import { NextResponse } from "next/server";
import { sendContactEnquiry, type ContactFormData } from "../../../lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, property, phone, propertyType, roomCount, topic, message } = body;

    // Basic validation
    if (!name || !email || !property || !propertyType || !topic || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields marked with an asterisk." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name: String(name).trim(),
      email: String(email).trim(),
      property: String(property).trim(),
      phone: phone ? String(phone).trim() : undefined,
      propertyType: String(propertyType).trim(),
      roomCount: roomCount ? String(roomCount).trim() : undefined,
      topic: String(topic).trim(),
      message: String(message).trim()
    };

    // Attempt to send email via SMTP (SpaceMail)
    await sendContactEnquiry(formData);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our team will get back to you within 1 business day."
    });
  } catch (error: any) {
    console.error("Error sending contact email via SMTP:", error);

    // Return detailed error response or helpful fallback state
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email directly. You can also contact us directly at hello@namios.io.",
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
