import Link from "next/link";
import type { ProductNavigationItem } from "../constants";

interface ProductMegaMenuProps {
  activePath: string;
  items: ProductNavigationItem[];
  onNavigate: () => void;
}

export const ProductMegaMenu = ({ activePath, items, onNavigate }: ProductMegaMenuProps) => {
  return (
    <div className="product-mega-menu" aria-label="NamiOS applications">
      <div className="product-mega-heading">
        <div>
          <span>NamiOS applications</span>
          <strong>One platform. Purpose-built workspaces.</strong>
        </div>
        <Link href="/products" onClick={onNavigate}>Explore Nami Stay <span aria-hidden="true">→</span></Link>
      </div>
      <div className="product-mega-grid">
        {items.map((item) => {
          const active = item.href === "/products"
            ? activePath === item.href
            : activePath.startsWith(item.href);

          return (
            <Link
              className={`product-mega-item ${active ? "active" : ""}`}
              href={item.href}
              key={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
            >
              <span className={`product-app-mark ${item.accent}`}>{item.shortMark}</span>
              <span className="product-mega-copy">
                <span className="product-mega-name">
                  <strong>{item.name}</strong>
                  <small data-status={item.status === "Live" ? "live" : "soon"}>{item.status}</small>
                </span>
                <span>{item.description}</span>
              </span>
              <span className="product-mega-arrow" aria-hidden="true">↗</span>
            </Link>
          );
        })}
      </div>
      <div className="product-mega-footer">
        <span><i /> Nami Stay is available now</span>
        <span>Upcoming applications are being developed with Sri Lankan hospitality teams.</span>
      </div>
    </div>
  );
};
