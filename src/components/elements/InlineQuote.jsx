function InlineQuote({ children, className = '', ...props }) {
  return (
    <q className={`inline-quote ${className}`} {...props}>
      {children}
    </q>
  );
}

export default InlineQuote;
