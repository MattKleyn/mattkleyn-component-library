import React from 'react';

function NavRoot({
    position='static', 
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    className='', 
    children, 
    ...props}) {
    return (
        <nav 
            style={{
                position:position,
                top:offsetTop,
                right:offsetRight,
                bottom:offsetBottom,
                left:offsetLeft,
            }}
            className={`nav_root ${className}`} 
            {...props}>
            {children}
        </nav>
    )
}

export default NavRoot;