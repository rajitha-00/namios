import { ActualPageHeader, ActualTable } from "./ActualUi";
import { ProductFrame } from "./ProductFrame";

const historyRows = [
  ["02 Aug · 09:14", "Booking.com", "arrivals_aug_02.csv", "18", "17", "1", "Completed"],
  ["01 Aug · 18:40", "Agoda", "agoda_august.csv", "12", "12", "0", "Completed"],
  ["31 Jul · 14:08", "Airbnb", "airbnb_export.csv", "7", "7", "0", "Completed"]
];

export const OtaImportScene = () => (
  <div className="art-scene actual-scene ota-scene">
    <ProductFrame activeNav="OTA Import">
      <div className="art-screen actual-screen ota-screen">
        <ActualPageHeader title="Stay – OTA Import" subtitle="Upload reservation CSV reports from booking channels and partner applications." />
        <div className="ota-channel-row">{[["B", "Booking.com", "selected"], ["A", "Agoda", ""], ["a", "Airbnb", ""], ["E", "Expedia", ""], ["+", "Other CSV", ""]].map(([icon,label,state]) => <button type="button" className={state} key={label}><i>{icon}</i><span>{label}</span>{state && <b>Selected</b>}</button>)}</div>
        <section className="ota-upload-card"><div className="ota-drop-icon">⇧</div><div><strong>Drop your Booking.com CSV here</strong><p>or choose a file from your computer · maximum 10 MB</p></div><button type="button">Choose CSV file</button><small>✓ Headers validated automatically &nbsp; · &nbsp; ✓ Duplicate bookings detected</small></section>
        <section className="ota-preview"><header><div><span>IMPORT PREVIEW</span><strong>18 reservations found</strong></div><b>17 ready · 1 duplicate</b></header><div className="ota-preview-stats"><div><span>New bookings</span><strong>14</strong></div><div><span>Updates</span><strong>03</strong></div><div><span>Duplicate</span><strong>01</strong></div><div><span>Room nights</span><strong>47</strong></div><button type="button">Import 17 bookings →</button></div></section>
        <section className="ota-history"><header><strong>Import execution history</strong><span>⌕ Search history</span></header><ActualTable headers={["Date", "Source", "File", "Rows", "Imported", "Skipped", "Status"]} rows={historyRows} statusColumn={6} /></section>
      </div>
    </ProductFrame>
    <div className="art-float ota-float-validation"><span className="art-float-icon success">✓</span><div><small>SMART VALIDATION</small><strong>17 bookings ready</strong><p>1 duplicate protected automatically</p></div></div>
    <div className="art-float ota-float-value"><span>47</span><div><small>ROOM NIGHTS FOUND</small><strong>LKR 1.84M value</strong><p>Across 18 reservations</p></div></div>
  </div>
);
