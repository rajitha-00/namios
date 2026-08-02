import Image from "next/image";
import type { ProductFrameProps } from "../interfaces";

export type IconName = "grid" | "calendar" | "guest" | "bed" | "spark" | "card" | "police" | "upload" | "hub" | "settings";

interface ProductIconProps {
  name: IconName;
}

export const ProductIcon = ({ name }: ProductIconProps) => {
  const iconPaths: Record<IconName, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.4" /><rect x="14" y="3" width="7" height="7" rx="1.4" /><rect x="3" y="14" width="7" height="7" rx="1.4" /><rect x="14" y="14" width="7" height="7" rx="1.4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    guest: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
    bed: <><path d="M3 7v14M21 21v-8a2 2 0 0 0-2-2H3M7 11V7h5a2 2 0 0 1 2 2v2M3 17h18" /></>,
    spark: <><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3Z" /><path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14Z" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 10h18M7 15h3" /></>,
    police: <><path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></>,
    upload: <><path d="M12 16V3m0 0L7 8m5-5 5 5" /><path d="M5 13H3v8h18v-8h-2" /></>,
    hub: <><circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="20" cy="19" r="2" /><path d="m6 6.5 4 3.5m8-3.5-4 3.5m-8 7.5 4-3.5m8 3.5-4-3.5" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{iconPaths[name]}</svg>;
};

const navigation: Array<[IconName, string]> = [
  ["grid", "Dashboard"],
  ["calendar", "Bookings"],
  ["guest", "Guests"],
  ["bed", "Rooms"],
  ["spark", "Housekeeping"],
  ["card", "Payments"],
  ["police", "Tourist Police"],
  ["upload", "OTA Import"],
  ["hub", "Channel Manager"],
  ["settings", "Settings"]
];

export const ProductFrame = ({ activeNav, children }: ProductFrameProps) => (
  <div className="art-product-frame actual-shell">
    <div className="art-browser-bar" aria-hidden="true">
      <div className="art-browser-dots"><i /><i /><i /></div>
      <span><i /> app.namios.com/stay</span>
      <strong>LIVE DEMO</strong>
    </div>
    <div className="art-app-shell">
      <header className="actual-app-header">
        <div className="actual-brand">
          <span><Image src="/product/stay/nami-mark.svg" alt="" width={28} height={28} /></span>
          <div><strong>Nami Stay</strong><small>PROPERTY MANAGEMENT</small></div>
        </div>
        <div className="actual-breadcrumb"><span>OPERATIONS</span><i>/</i><b>{activeNav}</b></div>
        <div className="actual-header-actions"><button type="button">♢<i /></button><button type="button">文</button><span>NS</span></div>
      </header>
      <aside className="art-app-nav actual-app-nav">
        <nav aria-label="Stay OS mockup navigation">
          {navigation.map(([icon, label]) => (
            <span className={activeNav === label ? "active" : ""} key={label}>
              <ProductIcon name={icon} /><b>{label}</b>
            </span>
          ))}
        </nav>
        <button type="button" className="actual-new-reservation"><b>⊕</b> New Reservation</button>
      </aside>
      <div className="art-app-workspace actual-workspace">
        {children}
      </div>
    </div>
  </div>
);
