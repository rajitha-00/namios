import { ProductFrame, ProductIcon } from "./ProductFrame";

const arrivals = [
  ["10:30", "Amara Silva", "Ocean Suite · 304", "Ready"],
  ["12:15", "Noah Williams", "Courtyard King · 208", "Due in"],
  ["14:00", "Mei Tan", "Fort View · 412", "Deposit paid"]
];

export const DashboardScene = () => (
  <div className="art-scene actual-scene art-dashboard-scene">
    <ProductFrame activeNav="Dashboard">
      <div className="art-screen actual-screen art-dashboard">
        <div className="art-page-heading">
          <div><span>Sunday, 2 August</span><h4>Good morning, Kings.</h4><p>The property is moving smoothly. Two items need attention.</p></div>
          <button type="button"><b>＋</b> New reservation</button>
        </div>

        <div className="art-kpi-grid">
          {[
            ["bed", "Occupancy", "78%", "+6.2% vs last week", "teal"],
            ["calendar", "Arrivals", "12", "8 rooms already ready", "blue"],
            ["spark", "Turnovers", "07", "3 being cleaned", "amber"],
            ["card", "Today’s revenue", "LKR 684K", "+12.4% vs forecast", "violet"]
          ].map(([icon, label, value, note, tone]) => (
            <article className={`art-kpi ${tone}`} key={label}>
              <div><span><ProductIcon name={icon as "bed" | "calendar" | "spark" | "card"} /></span><small>{label}</small></div>
              <strong>{value}</strong><p>{note}</p>
            </article>
          ))}
        </div>

        <div className="art-dashboard-main">
          <article className="art-revenue-panel">
            <div className="art-panel-head"><div><span>REVENUE PULSE</span><strong>LKR 8.42M</strong><small>August forecast</small></div><b>30 days⌄</b></div>
            <div className="art-chart-legend"><span><i /> Actual</span><span><i /> Forecast</span></div>
            <div className="art-revenue-chart">
              <div className="art-chart-grid"><i /><i /><i /><i /></div>
              <svg viewBox="0 0 600 190" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2aa6a1" stopOpacity=".28" /><stop offset="1" stopColor="#2aa6a1" stopOpacity="0" /></linearGradient></defs>
                <path className="area" d="M0 168 C55 158 88 142 126 148 S200 124 244 132 S316 98 358 104 S432 69 477 79 S548 40 600 30 L600 190 L0 190Z" />
                <path className="line" d="M0 168 C55 158 88 142 126 148 S200 124 244 132 S316 98 358 104 S432 69 477 79 S548 40 600 30" />
                <path className="forecast" d="M358 104 C420 84 480 62 600 18" />
                <circle cx="477" cy="79" r="5" />
              </svg>
              <div className="art-chart-tip"><small>AUG 02</small><strong>LKR 684,250</strong><span>↑ 12.4%</span></div>
              <div className="art-chart-days"><span>Jul 05</span><span>Jul 12</span><span>Jul 19</span><span>Jul 26</span><span>Aug 02</span></div>
            </div>
          </article>

          <article className="art-arrivals-panel">
            <div className="art-panel-head"><div><span>NEXT ARRIVALS</span><strong>12 today</strong></div><b>View all →</b></div>
            <div className="art-arrival-list">
              {arrivals.map(([time, name, room, status], index) => (
                <div key={name}><time>{time}</time><i>{name.split(" ").map((part) => part[0]).join("")}</i><span><strong>{name}</strong><small>{room}</small></span><b className={`status-${index}`}>{status}</b></div>
              ))}
            </div>
            <div className="art-readiness"><div><span>Room readiness</span><strong>34 / 42</strong></div><i><b /></i><small>81% of rooms guest-ready</small></div>
          </article>
        </div>
      </div>
    </ProductFrame>
    <div className="art-float art-float-revenue"><span className="art-float-icon">↗</span><div><small>REVENUE SIGNAL</small><strong>12.4% ahead</strong><p>Direct bookings are driving the lift</p></div></div>
    <div className="art-float art-float-room"><span className="art-float-icon success">✓</span><div><small>ROOM 304</small><strong>Guest-ready</strong><p>Front desk notified · 6m ago</p></div></div>
    <div className="art-float art-float-booking"><div><small>NEW DIRECT BOOKING</small><strong>LKR 96,000</strong><p>Deposit secured automatically</p></div><span>+1</span></div>
  </div>
);
