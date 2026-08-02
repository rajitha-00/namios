import { ActualPageHeader } from "./ActualUi";
import { ProductFrame } from "./ProductFrame";

const channels = [
  ["B.", "Booking.com", "Connected", "2-way API", "124 bookings"],
  ["A", "Airbnb", "Connected", "iCal sync", "38 bookings"],
  ["A.", "Agoda", "Configured", "CSV import", "62 bookings"],
  ["E", "Expedia", "Available", "Connect now", "—"]
];

export const ChannelsScene = () => (
  <div className="art-scene actual-scene channels-scene">
    <ProductFrame activeNav="Channel Manager">
      <div className="art-screen actual-screen channels-screen">
        <ActualPageHeader title="Stay – Channel Manager & Integrations" subtitle="Manage Booking.com API, iCal sync, and third-party connections." />
        <section className="channel-health"><div><span>CHANNEL HEALTH</span><strong>All connected channels are healthy</strong><p>Last global sync today at 11:56 AM</p></div><div><strong>3</strong><span>Connected</span></div><div><strong>224</strong><span>Bookings synced</span></div><div><strong>0</strong><span>Conflicts</span></div><button type="button">Sync all channels</button></section>
        <section className="ical-card"><div className="ical-icon">↻</div><div><span>GLOBAL iCAL SYNC</span><strong>Room availability calendars</strong><p>38 active room links · automatic sync every 15 minutes</p></div><b>Last sync 4m ago</b><button type="button">Generate room link</button></section>
        <div className="channel-card-grid">{channels.map(([icon,name,status,method,bookings],index) => <article key={name}><header><i>{icon}</i><b className={`channel-status-${index}`}>{status}</b></header><strong>{name}</strong><p>{method}</p><div><span>{bookings}</span><small>{index < 3 ? "Last sync 4m ago" : "Ready to configure"}</small></div><footer><button type="button">{index < 3 ? "Configure" : "Connect"}</button>{index < 3 && <button type="button">Sync now</button>}</footer></article>)}</div>
        <section className="developer-connector"><div><span>⌘</span><strong>Developer & third-party connector</strong><p>Secure API access for custom websites, payment partners, and property tools.</p></div><button type="button">View API access →</button></section>
      </div>
    </ProductFrame>
    <div className="art-float channels-float-sync"><span className="art-float-icon success">✓</span><div><small>CHANNEL SYNC</small><strong>12 updates applied</strong><p>No availability conflicts</p></div></div>
    <div className="art-float channels-float-booking"><span>＋1</span><div><small>BOOKING.COM</small><strong>New reservation received</strong><p>Fort View · 4 nights · LKR 172K</p></div></div>
  </div>
);
