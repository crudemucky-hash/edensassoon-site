import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { formId, fields } = await req.json();

    const body = new FormData();
    body.set("formData", JSON.stringify(fields));
    body.set("formId", formId);
    body.set("locationId", "46DqwYkO8Z2Pypm4CVde");

    const res = await fetch("https://backend.leadconnectorhq.com/forms/submit", {
      method: "POST",
      body,
    });

    const text = await res.text();
    console.log("GHL response:", res.status, text);

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, body: text }, { status: 500 });
    }
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
