import React from 'react';

function NavToggle({
    className='', 
    children, 
    ...props
}) {
    return(
        <button 
        type='button'
        className={`nav_toggle ${className}`} 
        {...props}
        >
            {children}
        </button>
    )
}

export default NavToggle;