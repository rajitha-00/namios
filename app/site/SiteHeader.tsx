"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ProductMegaMenu } from "./components";
import { primaryNavigationItems, productNavigationItems } from "./constants";

export const SiteHeader = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductMenuOpen(false);
  };
  const isActiveRoute = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <header className="topbar platform-topbar" data-scrolled={scrolled} ref={headerRef}>
      <nav className="container nav site-nav platform-nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NamiOS home" onClick={closeMenus}>
          <span className="brand-symbol">
            <Image src="/brand/nami-mark.svg" alt="" width={60} height={59} priority />
          </span>
          <span className="brand-word">NamiOS</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>

        <div id="site-navigation" className="nav-panel" data-open={menuOpen}>
          <div className="navlinks platform-navlinks">
            <div
              className="product-nav-switcher"
              data-open={productMenuOpen}
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
              onFocus={() => setProductMenuOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setProductMenuOpen(false);
              }}
            >
              <button
                className={`nav-product-trigger ${pathname.startsWith("/products") ? "active" : ""}`}
                type="button"
                aria-expanded={productMenuOpen}
                aria-controls="product-mega-menu"
                onClick={() => {
                  const mobileNavigation = window.matchMedia("(max-width: 820px)").matches;
                  setProductMenuOpen((open) => mobileNavigation ? !open : true);
                }}
              >
                Products
                <span aria-hidden="true">⌄</span>
              </button>
              <div id="product-mega-menu" className="product-mega-positioner" data-open={productMenuOpen}>
                <ProductMegaMenu
                  activePath={pathname}
                  items={productNavigationItems}
                  onNavigate={closeMenus}
                />
              </div>
            </div>

            {primaryNavigationItems.map(([label, href]) => (
              <Link
                className={isActiveRoute(href) ? "active" : ""}
                href={href}
                key={href}
                aria-current={isActiveRoute(href) ? "page" : undefined}
                onClick={closeMenus}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="actions">
            <Link className="nav-proof" href="/contact" onClick={closeMenus}>Contact</Link>
            <Link className="button nav-cta" href="/offers" onClick={closeMenus}>Book a demo</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
