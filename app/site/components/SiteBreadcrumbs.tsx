"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { breadcrumbLabels } from "../constants";

export const SiteBreadcrumbs = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const isProductRoot = pathname === "/products";
  const isPhotographicHero = [
    "/products",
    "/pricing",
    "/benefits",
    "/qa",
    "/about",
    "/contact",
    "/offers"
  ].includes(pathname) || pathname.startsWith("/products/");

  return (
    <div className={`breadcrumb-shell ${isPhotographicHero ? "hero-breadcrumb-shell" : ""}`}>
      <nav className="container site-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const label = isProductRoot && isLast
            ? "Nami Stay"
            : breadcrumbLabels[segment] ?? (isLast ? "Page not found" : segment.replaceAll("-", " "));

          return isLast ? (
            <span className="breadcrumb-current" aria-current="page" key={href}>{label}</span>
          ) : (
            <span className="breadcrumb-part" key={href}>
              <Link href={href}>{breadcrumbLabels[segment] ?? segment}</Link>
              <span aria-hidden="true">/</span>
            </span>
          );
        })}
      </nav>
    </div>
  );
};
