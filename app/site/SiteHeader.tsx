"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
  BadgeDollarSign,
  Boxes,
  Building2,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Menu,
  MessageCircle,
  Sparkles,
  Tag,
  X
} from "lucide-react";
import { ProductMegaMenu } from "./components";
import { primaryNavigationItems, productNavigationItems } from "./constants";

const primaryNavigationIcons = {
  "/pricing": BadgeDollarSign,
  "/benefits": Sparkles,
  "/offers": Tag,
  "/qa": CircleHelp,
  "/about": Building2
} as const;

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
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches) return;
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
    setProductMenuOpen(true);
  }, []);

  const scheduleCloseProductMenu = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches) return;
    closeDropdownTimeout.current = setTimeout(() => {
      setProductMenuOpen(false);
    }, 90);
  }, []);

  const isActiveRoute = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

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

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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
          data-open={menuOpen}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu className="menu-toggle-icon menu-toggle-open" aria-hidden="true" />
          <X className="menu-toggle-icon menu-toggle-close" aria-hidden="true" />
        </button>

        <div id="site-navigation" className="nav-panel" data-open={menuOpen}>
          <div className="navlinks platform-navlinks">
            <span className="mobile-nav-section-label">Platform</span>
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
                onClick={() => setProductMenuOpen((open) => !open)}
              >
                <span className="mobile-nav-label">
                  <span className="mobile-nav-icon-wrap">
                    <Boxes className="mobile-nav-icon" aria-hidden="true" />
                  </span>
                  <span>Products</span>
                </span>
                {/* Clean indicator dot — no rotation */}
                <span className="nav-trigger-dot" aria-hidden="true" />
                <ChevronDown className="mobile-nav-chevron product-chevron" aria-hidden="true" />
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

            {primaryNavigationItems.map(([label, href], index) => {
              const NavigationIcon = primaryNavigationIcons[href];

              return (
                <Fragment key={href}>
                  {index === 3 ? (
                    <span className="mobile-nav-section-label">Company</span>
                  ) : null}
                  <Link
                    className={isActiveRoute(href) ? "active" : ""}
                    href={href}
                    aria-current={isActiveRoute(href) ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    <span className="mobile-nav-label">
                      <span className="mobile-nav-icon-wrap">
                        <NavigationIcon className="mobile-nav-icon" aria-hidden="true" />
                      </span>
                      <span>{label}</span>
                    </span>
                    <ChevronRight className="mobile-nav-chevron" aria-hidden="true" />
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="actions">
            <span className="mobile-nav-section-label">Resources</span>
            <Link className="nav-proof" href="/contact" onClick={closeMenus}>
              <span className="mobile-nav-label">
                <span className="mobile-nav-icon-wrap">
                  <MessageCircle className="mobile-nav-icon" aria-hidden="true" />
                </span>
                <span>Contact</span>
              </span>
              <ChevronRight className="mobile-nav-chevron" aria-hidden="true" />
            </Link>
            <Link className="button nav-cta" href="/offers" onClick={closeMenus}>
              <CalendarCheck className="mobile-action-icon" aria-hidden="true" />
              <span>Book a demo</span>
              <ChevronRight className="mobile-action-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
