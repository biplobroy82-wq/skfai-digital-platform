import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, business } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: "🎬 New Lead Received - Sri Krishna Films",

      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">

        <h2 style="color:#111">
          New Consultation Lead
        </h2>

        <table cellpadding="10" cellspacing="0" border="1" style="border-collapse:collapse">

          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><b>Mobile</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Business</b></td>
            <td>${business || "-"}</td>
          </tr>

          <tr>
            <td><b>Website</b></td>
            <td>https://www.skfai.online</td>
          </tr>

          <tr>
            <td><b>Date</b></td>
            <td>${new Date().toLocaleString("en-IN")}</td>
          </tr>

        </table>

        <br>

        <p>
          This lead was submitted from the website popup.
        </p>

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
      },
      {
        status: 500,
      }
    );
  }
}