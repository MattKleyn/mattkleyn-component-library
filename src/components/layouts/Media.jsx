import React from 'react';

/**
 * Media component
 *
 * A semantic container for images, videos, gifs, and diagrams.
 * Can optionally render as <figure> and include a caption.
 *
 * Props:
 * - as: 'div' | 'figure'
 * - caption?: string
 * - className: string
 * - ...props: any additional props such as id, animations, or prop drilling
 *
 * Usage:
 * <Media as="figure" caption="Architecture diagram">
 *   <Image src="..." alt="..." />
 * </Media>
 */

function Media({
    as: Tag='figure',
    caption='',
    className='',
    children,
    ...props
}) {
    return (
        <Tag 
        className={`media ${className}`}
        {...props}
        >
            {children}
            {caption && (
                <figcaption className='figure_caption'>
                    {caption}
                </figcaption>
            )}
        </Tag>
    )
}

export default Media;