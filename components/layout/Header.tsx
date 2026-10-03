"use client";

import { NAV_ITEMS } from "@/lib/site";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>

      document.querySelector(usePathname() === "/" ? item.href : item.href.replace('/', ''))
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border-soft" : ""
      }`}
    >
      <div className="section-shell flex h-20 items-center gap-24">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-purple-soft via-purple to-blue bg-clip-text text-transparent"
        >
          PH
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 font-body text-sm transition-colors duration-200 ${
                    active === item.href
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active === item.href && (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-purple to-blue" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
