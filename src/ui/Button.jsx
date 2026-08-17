function Button({
  children,
  href,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    gap-2.5
    rounded-2xl
    px-8
    py-4
    text-[15px]
    font-semibold
    tracking-wide
    transition-all
    duration-300
    select-none
    whitespace-nowrap
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-teal-500/50
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#0b0f0f]
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      border
      border-teal-500/20
      bg-gradient-to-r
      from-teal-600
      via-teal-500
      to-teal-400
      text-white
      shadow-lg
      shadow-teal-500/20
      enabled:hover:-translate-y-1
      enabled:hover:shadow-xl
      enabled:hover:shadow-teal-500/30
      enabled:hover:from-teal-500
      enabled:hover:to-teal-300
      enabled:active:scale-[0.98]
    `,

    secondary: `
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      text-slate-200
      enabled:hover:-translate-y-1
      enabled:hover:border-teal-500/40
      enabled:hover:bg-teal-500/10
      enabled:hover:text-white
      enabled:hover:shadow-lg
      enabled:hover:shadow-teal-500/10
      enabled:active:scale-[0.98]
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;