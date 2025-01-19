"use client";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-[#70CFD8] p-6 rounded-lg">
      <div>
        <h2 className="text-black text-xl mb-6">Send us a message</h2>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Customer Name"
            required
            className="bg-white text-black"
          />
          <Input
            type="email"
            placeholder="Customer Email"
            required
            className="bg-white text-black"
          />
          <Input
            type="date"
            placeholder="Preferred Consultation Date"
            required
            className="bg-white text-black"
          />
          <Textarea
            placeholder="Message"
            required
            className="bg-white min-h-[100px] text-black"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full h-auto text-white font-semibold py-3 px-5 rounded-lg bg-[#00474D] shadow-md hover:from-[#00474D] hover:to-[#5BB4B4] transform transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <span className="loader animate-spin rounded-full border-t-2 border-black w-4 h-4"></span>
            Submitting...
          </div>
        ) : (
          "Submit Your Inquiry"
        )}
      </Button>
    </form>
  );
}
