function GridItem({as: Tag='div', col, row, area, className="", children, ...props }) {
  console.log("col:", col,"row:", row,"area:", area);
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