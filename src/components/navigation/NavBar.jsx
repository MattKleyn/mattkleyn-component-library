function NavBar({
    dock='none',
    padding='md',
    maxWidth='full',
    align='space-between',
    children, 
    className='',
    ...props
}) {
    return (
        <div className={`nav-bar nav-bar--${dock} pad-${padding} max-width-${maxWidth} align-${align} ${className}`}
        {...props}>
            {children}
        </div>
    )
}

export default NavBar;