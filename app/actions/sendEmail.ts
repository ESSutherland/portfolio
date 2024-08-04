"use server";
import { getErrorMessage, validateString } from "../lib/utils";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(firstName, 500)) {
    return {
      error: "Invalid first name",
    };
  }

  if (!validateString(lastName, 500)) {
    return {
      error: "Invalid last name",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "esutherland95@gmail.com",
      subject: `New message on your portfolio from ${firstName} ${lastName}`,
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (e: unknown) {
    return {
      error: getErrorMessage(e),
    };
  }

  return {
    data,
  };
};
