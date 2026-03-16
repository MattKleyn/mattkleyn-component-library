function Heading({level = "h1", children, ...props}) {
    const Tag = level
    return <Tag className={`heading-${level}`} {...props}>
        {children}
    </Tag>
}

export default Heading