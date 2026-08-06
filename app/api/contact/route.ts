import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, phone, business } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: "🎬 New Lead Received - Sri Krishna Films",

      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">
        <h2>New Consultation Lead</h2>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Business</b></td>
            <td>${business || "-"}</td>
          </tr>

          <tr>
            <td><b>Date</b></td>
            <td>${new Date().toLocaleString("en-IN")}</td>
          </tr>
        </table>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}