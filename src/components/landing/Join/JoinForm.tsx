"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
  position: z.string().min(2, "Position required"),
  resume: z.string().url("Valid URL required"),
});

type FormData = z.infer<typeof schema>;

export default function JoinForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

 const onSubmit = async (data: FormData) => {
  const controller = new AbortController();

  try {
    await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    setSuccess(true);
    reset();
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted safely");
    } else {
      console.error(err);
    }
  }

  return () => controller.abort();
};


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary-dark">
        Join and become a master!
      </h2>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            bg-green-50 border border-green-200
            text-green-700 px-4 py-3 rounded-lg
          "
        >
          Thanks for joining! We’ll get back to you soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {[
          ["name", "Name"],
          ["email", "Email"],
          ["phone", "Phone number"],
          ["position", "Position"],
          ["resume", "Resume / Portfolio link"],
        ].map(([key, label]) => (
          <div key={key}>
            <input
              {...register(key as keyof FormData)}
              placeholder={label}
              disabled={isSubmitting}
              className="
                w-full rounded-xl px-4 py-3 text-black
                border border-gray-300
                focus:outline-none focus:border-primary
                transition
              "
            />
            {errors[key as keyof FormData] && (
              <p className="text-sm text-red-500 mt-1">
                {errors[key as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <div className="flex gap-3 pt-2">
          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              flex-1 bg-primary hover:bg-primary-dark)
              text-white py-3 rounded-xl
              font-semibold transition
            "
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={() => {
              reset();
              setSuccess(false);
            }}
            className="
              flex-1 border border-gray-300
              py-3 rounded-xl
              font-semibold text-gray-700
              hover:bg-gray-200 transition
            "
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
