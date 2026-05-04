import React from 'react';

/**
 * GridItem
 *
 * A grid child primitive designed to work with GridContainer.
 * 
 * GridItem exposes its placement values (`col`, `row`, `area`) as CSS variables,
 * allowing consuming applications to override them responsively without fighting
 * inline style specificity.
 *
 * @component
 *
 * @param {object} props
 * @param {React.ElementType} [props.as="div"] - The HTML tag or React component to render.
 * @param {string} [props.col] - Grid column placement. Assigned to `--grid-col`.
 * @param {string} [props.row] - Grid row placement. Assigned to `--grid-row`.
 * @param {string} [props.area] - Grid area placement. Assigned to `--grid-area`.
 * @param {string} [props.className] - Additional class names for styling overrides.
 * @param {React.ReactNode} props.children - Child elements to render inside the grid item.
 * @param {object} [props.props] - Additional props forwarded to the underlying element.
 *
 * @example
 * <GridItem col="1 / span 4" row="2" className="hero_image_wrapper"/>
 *
 * @example
 * // Responsive override in consuming app
 * .hero-image_wrapper {
 *   --grid-col: 1 / span 6;
 * }
 *
 * @media (max-width: 800px) {
 *   .hero-image_wrapper {
 *     --grid-col: 1 / span 12;
 *   }
 * }
 */

function GridItem({
  as: Tag='div', 
  col, 
  row, 
  area, 
  className="", 
  children, 
  ...props 
}) {
  return (
    <Tag
      className={`grid-item ${className}`}
      style={{
        "--grid-col": col,
        "--grid-row": row,
        "--grid-area": area,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}


export default GridItem;