function Image({
  src = "",
  alt = "",
  className = "",
  variant = "default",
  loading = "lazy",
  decoding = "async",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`image image-${variant} ${className}`}
      {...props}
    />
  );
}

export default Image;