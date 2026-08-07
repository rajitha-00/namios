"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProductMegaMenu } from "./components";
import { primaryNavigationItems, productNavigationItems } from "./constants";

export const SiteHeader = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  // Hover-bridge: timeout ref prevents menu flickering on cursor movement between trigger and panel
  const closeDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    setProductMenuOpen(false);
  }, []);

  const openProductMenu = useCallback(() => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
    setProductMenuOpen(true);
  }, []);

  const scheduleCloseProductMenu = useCallback(() => {
    closeDropdownTimeout.current = setTimeout(() => {
      setProductMenuOpen(false);
    }, 90);
  }, []);

  const isActiveRoute = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  // Determine if current route has a dark photographic hero section at the top
  const isDarkHeroPage =
    ["/", "/products", "/pricing", "/benefits", "/qa", "/about", "/contact", "/offers"].includes(
      pathname
    ) || pathname.startsWith("/products/");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const heroThreshold = Math.max(window.innerHeight * 0.6, 400);
      setPastHero(scrollY > heroThreshold);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenus();
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) closeMenus();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      if (closeDropdownTimeout.current) clearTimeout(closeDropdownTimeout.current);
    };
  }, [closeMenus]);

  return (
    <header
      className="topbar platform-topbar"
      data-scrolled={scrolled}
      data-hero-past={pastHero}
      data-menu-open={menuOpen}
      ref={headerRef}
    >
      <nav className="container nav site-nav platform-nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NamiOS home" onClick={closeMenus}>
          <span className="brand-symbol">
            <Image src="/brand/nami-mark.svg" alt="" width={40} height={40} priority />
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
            {/* Product dropdown with hover-bridge delay */}
            <div
              className="product-nav-switcher"
              data-open={productMenuOpen}
              onMouseEnter={openProductMenu}
              onMouseLeave={scheduleCloseProductMenu}
              onFocus={openProductMenu}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) scheduleCloseProductMenu();
              }}
            >
              <button
                className={`nav-product-trigger ${pathname.startsWith("/products") ? "active" : ""}`}
                type="button"
                aria-expanded={productMenuOpen}
                aria-controls="product-mega-menu"
                onClick={() => {
                  const isMobile = window.matchMedia("(max-width: 820px)").matches;
                  setProductMenuOpen((open) => (isMobile ? !open : true));
                }}
              >
                Products
                {/* Clean indicator dot — no rotation */}
                <span className="nav-trigger-dot" aria-hidden="true" />
              </button>
              {/* The positioner also listens for hover to prevent closing when cursor moves into the panel */}
              <div
                id="product-mega-menu"
                className="product-mega-positioner"
                data-open={productMenuOpen}
                onMouseEnter={openProductMenu}
                onMouseLeave={scheduleCloseProductMenu}
              >
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
