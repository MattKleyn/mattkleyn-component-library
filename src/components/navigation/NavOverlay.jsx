import React from 'react';

function NavOverlay({
    padding='md',
    className='', 
    children, 
    ...props
}) {
    return (
        <div 
        className={`nav-overlay pad-${padding} ${className}`} 
        {...props}
        >
            {children}
        </div>
    )
}

export default NavOverlay;