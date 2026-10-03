interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export default function TextArea({
  label,
  value,
  onChange,
  rows = 4,
}: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-yellow-400">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white outline-none focus:border-yellow-500"
      />
    </div>
  );
}