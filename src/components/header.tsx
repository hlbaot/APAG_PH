"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import {
  introMenuItems,
  trainingMenuItems,
  internationalMenuItems,
  qualityMenuItems,
  libraryMenuItems,
  newsMenuItems,
  isNavDropdownItemActive,
} from "@/data/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubNavItem {
  title: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  key: string;
  href?: string;
  parentHref?: string; // parent link khi có dropdown (cha clickable)
  icon?: React.ReactNode;
  children?: SubNavItem[];
}

// ─── Home icon ────────────────────────────────────────────────────────────────

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 inline-block mr-1 mb-0.5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

// ─── Close/Hamburger icons ─────────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      key: "home",
      href: "/trang-chu",
      icon: <HomeIcon />,
    },
    {
      key: "about",
      children: introMenuItems,
    },
    {
      key: "boiduong",
      children: trainingMenuItems,
    },
    {
      key: "research",
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      key: "international",
      parentHref: "/hop-tac-quoc-te",
      children: internationalMenuItems,
    },
    {
      key: "quality",
      parentHref: "/dam-bao-chat-luong",
      children: qualityMenuItems,
    },
    {
      key: "library",
      children: libraryMenuItems,
    },
    {
      key: "news",
      children: newsMenuItems,
    },
    {
      key: "contact",
      href: "/lien-he",
    },
  ];

  // Helper check active link / dropdown child active
  function isItemActive(item: NavItem): boolean {
    if (item.children && item.children.length > 0) {
      const childActive = item.children.some(
        (sub) => !sub.external && isNavDropdownItemActive(pathname, sub.href)
      );
      if (childActive) return true;
      if (item.parentHref) return pathname === item.parentHref || pathname.startsWith(item.parentHref + "/");
      return false;
    }
    if (!item.href) return false;
    if (item.href === "/" || item.href === "/trang-chu") return pathname === "/" || pathname === "" || pathname === "/trang-chu";
    return pathname === item.href || pathname.startsWith(item.href + "/");
  }


  const toggleMobileSub = (key: string) => {
    setActiveMobileSub(activeMobileSub === key ? null : key);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative z-30">
      {/* ── Desktop nav (xl and up: spacious screen) ── */}
      <nav
        className="hidden xl:flex items-stretch justify-between relative w-full max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-2 xl:px-4"
        aria-label="Main navigation"
      >
        {navItems.map((item, index) => {
          const active = isItemActive(item);
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const isRightAlignedDropdown = index >= 6;

          return (
            <div key={item.key} className="relative group shrink-0 flex items-stretch">
              {hasChildren ? (
                // Parent item with dropdown
                item.parentHref ? (
                  // Parent IS clickable (có href riêng)
                  <Link
                    href={item.parentHref}
                    className={[
                      "flex items-center justify-center text-center px-1.5 xl:px-2 2xl:px-3 py-3.5",
                      "text-[12px] 2xl:text-[13px] font-extrabold uppercase tracking-tight leading-tight whitespace-nowrap",
                      "transition-colors duration-150 border-b-2 cursor-pointer select-none",
                      "min-h-[52px]",
                      active
                        ? "text-[#DA251C] border-[#DA251C]"
                        : "text-[#1E2A5E] border-transparent group-hover:text-[#DA251C] group-hover:border-[#DA251C]",
                    ].join(" ")}
                    aria-haspopup="true"
                  >
                    {t(item.key as Parameters<typeof t>[0])}
                  </Link>
                ) : (
                  // Parent NOT clickable (chỉ là label)
                  <div
                    className={[
                      "flex items-center justify-center text-center px-1.5 xl:px-2 2xl:px-3 py-3.5",
                      "text-[12px] 2xl:text-[13px] font-extrabold uppercase tracking-tight leading-tight whitespace-nowrap",
                      "transition-colors duration-150 border-b-2 cursor-default select-none",
                      "min-h-[52px]",
                      active
                        ? "text-[#DA251C] border-[#DA251C]"
                        : "text-[#1E2A5E] border-transparent group-hover:text-[#DA251C] group-hover:border-[#DA251C]",
                    ].join(" ")}
                    aria-haspopup="true"
                  >
                    {item.icon && (
                      <span className={active ? "text-[#DA251C]" : ""}>
                        {item.icon}
                      </span>
                    )}
                    {t(item.key as Parameters<typeof t>[0])}
                  </div>
                )
              ) : (
                // Direct link: clickable with cursor-pointer
                <Link
                  href={item.href!}
                  className={[
                    "flex items-center justify-center text-center px-1.5 xl:px-2 2xl:px-3 py-3.5",
                    "text-[12px] 2xl:text-[13px] font-extrabold uppercase tracking-tight leading-tight whitespace-nowrap",
                    "transition-colors duration-150 border-b-2 cursor-pointer select-none",
                    "min-h-[52px]",
                    active
                      ? "text-[#DA251C] border-[#DA251C]"
                      : "text-[#1E2A5E] border-transparent hover:text-[#DA251C] hover:border-[#DA251C]",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.icon && (
                    <span className={active ? "text-[#DA251C]" : ""}>
                      {item.icon}
                    </span>
                  )}
                  {t(item.key as Parameters<typeof t>[0])}
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              {hasChildren && (
                <div
                  className={[
                    "absolute top-full hidden group-hover:block w-72 2xl:w-80 bg-white shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150",
                    isRightAlignedDropdown ? "right-0" : "left-0",
                  ].join(" ")}
                >
                  <div className="flex flex-col">
                    {item.children!.map((sub) => {
                      const isSubActive = !sub.external && isNavDropdownItemActive(pathname, sub.href);
                      return sub.external ? (
                        <a
                          key={sub.href}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-left transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer text-[#1E2A5E] hover:text-[#DA251C] hover:bg-gray-50 flex items-center gap-1"
                        >
                          {sub.title}
                          <svg className="w-3 h-3 opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={[
                            "px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-left transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer",
                            isSubActive
                              ? "text-[#DA251C] bg-red-50"
                              : "text-[#1E2A5E] hover:text-[#DA251C] hover:bg-gray-50",
                          ].join(" ")}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Narrow / Tablet / Mobile: Hamburger Bar (icon 3 gạch thay cho menu) ── */}
      <div className="xl:hidden flex items-center justify-between px-4 sm:px-6 py-2.5 h-14">
        {/* Active page label */}
        <span className="text-[#DA251C] text-sm sm:text-base font-extrabold uppercase tracking-wide truncate whitespace-nowrap mr-3">
          {navItems.find((i) => isItemActive(i))
            ? t(navItems.find((i) => isItemActive(i))!.key as Parameters<typeof t>[0])
            : t("home")}
        </span>

        {/* Hamburger toggle (Icon 3 gạch) */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="min-w-[44px] min-h-[44px] px-2 py-1 flex items-center justify-center gap-1.5 rounded
                     text-[#1E2A5E] hover:text-[#DA251C] hover:bg-gray-50 transition-colors cursor-pointer flex-shrink-0"
        >
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            {open ? "ĐÓNG" : "MENU"}
          </span>
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* ── Narrow / Tablet / Mobile drawer ── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={[
          "xl:hidden overflow-y-auto max-h-[calc(100vh-180px)] transition-all duration-300 ease-in-out border-t border-gray-100",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <nav className="flex flex-col bg-white">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isSubOpen = activeMobileSub === item.key;

            return (
              <div key={item.key} className="border-b border-gray-100">
                {hasChildren ? (
                  // Mobile accordion header: clicking anywhere toggles the submenu
                  <button
                    type="button"
                    onClick={() => toggleMobileSub(item.key)}
                    className={[
                      "w-full flex items-center justify-between px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-left cursor-pointer",
                      active ? "text-[#DA251C]" : "text-[#1E2A5E]",
                    ].join(" ")}
                  >
                    <span className="flex items-center">
                      {item.icon && (
                        <span className={active ? "text-[#DA251C]" : ""}>{item.icon}</span>
                      )}
                      {t(item.key as Parameters<typeof t>[0])}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSubOpen ? "rotate-180 text-[#DA251C]" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  // Direct link for items without children
                  <Link
                    href={item.href!}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide cursor-pointer",
                      active ? "text-[#DA251C]" : "text-[#1E2A5E]",
                    ].join(" ")}
                  >
                    {item.icon && (
                      <span className={active ? "text-[#DA251C]" : ""}>{item.icon}</span>
                    )}
                    {t(item.key as Parameters<typeof t>[0])}
                  </Link>
                )}

                {/* Mobile Submenu Accordion */}
                {hasChildren && isSubOpen && (
                  <div className="bg-gray-50 py-1 pl-6 pr-4 border-t border-gray-100">
                    {item.children!.map((sub) =>
                      sub.external ? (
                        <a
                          key={sub.href}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="block py-2.5 px-3 text-xs font-bold uppercase tracking-tight transition-colors border-b border-gray-200/50 last:border-b-0 cursor-pointer text-[#1E2A5E] hover:text-[#DA251C] flex items-center gap-1"
                        >
                          {sub.title}
                          <svg className="w-3 h-3 opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={[
                            "block py-2.5 px-3 text-xs font-bold uppercase tracking-tight transition-colors border-b border-gray-200/50 last:border-b-0 cursor-pointer",
                            isNavDropdownItemActive(pathname, sub.href)
                              ? "text-[#DA251C]"
                              : "text-[#1E2A5E] hover:text-[#DA251C]",
                          ].join(" ")}
                        >
                          {sub.title}
                        </Link>

                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
