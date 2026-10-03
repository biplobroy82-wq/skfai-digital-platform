interface SaveButtonProps {
  loading: boolean;
  onClick: () => void;
}

export default function SaveButton({
  loading,
  onClick,
}: SaveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="w-full rounded-lg bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
    >
      {loading ? "Saving..." : "Save Changes"}
    </button>
  );
}