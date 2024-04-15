"use server";

import { Resend } from "resend";

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const senderEmail = formData.get("email") as string;
  const message = formData.get("message") as string;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_ADDRESS as string,
      subject: "New Message from Portfolio",
      reply_to: senderEmail,
      text: message + "\n\n Email: " + senderEmail + "\n Name: " + name,
    });

    return {
      message: "Got your message! I'll get back to you soon.",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Something went wrong. Please try again later.",
      code: 500,
    };
  }
}
