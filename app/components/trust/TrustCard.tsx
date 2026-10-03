import GlassCard from "../ui/GlassCard";

interface TrustCardProps {
  number: string;
  title: string;
  description: string;
}

export default function TrustCard({
  number,
  title,
  description,
}: TrustCardProps) {
  return (
    <GlassCard className="h-full text-center">
      <div className="space-y-4">
        <h3 className="text-5xl font-extrabold text-[#C8A24C]">
          {number}
        </h3>

        <h4 className="text-xl font-semibold text-[#1A1A1A]">
          {title}
        </h4>

        <p className="leading-7 text-gray-600">
          {description}
        </p>
      </div>
    </GlassCard>
  );
}