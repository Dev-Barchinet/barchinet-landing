"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const messageRequestBody = {
        requesterName: formData.name,
        contactInformation: formData.email,
        message: formData.message,
        subject: "Contact Us",
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_GATEWAY}/api/contact-requests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(messageRequestBody),
        }
      );

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Clear the status after 3 seconds
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Ensure loading stops regardless of outcome
    }
  };

  return (
    <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center px-10 max-w-screen-xl mx-auto py-4 sm:py-32 gap-4 sm:gap-16 w-full">
      <div className="flex-1 w-full">
        <div className="relative h-[313px] sm:h-[616px] w-full">
          <Image
            fill
            alt="Contact Barchinet"
            src="/assets/images/contact.png"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 text-black">
        <h1 className="text-[#323232] leading-[110%] text-[24px] sm:text-[56px] font-bold relative">
          Contact Us
          <div className="absolute bottom-1 w-[30%] text-[#4D4D4D] left-0 right-0 h-[10px] bg-[#159a9c1f]"></div>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full border rounded-md p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading || !formData.email || !formData.message || !formData.name}
            className="px-4 py-2 bg-black disabled:opacity-55 text-white rounded-md w-full sm:max-w-[100px]"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        {status && (
          <p
            className={`mt-2 text-sm ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};
