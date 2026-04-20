import React from 'react';

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
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridTemplateAreas: areas
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default GridContainer;