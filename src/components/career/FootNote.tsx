import { motion } from "framer-motion";

function FootNote() {
  return (
    <section className="bg-linear-to-r from-[#0B1225] to-[#111A35] text-black py-16 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-20 text-white"
      >
        Didn&apos;t find your role? <br />
        <span className="text-white leading-relaxed font-semibold text-[36px]">
          We&apos;re always looking for sharp minds.
        </span>
      </motion.p>
    </section>
  );
}

export default FootNote;
