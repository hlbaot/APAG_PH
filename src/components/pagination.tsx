"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function getPaginationItems(current: number, total: number, maxVisible = 3) {
  if (total <= maxVisible) {
    return {
      pages: Array.from({ length: total }, (_, i) => i + 1),
      hasLeftEllipsis: false,
      hasRightEllipsis: false,
    };
  }

  let start: number;
  let end: number;

  if (current <= 2) {
    start = 1;
    end = 3;
  } else if (current >= total - 1) {
    start = total - 2;
    end = total;
  } else {
    start = current - 1;
    end = current + 1;
  }

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return {
    pages,
    hasLeftEllipsis: start > 1,
    hasRightEllipsis: end < total,
  };
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "flex items-center justify-center gap-1.5 mt-9 pt-6 border-t border-gray-200",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const { pages, hasLeftEllipsis, hasRightEllipsis } = getPaginationItems(
    currentPage,
    totalPages,
    3
  );

  return (
    <nav aria-label="Phân trang" className={className}>
      {/* Nút Đầu */}
      <button
        type="button"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="bg-[#e9ecef] text-gray-700 text-[13px] px-3.5 py-1.5 font-medium border border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        Đầu
      </button>

      {/* Dấu ... bên trái */}
      {hasLeftEllipsis && (
        <span className="px-1 text-gray-500 font-bold select-none text-[13px]">
          ...
        </span>
      )}

      {/* Tối đa 3 ô số trang */}
      {pages.map((num) => {
        const isActive = num === currentPage;
        return (
          <button
            key={num}
            type="button"
            onClick={() => onPageChange(num)}
            className={`text-[13px] w-8 h-8 flex items-center justify-center font-bold border transition-colors cursor-pointer ${
              isActive
                ? "bg-[#343a40] text-white border-[#343a40]"
                : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
          >
            {num}
          </button>
        );
      })}

      {/* Dấu ... bên phải */}
      {hasRightEllipsis && (
        <span className="px-1 text-gray-500 font-bold select-none text-[13px]">
          ...
        </span>
      )}

      {/* Nút Cuối */}
      <button
        type="button"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="bg-[#DA251C] text-white text-[13px] px-3.5 py-1.5 font-bold hover:bg-[#b01c22] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        Cuối
      </button>
    </nav>
  );
}
