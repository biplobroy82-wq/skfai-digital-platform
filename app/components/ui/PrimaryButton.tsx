import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-[#C8A24C]
        bg-[#C8A24C]
        px-6
        py-3
        text-base
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-[#A8842E]
        hover:border-[#A8842E]
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </Link>
  );
}