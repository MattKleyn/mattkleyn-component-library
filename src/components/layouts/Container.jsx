function Container({as: Tag='div', direction='row', gap='md', align='stretch', justify='start', maxWidth='full', className='', children, ...props}) {
    return (
        <Tag className={`container flex-${direction} gap-${gap} align-${align} justify-${justify} max-width-${maxWidth} ${className}`} {...props}>{children}</Tag>
    );
}

export default Container;