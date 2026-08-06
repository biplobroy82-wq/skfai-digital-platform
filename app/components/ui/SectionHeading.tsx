interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {badge && (
        <span className="inline-flex items-center rounded-full border border-[#C8A24C]/30 bg-[#FFF8E8] px-4 py-1 text-sm font-semibold text-[#A8842E]">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4B5563] md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}