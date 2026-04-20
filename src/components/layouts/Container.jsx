import React from 'react';

function Container({
    as: Tag='div', 
    direction='row', 
    gap='md', 
    maxWidth='full', 
    className='', 
    children, 
    ...props
}) {
    return (
        <Tag className={`
            container 
            flex-${direction} 
            gap-${gap} 
            max-width-${maxWidth} 
            ${className}
            `} 
            {...props}
            >
                {children}
        </Tag>
    );
}

export default Container;