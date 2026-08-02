interface ActualPageHeaderProps {
  title: string;
  subtitle: string;
  primaryAction?: string;
  secondaryActions?: string[];
}

interface ActualTableProps {
  headers: string[];
  rows: string[][];
  statusColumn?: number;
}

export const ActualPageHeader = ({ title, subtitle, primaryAction, secondaryActions = [] }: ActualPageHeaderProps) => (
  <div className="actual-page-header">
    <div><h4>{title}</h4><p>{subtitle}</p></div>
    <div>{secondaryActions.map((action) => <button type="button" key={action}>{action}</button>)}{primaryAction && <button type="button" className="primary">{primaryAction}</button>}</div>
  </div>
);

export const ActualTable = ({ headers, rows, statusColumn }: ActualTableProps) => (
  <div className="actual-table" style={{ "--actual-columns": headers.length } as CSSProperties}>
    <div className="actual-table-head">{headers.map((header) => <strong key={header}>{header}</strong>)}</div>
    {rows.map((row, rowIndex) => (
      <div className="actual-table-row" key={`${row[0]}-${rowIndex}`}>
        {row.map((cell, cellIndex) => <span className={cellIndex === statusColumn ? `table-status status-${cell.toLowerCase().replaceAll(" ", "-")}` : ""} key={`${cell}-${cellIndex}`}>{cell}</span>)}
      </div>
    ))}
  </div>
);
import type { CSSProperties } from "react";
