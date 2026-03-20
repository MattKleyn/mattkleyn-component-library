function NavMenu({
    direction,
    gap='md',
    padding,
    align,
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
            align-${align} 
            ${className}
            `} 
            {...props}
            >
                {children}
            </div>
    )
}

export default NavMenu;