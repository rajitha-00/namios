import { ActualPageHeader } from "./ActualUi";
import { ProductFrame } from "./ProductFrame";

const floors = [
  { name: "Floor 04 · Ocean", rooms: [["401", "Occupied"], ["402", "Ready"], ["403", "Cleaning"], ["404", "Ready"]] },
  { name: "Floor 03 · Courtyard", rooms: [["301", "Occupied"], ["302", "Ready"], ["303", "Inspect"], ["304", "Arriving"]] },
  { name: "Floor 02 · Garden", rooms: [["201", "Ready"], ["202", "Occupied"], ["203", "Ready"], ["204", "Maintenance"]] }
];

export const RoomsScene = () => (
  <div className="art-scene actual-scene rooms-scene">
    <ProductFrame activeNav="Rooms">
      <div className="art-screen actual-screen rooms-screen">
        <ActualPageHeader title="Rooms & Inventory" subtitle="Manage room layout, categories, pricing, and availability." primaryAction="＋ Add Room" secondaryActions={["Manage Categories", "Manage Floors"]} />
        <div className="actual-view-tabs"><b>Floor Plan</b><span>Room List <i>42</i></span><span>Categories</span></div>
        <div className="room-summary-strip"><div><strong>42</strong><span>Total rooms</span></div><div><strong>33</strong><span>Occupied</span></div><div><strong>06</strong><span>Available</span></div><div><strong>03</strong><span>Needs attention</span></div><b>78% OCCUPANCY</b></div>
        <div className="actual-floor-plan">
          {floors.map((floor) => <section key={floor.name}><header><strong>{floor.name}</strong><span>{floor.rooms.length} rooms</span></header><div>{floor.rooms.map(([room, status]) => <article className={status.toLowerCase()} key={room}><div><strong>{room}</strong><span>{status}</span></div><p>{Number(room) % 2 ? "Ocean Suite" : "Courtyard King"}</p><footer><span>LKR {Number(room) % 2 ? "48,500" : "32,000"}</span><b>2 guests</b></footer></article>)}</div></section>)}
        </div>
      </div>
    </ProductFrame>
    <div className="art-float rooms-float-rate"><span className="art-float-icon">↗</span><div><small>RATE OPPORTUNITY</small><strong>Ocean Suites +14%</strong><p>Weekend demand is rising</p></div></div>
    <div className="art-float rooms-float-ready"><span className="art-float-icon success">✓</span><div><small>ROOM 304</small><strong>Ready for arrival</strong><p>Inspection completed · 4m ago</p></div></div>
    <div className="actual-highlight rooms-highlight"><span>Live inventory</span></div>
  </div>
);
