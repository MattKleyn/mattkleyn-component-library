function NavBar({
    direction,
    gap,
    dock='none',
    padding='md',
    maxWidth='full',
    children, 
    className='',
    ...props
}) {
    return (
        <div 
        className={`
            nav-bar 
            nav-bar--dock-${dock} 
            flex-${direction}
            gap-${gap}
            pad-${padding} 
            max-width-${maxWidth} 
            ${className}`}
        {...props}>
            {children}
        </div>
    )
}

export default NavBar;