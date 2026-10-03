import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}