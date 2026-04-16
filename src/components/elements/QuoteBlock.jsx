function QuoteBlock({
    children,
    cite,
    className,
    ...props
}) {
    return (
        <blockquote 
        className={`quoteblock ${className}`} 
        {...props}
        >
            {children}
            {cite && <cite className="quote_cite">- {cite}</cite>}
        </blockquote>
    )
}

export default QuoteBlock;