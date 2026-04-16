function List({
    as: Tag='ul',
    items = [],
    className,
    ...props
}) {
    return (
        <Tag 
        className={`list ${className}`}
        {...props}
        >
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </Tag>
    )
}

export default List;