import React from 'react';

function Paragraph({level="md", className="", children, ...props}) {
    return <p className={`paragraph paragraph--${level} ${className}`} {...props}>
        {children}
    </p>
}

export default Paragraph;