"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { ChevronRight, ExternalLink } from "lucide-react";
import { NavDropdownItem, isNavDropdownItemActive } from "@/data/navigation";

interface SidebarMenuProps {
  title: string;
  items: NavDropdownItem[];
  className?: string;
}

export default function SidebarMenu({
  title,
  items,
  className = "",
}: SidebarMenuProps) {
  const pathname = usePathname();

  return (
    <div className={`bg-white border border-gray-200 rounded shadow-xs overflow-hidden ${className}`}>
      {/* Header Chuyên mục Đỏ */}
      <div className="bg-[#DA251C] text-white px-4 py-2.5 sm:py-3 shadow-xs">
        <h3 className="text-[clamp(13px,0.75rem+0.2vw,15.5px)] font-bold uppercase tracking-wider text-center sm:text-left">
          {title}
        </h3>
      </div>

      {/* Danh sách các mục danh mục */}
      <div className="divide-y divide-gray-100 p-1">
        {items.map((item, idx) => {
          const isActive = isNavDropdownItemActive(pathname, item.href);

          if (item.external) {
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 sm:py-3 text-[clamp(12px,0.72rem+0.15vw,13.5px)] font-bold text-[#1E2A5E] hover:text-[#DA251C] hover:bg-red-50/50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <ChevronRight className="w-4 h-4 text-[#DA251C] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="truncate">{item.title}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#DA251C] shrink-0 ml-1 opacity-70" />
              </a>
            );
          }

          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-2 px-3.5 py-2.5 sm:py-3 text-[clamp(12px,0.72rem+0.15vw,13.5px)] font-bold hover:text-[#DA251C] hover:bg-red-50/50 transition-colors group ${
                isActive ? "text-[#DA251C]" : "text-[#1E2A5E]"
              }`}
            >
              <ChevronRight className="w-4 h-4 text-[#DA251C] shrink-0 group-hover:translate-x-0.5 transition-transform" />
              <span className="truncate">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
