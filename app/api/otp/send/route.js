import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jtrrfhmnonxnjrkeydvl.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0cnJmaG1ub254bmpya2V5ZHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNzE1MjEsImV4cCI6MjA5ODc0NzUyMX0.QmfTni_jHGS3H-ny7oWlTA0kfGqwRmdH9HbM8vCuMUE";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 minutes validity

    // 2. Store OTP in Supabase otp_verifications table
    // We use a POST request with upsert headers (resolution=merge-duplicates)
    const storeResponse = await fetch(`${SUPABASE_URL}/rest/v1/otp_verifications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": "resolution=merge-duplicates" // Upsert on conflict of 'email' (which should be UNIQUE)
      },
      body: JSON.stringify({
        email: email,
        otp: otp,
        expires_at: expiresAt
      }),
    });

    if (!storeResponse.ok) {
      const errBody = await storeResponse.json().catch(() => ({}));
      // If table is missing, provide a clear diagnostic error
      if (storeResponse.status === 404) {
        throw new Error("Table 'otp_verifications' does not exist in Supabase database. Please create it in your Supabase SQL Editor.");
      }
      throw new Error(errBody.message || `Supabase error: ${storeResponse.status}`);
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
      throw new Error(errBody.message || `Resend error: ${resendResponse.status}`);
    }

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in send-otp route:", error);
    return NextResponse.json({ error: error.message || "Failed to send OTP" }, { status: 500 });
  }
}
