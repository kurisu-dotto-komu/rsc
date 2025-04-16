import React from "react";

// Generic table column definition
export type Column<T> = {
  header: string | React.ReactNode;
  accessor: keyof T | ((item: T) => React.ReactNode);
  align?: "left" | "center" | "right";
};

// Generic table props
export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  className?: string;
  rowClassName?: string;
  headerClassName?: string;
  cellClassName?: string;
  keyExtractor?: (item: T, index: number) => string | number;
};

// Generic table component
export function Table<T>({
  data,
  columns,
  className = "",
  rowClassName = "",
  headerClassName = "",
  cellClassName = "",
  keyExtractor = (_, index) => index,
}: TableProps<T>) {
  return (
    <table className={`table-auto border-collapse ${className}`}>
      <thead>
        <tr className={headerClassName}>
          {columns.map((column, index) => (
            <th key={index} className={`p-2 ${cellClassName} text-${column.align || "left"}`}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={keyExtractor(item, rowIndex)} className={rowClassName}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className={`p-2 ${cellClassName} text-${column.align || "left"}`}>
                {typeof column.accessor === "function"
                  ? column.accessor(item)
                  : (item[column.accessor] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
