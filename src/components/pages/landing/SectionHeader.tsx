"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  highlight?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
};

const SectionHeader = ({
  title,
  subtitle,
  eyebrow,
  highlight,
  align = "center",
  size = "lg",
}: SectionHeaderProps) => {
  const sizeMap: Record<"md" | "lg", string> = {
    md: "text-2xl sm:text-3xl md:text-4xl",
    lg: "text-3xl sm:text-4xl md:text-5xl",
  };

  const alignMap: Record<"left" | "center", string> = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const renderTitle = () => {
    if (!highlight) {
      return (
        <h2
          className={`${sizeMap[size]} font-semibold tracking-tight text-[#001e3c] mb-2`}
        >
          {title}
        </h2>
      );
    }

    const [before, after] = title.split(highlight);

    return (
      <h2 className={`${sizeMap[size]} font-semibold tracking-tight mb-2`}>
        <span className="text-[#001e3c]">{before}</span>
        <span className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
          {highlight}
        </span>
        <span className="text-[#001e3c]">{after}</span>
      </h2>
    );
  };

  return (
    <motion.div
      className={`relative flex flex-col gap-2 ${alignMap[align]} mb-10 sm:mb-14`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -z-10 -top-6 -left-10 h-14 w-14 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="pointer-events-none absolute -z-10 -bottom-8 -right-10 h-16 w-16 rounded-full bg-indigo-500/10 blur-2xl" />

      {eyebrow && (
        <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-700/80 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full">
          {eyebrow}
        </div>
      )}

      {renderTitle()}

      <div className={`${align === "center" ? "mx-auto" : ""} relative mb-1`}>
        <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#00ffe0] to-[#00d4c4]" />
        <div className="absolute inset-0 blur-md opacity-40 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] rounded-full" />
      </div>

      {subtitle && (
        <p
          className={`text-base sm:text-lg text-gray-600 ${
            align === "center" ? "mx-auto" : ""
          } max-w-3xl px-4`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
