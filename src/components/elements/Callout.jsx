import React from 'react';

function Callout({
    variant='default',
    children,
    className,
    ...props
}) {
    return (
        <aside 
        className={`callout callout--${variant} ${className}`}
        {...props}
        >
            {children}
        </aside>
    )
}

export default Callout;