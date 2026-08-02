import { ProductFrame } from "./ProductFrame";

const rooms = [
  ["201", "Ready", "ready"], ["202", "Cleaning", "cleaning"], ["203", "Occupied", "occupied"], ["204", "Inspect", "inspect"],
  ["301", "Ready", "ready"], ["302", "Cleaning", "cleaning"], ["303", "Occupied", "occupied"], ["304", "Priority", "priority"],
  ["401", "Ready", "ready"], ["402", "Maintenance", "maintenance"], ["403", "Cleaning", "cleaning"], ["404", "Ready", "ready"]
] as const;

export const HousekeepingScene = () => (
  <div className="art-scene actual-scene art-housekeeping-scene">
    <ProductFrame activeNav="Housekeeping">
      <div className="art-screen actual-screen art-housekeeping">
        <div className="art-housekeeping-heading"><div><span>LIVE FLOOR BOARD</span><h4>Housekeeping</h4><p>Sunday, 2 August · Morning shift</p></div><div><button type="button">Filter floors⌄</button><button type="button" className="primary">＋ Assign rooms</button></div></div>
        <div className="art-housekeeping-stats"><div><span>42</span><small>Total rooms</small></div><div><span>18</span><small>Guest-ready</small></div><div><span>07</span><small>Turnovers</small></div><div><span>03</span><small>In progress</small></div><div><span>01</span><small>Maintenance</small></div></div>
        <div className="art-housekeeping-grid">
          <div className="art-room-board"><div className="art-room-board-head"><strong>Floor 02–04</strong><span><i /> Live updates</span></div><div className="art-room-cards">{rooms.map(([room, status, tone], index) => <article className={tone} key={room}><header><strong>{room}</strong><span>{status}</span></header><p>{index % 3 === 0 ? "Ocean Suite" : index % 2 === 0 ? "Fort View" : "Courtyard King"}</p><footer>{tone === "cleaning" ? <><i>ND</i><span>Nadeesha · {12 + index}m</span></> : tone === "priority" ? <><b>!</b><span>Arrival 10:30 AM</span></> : tone === "maintenance" ? <><b>↗</b><span>AC inspection</span></> : <><i>✓</i><span>{tone === "ready" ? "Inspected" : "In-house"}</span></>}</footer></article>)}</div></div>
          <aside className="art-team-panel"><header><span>TEAM FLOW</span><strong>6 on shift</strong></header><div className="art-team-score"><div><strong>92%</strong><span>On-time readiness</span></div><i><b /></i><small>↑ 8% from last Sunday</small></div><div className="art-team-list">{[["ND", "Nadeesha", "4 / 6 rooms"], ["KM", "Kamal", "5 / 5 rooms"], ["SI", "Simran", "3 / 5 rooms"]].map(([initials, name, work], index) => <div key={name}><i>{initials}</i><span><strong>{name}</strong><small>{work}</small></span><b style={{ "--team-progress": `${[67, 100, 60][index]}%` } as React.CSSProperties}><i /></b></div>)}</div><button type="button">View team workload →</button></aside>
        </div>
      </div>
    </ProductFrame>
    <div className="art-float art-float-inspection"><span className="art-float-icon success">✓</span><div><small>ROOM 204</small><strong>Inspection passed</strong><p>Front desk notified instantly</p></div></div>
    <div className="art-float art-float-priority"><span>10:30</span><div><small>PRIORITY TURNOVER</small><strong>Room 304 · Amara Silva</strong><p>Nadeesha assigned · 24m left</p></div></div>
  </div>
);
