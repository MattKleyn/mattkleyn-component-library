import React from 'react';

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