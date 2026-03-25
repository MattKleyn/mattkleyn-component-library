function ImageWrapper({
    className='',
    children,
    ...props
}) {
    return (
        <div className={`image_wrapper ${className}`}
        {...props}
        >
            {children}
        </div>
    )
}

export default ImageWrapper;