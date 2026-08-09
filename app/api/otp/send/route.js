import { NextResponse } from "next/server";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydeSUhxPmlH-OLsZW1yBUszPndmJ1UgNXEQhR0s-Q0uh5iRqseh-dTyIS8os5MkAkcbQ/exec";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 2. Store OTP in Google Sheet via Apps Script
    // We call the Apps Script with action=storeOTP
    const storeResponse = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        action: "storeOTP",
        email: email,
        otp: otp,
      }),
    });

    if (!storeResponse.ok) {
      const errText = await storeResponse.text();
      throw new Error(`Google Script error: ${errText}`);
    }

    const storeResult = await storeResponse.text();
    if (!storeResult.toLowerCase().includes("stored")) {
      throw new Error(`Failed to store OTP: ${storeResult}`);
    }

    // 3. Send email via Resend API
    const apiKey = process.env.resend_api_key || process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Empresario <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("Resend API key is missing");
      return NextResponse.json({ error: "Email configuration error on server" }, { status: 500 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: email,
        subject: "Your OTP for Empresario Registration",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #1a73e8; text-align: center;">Empresario 2026</h2>
            <p>Hello,</p>
            <p>Thank you for starting your registration for <strong>Empresario 2026</strong>, the annual startup competition by E-Cell IIT Kharagpur.</p>
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-radius: 6px; margin: 20px 0;">
              <span style="font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #333;">${otp}</span>
            </div>
            <p>This verification code is valid for <strong>5 minutes</strong>. Please enter it in the registration form to proceed.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #777;">If you did not request this code, you can safely ignore this email.</p>
            <p style="font-size: 14px; font-weight: bold; color: #555;">Team Empresario<br/>E-Cell IIT Kharagpur</p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errBody = await resendResponse.json().catch(() => ({}));
      throw new Error(errBody.message || `Resend error code: ${resendResponse.status}`);
    }

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in send-otp route:", error);
    return NextResponse.json({ error: error.message || "Failed to send OTP" }, { status: 500 });
  }
}
