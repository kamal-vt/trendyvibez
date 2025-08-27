import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="w-full text-center">
      <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
        <span className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#c6186e] to-[#6a35b5] shadow-lg">
          Discover
        </span>{" "}
        how we can grow your business 🚀
      </h4>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="flex max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg backdrop-blur-xl bg-white/10 border border-white/20"
      >
        <input
          type="email"
          placeholder="Enter your email..."
          className="flex-1 px-3 py-3 text-slate-900 bg-white/90 focus:outline-none text-sm"
        />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 font-semibold text-white text-sm bg-gradient-to-r from-[#c6186e] to-[#6a35b5] hover:from-[#6a35b5] hover:to-[#3d3ed3] transition-all"
        >
          Subscribe
        </motion.button>
      </motion.div>

      <p className="mt-3 text-white/70 text-base max-w-md mx-auto">
        Great things happen when we collaborate — let’s innovate and build success together.
      </p>
    </div>
  );
};

export default Newsletter;
