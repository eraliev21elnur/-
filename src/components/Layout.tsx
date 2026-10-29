import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "../data/site";
import { navigation } from "../data/disciplines";
import { metadata } from "../lib/metadata";
import { absoluteSiteUrl } from "../lib/paths";
export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previous = useRef(location.pathname);
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
      const canonical = absoluteSiteUrl(location.pathname, site.url);
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute("href", canonical);
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute("content", canonical);
    }
    if (previous.current !== location.pathname) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
      previous.current = location.pathname;
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {site.demoMode && (
        <div className="demo-banner">
          DESIGN PREVIEW{" "}
          <span>Sample media. Not FULL CORE portfolio credits.</span>
        </div>
      )}
      <header className="site-header">
        <div className="header-inner wrap">
          <Link
            className="brand"
            to="/"
            aria-label={`${site.brand} home`}
            onClick={() => setOpen(false)}
          >
            {site.brand}
            <sup>®</sup>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            ref={trigger}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-nav wrap"
              id="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navigation.map((item, i) => (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  key={item.to}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                  <ArrowUpRight size={21} />
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main ref={main} id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="footer wrap">
        <Link className="brand" to="/">
          {site.brand}
          <sup>®</sup>
        </Link>
        <div>
          <Link to="/contact">
            Contact <ArrowUpRight size={14} />
          </Link>
          {site.socialLinks.map((link) => (
            <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
              {link.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
        <span>
          © {new Date().getFullYear()} {site.brand} / {site.location}
        </span>
      </footer>
    </>
  );
}
