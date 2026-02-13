import React, { useState } from "react";
import { motion } from "framer-motion";

const LOCATIONS = ["Bangalore", "Gurgaon", "Mumbai"] as const;
const JOBS = [
  {
    id: 1,
    title: "Associate Brand Solutions Manager",
    experience: "1–2 years",
    type: "Permanent",
    department: "Brand Solutions",
    location: "Bangalore",
  },
  {
    id: 2,
    title: "Associate Graphic Designer",
    experience: "1–3 years",
    type: "Permanent",
    department: "Art",
    location: "Bangalore",
  },
  {
    id: 3,
    title: "Associate Group Head – Copy",
    experience: "6–8 years",
    type: "Permanent",
    department: "Copy",
    location: "Mumbai",
  },
];

function Openings() {
  const [activeLocation, setActiveLocation] =
    useState<(typeof LOCATIONS)[number]>("Bangalore");
  const filteredJobs = JOBS.filter((job) => job.location === activeLocation);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold mb-10 text-gray-800"
        >
          Current Openings
        </motion.h2>

        <div className="flex justify-center gap-8 mb-14">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`text-sm font-semibold transition ${
                activeLocation === loc
                  ? "text-red-600 underline underline-offset-4"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {job.title} ({job.experience})
                </h3>
                <p className="text-sm text-gray-800 mt-1">
                  {job.type} • {job.department}
                </p>
              </div>

              <button className="cursor-pointer self-start md:self-auto text-white flex items-center gap-2 bg-primary-light text-sm font-semibold px-6 py-2 rounded-full hover:scale-105 transition">
                View Details
                <span className="inline-block">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Openings;
