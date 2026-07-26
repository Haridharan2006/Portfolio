function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-600 hover:bg-blue-500 hover:scale-105 shadow-lg shadow-blue-500/30",

    secondary:
      "border border-slate-600 hover:border-blue-500 hover:bg-slate-800 hover:scale-105",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;