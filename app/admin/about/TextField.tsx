interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextField({
  label,
  value,
  onChange,
  placeholder,
}: TextFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-yellow-400">
        {label}
      </label>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white outline-none focus:border-yellow-500"
      />
    </div>
  );
}