import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yieubokzioakellfuepn.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_F2_qSJzl0v6XVGAyRdOLIg_ocQOkhPN";

export async function GET(request) {
  try {
    // Basic authorization check: verify it's triggered by Vercel Cron or local authorization header
    const authHeader = request.headers.get("authorization");
    const isVercelCron = request.headers.get("x-vercel-cron") === "true";
    
    // Only run if authorized by Vercel Cron or matching Bearer token (if configured)
    if (!isVercelCron && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      // In development, allow direct requests for easy testing
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ error: "Unauthorized access to cron route" }, { status: 401 });
      }
    }

    // Database connection health check: fetch count of entries in registrations
    const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/empresario_registrations?select=id`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
      }
    });

    if (!dbResponse.ok) {
      throw new Error(`Database connection failed: ${dbResponse.status} ${dbResponse.statusText}`);
    }

    const registrations = await dbResponse.json();
    const count = registrations ? registrations.length : 0;

    console.log(`[Cron Cleanup] Database health check completed. Current registrations count: ${count}`);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      registrationsCount: count,
      message: "Database connection is healthy and verified."
    });
  } catch (error) {
    console.error("[Cron Cleanup Error]:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
