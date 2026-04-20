import React from 'react';

function BackgroundOverlay({
    overlayColor='',
    className='', 
    children,
    ...props
}) {
    return (
        <div className={`
        background_overlay 
        ${className}`
        }
        style={{
            backgroundColor: overlayColor,
        }}
        {...props}
        >
            {children}
        </div>
    )
}

export default BackgroundOverlay;