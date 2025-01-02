"use client";

import { BlogDataNew } from "@/types/blog";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface FeatureCardProps {
  blog: BlogDataNew;
}

const FeatureCard = ({
  blog: {
    data: { tag, displayImage, timeToRead, title, description, slug },
  },
}: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-[24.625rem] space-y-2.5 rounded-xl bg-white"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        className="relative min-h-[17.563rem] max-w-[26.625rem] overflow-hidden rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={displayImage}
          fill
          alt="Picture of the author"
          className="absolute object-cover"
        />
      </motion.div>
      <motion.div
        className="space-y-4 p-4"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-6"
          variants={contentVariants}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.span
            className="bg-mint px-2 py-1 font-medium text-white"
            whileHover={{ scale: 1.1 }}
          >
            {tag}
          </motion.span>
          <motion.span
            className="font-medium tracking-[-0.48px]"
            whileHover={{ scale: 1.1 }}
          >
            {timeToRead}
          </motion.span>
        </motion.div>
        <motion.p
          className="text-xl font-semibold leading-7 tracking-[-0.6px]"
          variants={contentVariants}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {title}
        </motion.p>
        <motion.p
          className="max-w-[26.625rem] leading-6 tracking-[-0.5px] text-secondary-text opacity-80"
          variants={contentVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {description}
        </motion.p>
        <motion.div
          variants={contentVariants}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-2 text-mint"
          >
            <motion.span
              className="font-medium tracking-[-0.48px] underline underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              Read more
            </motion.span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
