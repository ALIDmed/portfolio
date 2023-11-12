"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!message) {
    return {
      error: "Please enter a message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "mohammed.amzyl00@gmail.com",
      subject: "Portfolio contact form",
      text: message,
      reply_to: senderEmail,
    });
  } catch (error) {
    return {
      error: error.message,
    };
  }

  return {
    data,
  };
};
