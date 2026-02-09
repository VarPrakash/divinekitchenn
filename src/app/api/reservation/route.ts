import { NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://prakashvara.app.n8n.cloud/webhook/make-reservation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, partySize, dateTime } = body;

    if (!name || !email || !phone || !partySize || !dateTime) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, partySize, dateTime" },
        { status: 400 }
      );
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, partySize, dateTime }),
    });

    // Read the response body as text first (webhook may return JSON or plain text)
    const responseText = await response.text();

    if (!response.ok) {
      console.error(
        `Webhook error: status=${response.status} body=${responseText}`
      );
      return NextResponse.json(
        { error: "Failed to create reservation. Please try again." },
        { status: 502 }
      );
    }

    // Try to parse as JSON, fall back to wrapping the text
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Reservation API error:", err);
    return NextResponse.json(
      { error: "Could not reach the reservation service. Please try again later." },
      { status: 502 }
    );
  }
}
