import { ActualPageHeader, ActualTable } from "./ActualUi";
import { ProductFrame } from "./ProductFrame";

const paymentRows = [
  ["PMT-2841", "Amara Silva", "Room 304", "Card", "LKR 93,375", "Paid"],
  ["PMT-2840", "Noah Williams", "Room 208", "Transfer", "LKR 64,000", "Paid"],
  ["PMT-2839", "Mei Tan", "Room 412", "Cash", "LKR 42,500", "Pending"],
  ["PMT-2838", "Sofia Rossi", "Room 408", "Card", "LKR 118,000", "Paid"]
];

export const PaymentsScene = () => (
  <div className="art-scene actual-scene payments-scene">
    <ProductFrame activeNav="Payments">
      <div className="art-screen actual-screen payments-screen">
        <ActualPageHeader title="Revenue & Payments" subtitle="Track property performance and recorded payment activity." secondaryActions={["Export PDF", "Export Excel"]} />
        <div className="payments-kpis">{[["Revenue MTD", "LKR 8.42M", "↑ 12.4%"], ["Occupancy", "78%", "↑ 6.2%"], ["ADR", "LKR 41,280", "↑ 4.8%"], ["RevPAR", "LKR 32,198", "↑ 9.1%"], ["Departures", "08", "Stable"]].map(([label,value,note]) => <article key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}</div>
        <div className="payments-insights-grid"><article className="payments-trend"><header><strong>Revenue trend</strong><span>2026 vs 2025</span></header><div className="payments-chart"><i /><i /><i /><i /><svg viewBox="0 0 560 180" preserveAspectRatio="none"><path className="last-year" d="M0 150 C90 130 120 140 190 105 S300 110 355 78 S470 75 560 45" /><path d="M0 162 C75 145 130 120 190 126 S300 82 355 91 S475 48 560 24" /></svg><div><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div></div></article><article className="payments-source"><header><strong>Revenue by source</strong></header>{[["Direct", 42], ["Booking.com", 31], ["Agoda", 17], ["Walk-in", 10]].map(([source,pct]) => <div key={source}><span>{source}</span><b>{pct}%</b><i><span style={{ width: `${pct}%` }} /></i></div>)}</article></div>
        <section className="payments-log"><header><strong>Recorded payment logs</strong><span>⌕ Search transactions</span></header><ActualTable headers={["Reference", "Guest", "Stay", "Method", "Amount", "Status"]} rows={paymentRows} statusColumn={5} /></section>
      </div>
    </ProductFrame>
    <div className="art-float payments-float-settled"><span className="art-float-icon success">✓</span><div><small>PAYMENT SETTLED</small><strong>LKR 93,375</strong><p>Amara Silva · Visa •••• 4821</p></div></div>
    <div className="art-float payments-float-forecast"><span className="art-float-icon">↗</span><div><small>MONTH FORECAST</small><strong>LKR 10.8M</strong><p>94% confidence · ahead of plan</p></div></div>
  </div>
);
