import React from 'react';

/**
 * GridContainer
 * 
 * A flexible, context‑agnostic grid layout primitive.
 * 
 * This component exposes grid configuration through CSS variables rather than
 * fixed inline styles, allowing consuming applications to override grid behaviour
 * responsively using media queries or theme-level variable overrides.
 *
 * @component
 *
 * @param {object} props
 * @param {React.ElementType} [props.as="div"] - The HTML tag or React component to render.
 * @param {string} [props.columns="repeat(12, 1fr)"] - Grid template columns value. 
 *   Assigned to the CSS variable `--grid-template-columns`.
 * @param {string} [props.rows="auto"] - Grid template rows value. 
 *   Assigned to the CSS variable `--grid-template-rows`.
 * @param {string} [props.areas] - Optional grid-template-areas definition.
 *   Assigned to the CSS variable `--grid-template-areas`.
 * @param {string} [props.gap="lg"] - Spacing token for the gap utility class.
 * @param {string} [props.className] - Additional class names for styling overrides. Recommended to use the GridItem component.
 * @param {React.ReactNode} props.children - Child elements to be rendered inside the grid.
 * @param {object} [props.props] - Additional props forwarded to the underlying element.
 *
 * @example
 * // Basic usage
 * <GridContainer columns="repeat(6, 1fr)" gap="md" className="my_grid">
 *   <GridItem col="1 / span 3" />
 *   <GridItem col="4 / span 3" />
 * </GridContainer>
 *
 * @example
 * // Responsive override in consuming app
 * .my_grid {
 *   --grid-template-columns: repeat(12, 1fr);
 * }
 *
 * @media (max-width: 900px) {
 *   .my_grid {
 *     --grid-template-columns: repeat(6, 1fr);
 *   }
 * }
 */

function GridContainer({
  as: Tag = "div",
  columns = "repeat(12, 1fr)",
  rows= "repeat(auto, 1fr)",
  gap = "lg",
  areas,
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`display-grid gap-${gap} ${className}`}
      style={{
        "--grid-template-columns": columns,
        "--grid-template-rows": rows,
        "--grid-template-areas": areas,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default GridContainer;