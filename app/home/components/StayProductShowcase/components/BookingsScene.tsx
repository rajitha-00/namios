import { ProductFrame } from "./ProductFrame";

const dates = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
const bookingRows = [
  ["412", "Fort View", "Wei Müller", 1, 4, "confirmed"],
  ["408", "Fort View", "Sofia Rossi", 5, 3, "direct"],
  ["405", "Courtyard King", "Noah Williams", 2, 5, "confirmed"],
  ["304", "Ocean Suite", "Amara Silva", 1, 3, "vip"],
  ["302", "Ocean Suite", "Mei Tan", 7, 4, "direct"],
  ["208", "Courtyard King", "Liam Carter", 4, 4, "confirmed"]
] as const;

export const BookingsScene = () => (
  <div className="art-scene actual-scene art-bookings-scene">
    <ProductFrame activeNav="Bookings">
      <div className="art-screen actual-screen art-bookings">
        <div className="art-booking-heading"><div><span>RESERVATION CALENDAR</span><h4>August 2026</h4></div><div className="art-booking-actions"><span>‹</span><button type="button">Today</button><span>›</span><button type="button" className="primary">＋ Add stay</button></div></div>
        <div className="art-booking-toolbar"><div className="art-search">⌕ <span>Search guest or booking</span></div><div className="art-filter active"><i /> All stays <b>35</b></div><div className="art-filter"><i /> Direct <b>12</b></div><div className="art-filter"><i /> OTA <b>18</b></div><span className="art-sync">● Channels synced 2m ago</span></div>
        <div className="art-calendar-board">
          <div className="art-calendar-head"><strong>ROOM</strong>{dates.map((date, index) => <span className={index === 0 ? "today" : ""} key={date}><small>{index === 0 ? "SUN" : ["MON", "TUE", "WED", "THU", "FRI", "SAT"][index % 7]}</small><b>{date}</b></span>)}</div>
          {bookingRows.map(([room, type, guest, start, length, status]) => (
            <div className="art-calendar-row" key={room}>
              <strong>{room}<small>{type}</small></strong>
              <div className="art-calendar-cells">{dates.map((date) => <i key={date} />)}<span className={status} style={{ "--booking-start": start, "--booking-length": length } as React.CSSProperties}><b>{guest}</b><small>{status === "direct" ? "Direct · Paid" : status === "vip" ? "VIP · Returning" : "Confirmed"}</small></span></div>
            </div>
          ))}
        </div>
        <div className="art-calendar-footer"><span><i className="direct" /> Direct</span><span><i className="confirmed" /> Confirmed</span><span><i className="vip" /> VIP</span><strong>78% OCCUPIED · 9 ROOMS AVAILABLE</strong></div>
      </div>
    </ProductFrame>
    <div className="art-float art-float-deposit"><span className="art-float-icon success">✓</span><div><small>DEPOSIT PROTECTED</small><strong>LKR 52,500 received</strong><p>Amara Silva · Ocean Suite</p></div></div>
    <div className="art-float art-float-gap"><small>SMART OPPORTUNITY</small><strong>2-night sellable gap</strong><p>Room 408 · 9–11 Aug</p><button type="button">Create offer →</button></div>
    <div className="art-focus-ring" aria-hidden="true"><span>Revenue opportunity</span></div>
  </div>
);
