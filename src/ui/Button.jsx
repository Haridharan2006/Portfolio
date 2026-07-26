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
    focus-visible:ring-blue-500/50
    focus-visible:ring-offset-2
    focus-visible:ring-offset-slate-950
    disabled:pointer-events-none
    disabled:opacity-60
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      border
      border-blue-500/20
      bg-gradient-to-r
      from-blue-600
      via-blue-500
      to-cyan-500
      text-white
      shadow-lg
      shadow-blue-500/20
      enabled:hover:-translate-y-1
      enabled:hover:shadow-xl
      enabled:hover:shadow-blue-500/35
      enabled:hover:from-blue-500
      enabled:hover:to-cyan-400
      enabled:active:scale-[0.98]
    `,

    secondary: `
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      text-slate-200
      enabled:hover:-translate-y-1
      enabled:hover:border-blue-500/50
      enabled:hover:bg-blue-500/10
      enabled:hover:text-white
      enabled:hover:shadow-lg
      enabled:hover:shadow-blue-500/15
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