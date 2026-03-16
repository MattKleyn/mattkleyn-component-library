function Link({
  href = "",
  className = "",
  children,
  target,
  rel,
  variant = "default",
  ...props
}) {
  const safeRel =
    target === "_blank" ? rel || "noopener noreferrer" : rel;

  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      className={`link link-${variant} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;