function GridItem({as: Tag='div', col='auto', row='auto', area, className="", children, ...props }) {
  return (
    <Tag
      className={`grid-item ${className}`}
      style={{
        gridColumn: col,
        gridRow: row,
        gridArea: area,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default GridItem;