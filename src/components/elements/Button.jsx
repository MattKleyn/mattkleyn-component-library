function Button({
    as: Tag='button', 
    type, 
    href,
    to,
    onClick,
    disabled,
    className='', 
    children, 
    ...props
}) {
    {/*Supports <button>, <a>, and <RouterLink>, you will need to import RouterLink if you use it.*/}
    const isButton = Tag === "button";
    const isLink = Tag === "a";

    return (
        <Tag 
        {...(isButton && { type: type || "button"})}
        {...(isLink && href && { href})}
        {...(!isButton && to && { to })}
        onClick={onClick}
        disabled={isButton ? disabled : undefined}
        aria-disabled={!isButton && disabled ? true : undefined}
        tabIndex={!isButton && disabled ? -1 : undefined}
        className={`button ${className}`}
        {...props}
        >
            {children}
        </Tag>
    )
}

export default Button;