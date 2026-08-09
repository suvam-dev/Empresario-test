import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jtrrfhmnonxnjrkeydvl.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0cnJmaG1ub254bmpya2V5ZHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNzE1MjEsImV4cCI6MjA5ODc0NzUyMX0.QmfTni_jHGS3H-ny7oWlTA0kfGqwRmdH9HbM8vCuMUE";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    // 1. Fetch OTP record for this email from Supabase
    const response = await fetch(`${SUPABASE_URL}/rest/v1/otp_verifications?email=eq.${encodeURIComponent(email)}&select=*`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
      }
    });

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      throw new Error(errBody.message || `Supabase error: ${response.status}`);
    }

    const records = await response.json();
    if (!records || records.length === 0) {
      return NextResponse.json({ success: false, error: "No verification code requested for this email address." }, { status: 400 });
    }

    const record = records[0];
    const storedOtp = record.otp;
    const expiresAt = new Date(record.expires_at);
    const now = new Date();

    // 2. Validate OTP value and expiration
    if (storedOtp !== otp.toString()) {
      return NextResponse.json({ success: false, error: "Invalid verification code. Please check and try again." }, { status: 400 });
    }

    if (now > expiresAt) {
      return NextResponse.json({ success: false, error: "Verification code has expired. Please request a new one." }, { status: 400 });
    }

    // 3. Clear/delete the OTP record on successful verification so it cannot be reused
    await fetch(`${SUPABASE_URL}/rest/v1/otp_verifications?email=eq.${encodeURIComponent(email)}`, {
      method: "DELETE",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
      }
    });

    return NextResponse.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in verify-otp route:", error);
    return NextResponse.json({ error: error.message || "Failed to verify OTP" }, { status: 500 });
  }
}
