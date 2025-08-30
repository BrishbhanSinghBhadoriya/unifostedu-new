"use client";

import React from "react";

export const cx = (...c) => c.filter(Boolean).join(" ");

export const Card = ({ className, children, hover = false }) => (
  <div className={cx(
    "bg-white rounded-xl shadow-sm border border-gray-100 transition-all",
    hover && "hover:shadow-md hover:border-gray-200",
    className
  )}>
    {children}
  </div>
);

export const PrimaryButton = ({ children, className, icon, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-white font-medium hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 transition-all shadow-sm hover:shadow-md",
      className
    )}
  >
    {icon && React.cloneElement(icon, { size: 18 })}
    {children}
  </button>
);

export const SecondaryButton = ({ children, className, icon, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition-all",
      className
    )}
  >
    {icon && React.cloneElement(icon, { size: 18 })}
    {children}
  </button>
);

export const Badge = ({ children, variant = "default", className }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default { Card, PrimaryButton, SecondaryButton, Badge, cx };


