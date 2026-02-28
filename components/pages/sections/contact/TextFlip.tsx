"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function TextFlip() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Open to Senior "
          words={["Software Engineer", "Frontend Engineer", "UI Engineer", "Full Stack Engineer"]}
          suffix="roles."
        />
      </motion.div>
      <p className="mt-4 max-w-3xl mx-auto text-center text-base text-neutral-600 dark:text-neutral-300">
       Currently based in Ontario, Canada. Open to remote or hybrid roles. Interested in performance-focused, product-driven teams. Let&apos;s get in touch.
      </p>
    </div>
  );
}
