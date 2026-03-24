function Section({
    as: Tag = 'section', 
    className='', 
    maxWidth='full', 
    padding='none', 
    children, 
    ...props
}) {
    return (
        <Tag 
        className={`
        section 
        max-width-${maxWidth} 
        pad-${padding} 
        ${className}
        `} {...props}
        >
            {children}
        </Tag>
    );
} 

export default Section;