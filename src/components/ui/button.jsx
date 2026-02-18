export default function Button({
  label = "Register",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        text-white font-medium text-sm lg:text-base xl:text-lg bg-red-600 px-3 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3 rounded-lg hover:bg-red-700 hover:cursor-pointer transition-colors duration-200
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {label}
    </button>
  );
}
