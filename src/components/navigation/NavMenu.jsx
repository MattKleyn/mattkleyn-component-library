import React from 'react';

function NavMenu({
    direction,
    gap='md',
    padding,
    className,
    children,
     ...props
    }) {
        return (
            <div className={`
            nav-menu 
            flex-${direction} 
            gap-${gap} 
            pad-${padding} 
            ${className}
            `} 
            {...props}
            >
                {children}
            </div>
    )
}

export default NavMenu;