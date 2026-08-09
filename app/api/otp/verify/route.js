import { NextResponse } from "next/server";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydeSUhxPmlH-OLsZW1yBUszPndmJ1UgNXEQhR0s-Q0uh5iRqseh-dTyIS8os5MkAkcbQ/exec";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    // Call the Google Apps Script to verify the OTP
    const verifyResponse = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        action: "verifyOTP",
        email: email,
        otp: otp,
      }),
    });

    if (!verifyResponse.ok) {
      const errText = await verifyResponse.text();
      throw new Error(`Google Script verification error: ${errText}`);
    }

    const verifyResult = await verifyResponse.text();
    const cleanResult = verifyResult.trim().toLowerCase();

    if (cleanResult.includes("valid")) {
      return NextResponse.json({ success: true, message: "OTP verified successfully" });
    } else if (cleanResult.includes("expired")) {
      return NextResponse.json({ success: false, error: "OTP has expired. Please request a new one." }, { status: 400 });
    } else {
      return NextResponse.json({ success: false, error: "Invalid OTP. Please check the code and try again." }, { status: 400 });
    }
  } catch (error) {
    console.error("Error in verify-otp route:", error);
    return NextResponse.json({ error: error.message || "Failed to verify OTP" }, { status: 500 });
  }
}
