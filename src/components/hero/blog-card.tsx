"use client";

import { BlogDataNew } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import AvatarImage from "../avatar-image";
import { motion } from "motion/react";

interface BlogCardProps {
  blog: BlogDataNew;
  index: number;
}

const BlogCard = ({
  blog: {
    data: {
      authorName,
      avatar,
      displayImage,
      timeToRead,
      tag,
      title,
      description,
      slug,
    },
  },
  index,
}: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <Link
        href={`blog/${slug}`}
        className="block px-2 py-1.5 transition duration-300 md:px-4 md:py-3"
      >
        <motion.div
          className="space-y-3 md:space-y-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative h-48 w-full max-w-[24.625rem] overflow-hidden rounded-xl sm:h-56 md:h-64 lg:h-[17.563rem]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={displayImage}
              alt="blog1"
              fill
              quality={50}
              className="absolute object-cover"
            />
          </motion.div>
          <motion.p
            className="line-clamp-1 text-lg font-semibold leading-snug tracking-[-0.038rem] sm:text-xl sm:leading-[1.875rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >
            {title}
          </motion.p>
          <motion.p
            className="line-clamp-2 max-w-[24.625rem] text-sm leading-relaxed tracking-[-0.031rem] text-secondary-text sm:text-base sm:leading-[1.625rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex items-center gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <AvatarImage avatar={avatar} />
            </motion.div>
            <motion.span
              className="text-sm font-medium leading-5 tracking-[-0.03rem] text-secondary-text sm:text-base"
              whileHover={{ y: -2 }}
            >
              {authorName}
            </motion.span>
            <motion.span
              className="shrink-0 rounded-full bg-mint px-2 py-1 text-xs text-white sm:px-3 sm:text-sm"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              {tag}
            </motion.span>
            <motion.span
              className="text-sm font-medium leading-5 tracking-[-0.03rem] text-secondary-text sm:text-base"
              whileHover={{ y: -2 }}
            >
              {timeToRead}
            </motion.span>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
