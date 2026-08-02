import { ActualPageHeader, ActualTable } from "./ActualUi";
import { ProductFrame } from "./ProductFrame";

const policeRows = [
  ["BK-10842", "Amara Silva", "Sri Lankan", "N4821907", "02–05 Aug", "Synced"],
  ["BK-10839", "Mei Tan", "Singaporean", "E9031844", "02–06 Aug", "Synced"],
  ["BK-10835", "Noah Williams", "British", "575190223", "02–04 Aug", "Pending"],
  ["BK-10831", "Sofia Rossi", "Italian", "YA4912031", "01–05 Aug", "Synced"]
];

export const TouristPoliceScene = () => (
  <div className="art-scene actual-scene police-scene">
    <ProductFrame activeNav="Tourist Police">
      <div className="art-screen actual-screen police-screen">
        <ActualPageHeader title="Stay – Tourist Police" subtitle="Guest reporting and cloud spreadsheet sync manager." primaryAction="Sync Now" secondaryActions={["Export CSV", "Settings"]} />
        <section className="police-sync-card"><div className="police-sync-icon">✓</div><div><span>SYNC CENTRE</span><strong>Microsoft 365 connected</strong><p>Last successful sync today at 11:42 AM</p></div><div><strong>24</strong><span>Records this month</span></div><div><strong>22</strong><span>Synced</span></div><div><strong>02</strong><span>Pending</span></div><b>Healthy</b></section>
        <div className="actual-filter-bar"><span>⌕ Search guest, passport / ID, or booking ref…</span><button type="button">All sync statuses⌄</button></div>
        <section className="police-table-card"><header><div><strong>Guest reporting records</strong><span>August 2026</span></div><b>4 of 24 records</b></header><ActualTable headers={["Booking", "Guest", "Nationality", "Passport / ID", "Stay", "Sync Status"]} rows={policeRows} statusColumn={5} /></section>
        <div className="police-audit"><span>● Audit trail enabled</span><span>All changes timestamped</span><span>Automatic retry active</span></div>
      </div>
    </ProductFrame>
    <div className="art-float police-float-sync"><span className="art-float-icon success">✓</span><div><small>SYNC COMPLETE</small><strong>22 guest records updated</strong><p>Microsoft 365 · 11:42 AM</p></div></div>
    <div className="art-float police-float-ready"><span>02</span><div><small>READY TO REPORT</small><strong>New arrivals validated</strong><p>No missing passport fields</p></div></div>
    <div className="actual-highlight police-highlight"><span>One-click compliance</span></div>
  </div>
);
