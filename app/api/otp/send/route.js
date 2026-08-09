import { NextResponse } from "next/server";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydeSUhxPmlH-OLsZW1yBUszPndmJ1UgNXEQhR0s-Q0uh5iRqseh-dTyIS8os5MkAkcbQ/exec";
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
    const storeResponse = await fetch(`${SUPABASE_URL}/rest/v1/otp_verifications?on_conflict=email`, {
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

    // 3. Send email via Google Apps Script MailApp
    const emailResponse = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        action: "sendEmailOTP",
        email: email,
        otp: otp,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      throw new Error(`Google Script email sending error: ${errText}`);
    }

    const emailResult = await emailResponse.text();
    if (!emailResult.toLowerCase().includes("sent")) {
      throw new Error(`Failed to send email: ${emailResult}`);
    }

    return NextResponse.json({ success: true, message: "OTP sent successfully via Google Mail" });
  } catch (error) {
    console.error("Error in send-otp route:", error);
    return NextResponse.json({ error: error.message || "Failed to send OTP" }, { status: 500 });
  }
}
