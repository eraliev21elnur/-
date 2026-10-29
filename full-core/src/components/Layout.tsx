import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "../data/site";
import { metadata } from "../lib/metadata";
export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const meta = metadata(location.pathname);
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    for (const [property, content] of Object.entries({
      "og:title": meta.title,
      "og:description": meta.description,
    }))
      document
        .querySelector(`meta[property="${property}"]`)
        ?.setAttribute("content", content);
    if (site.url) {
      const canonical = new URL(location.pathname, site.url).href;
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute("href", canonical);
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute("content", canonical);
    }
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {site.demoMode && (
        <div className="demo-banner">
          DESIGN PREVIEW{" "}
          <span>Sample media — not FULL CORE portfolio work.</span>
        </div>
      )}
      <header className="header wrap">
        <Link
          to="/"
          className="brand"
          aria-label={`${site.brand} home`}
          onClick={() => setOpen(false)}
        >
          {site.brand}
          <sup>®</sup>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {["Work", "About", "Contact"].map((label) => (
            <NavLink key={label} to={`/${label.toLowerCase()}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          ref={menuButton}
          className="icon-button menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {["Work", "About", "Contact"].map((label, i) => (
              <NavLink
                key={label}
                to={`/${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                <span>0{i + 1}</span>
                {label}
                <ArrowUpRight />
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <main id="main" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <footer className="footer wrap">
        <Link to="/" className="brand">
          {site.brand}
          <sup>®</sup>
        </Link>
        <div>
          {site.socialLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
          {site.email && (
            <a href={`mailto:${site.email}`}>
              Email
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
        <span>
          © {new Date().getFullYear()} {site.brand}
        </span>
      </footer>
    </>
  );
}
