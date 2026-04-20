import React from 'react';

function Heading({level = "h1", className='', children, ...props}) {
    const Tag = level;
    return <Tag className={`heading--${level} ${className}`} {...props}>
        {children}
    </Tag>
}

export default Heading