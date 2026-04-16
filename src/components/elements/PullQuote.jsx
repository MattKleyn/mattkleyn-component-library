function PullQuote({
    children,
    className,
    ...props
}) {
    return (
        <blockquote 
        className={`pullquote ${className}`}
        {...props}
        >
            <p>{children}</p>
        </blockquote>
    )
}

export default PullQuote;