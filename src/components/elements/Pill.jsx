import React from 'react';

function Pill({
    as: Tag="p",
    children,
    className,
    ...props
}) {
    return (
        <Tag className={`pill ${className}`} {...props}>
            {children}
        </Tag>
    )
}

export default Pill;