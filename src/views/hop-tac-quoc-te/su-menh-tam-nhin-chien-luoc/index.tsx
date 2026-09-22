"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight, LayoutGrid, Search } from "lucide-react";
import "@/scss/hop-tac-quoc-te/su-menh-tam-nhin-chien-luoc/su-menh-tam-nhin-chien-luoc.scss";

// ─── Dữ liệu Danh mục Sidebar Trái ──────────────────────────────────────────

import SidebarMenu from "@/components/sidebar-menu";
import { internationalMenuItems } from "@/data/navigation";

const sidebarLatestNews = [
  "Bồi dưỡng kiến thức, kỹ năng đối ngoại trong công vụ hành chính",
  'Hội thảo khoa học: "An sinh xã hội cho người cao tuổi ở Việt Nam - Thực trạng và giải pháp"',
  'Giao lưu văn hóa và Tọa đàm bàn tròn “Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu”',
  "Thông tin luận án NCS Dương Thị Hòa",
  "Thông báo lựa chọn tổ chức bán đấu giá tài sản",
];

const sidebarMostReadNews = [
  "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công",
  "Các đơn vị trực thuộc",
  "Những chặng đường phát triển",
  "Lãnh đạo Học viện qua các thời kỳ",
  "Tóm tắt những nội dung chính trong Nghị quyết 59-NQ/TW năm 2025 của Bộ Chính trị về hội nhập quốc tế trong tình hình mới",
  "Ban Giám đốc Học viện Hành chính và Quản trị công",
  "Những phần thưởng và danh hiệu cao quý",
  "Thông báo về thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2025",
  "Học viện Hành chính và Quản trị công thông báo điểm trúng tuyển đại học hình thức chính quy và thủ tục, thời gian xác nhận nhập học đợt 1 năm 2025",
  "Phân hiệu Học viện Hành chính và Quản trị công tại tỉnh Đắk Lắk tổ chức Lễ bảo vệ đề án thạc sĩ cho học viên các lớp cao học Quản lý công",
];

export default function SuMenhTamNhinChienLuocPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white min-h-screen py-6 sm:py-8 font-sans">
      <div className="w-full max-w-[1240px] xl:max-w-[1280px] mx-auto px-3 sm:px-4">
        <div className="flex flex-row max-[480px]:flex-col gap-6 xl:gap-7 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════
              CỘT TRÁI (SIDEBAR) — Chiều rộng cố định (~270-300px)
              ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-[280px] xl:w-[300px] max-[480px]:w-full shrink-0 flex flex-col gap-4">
            <SidebarMenu title="HỢP TÁC QUỐC TẾ" items={internationalMenuItems} />

            {/* Ô 1: "TIN MỚI NHẤT" */}
            <div className="border border-gray-200 bg-white">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN MỚI NHẤT
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarLatestNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/hop-tac-quoc-te"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">
                        •
                      </span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-3 group-hover:underline">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ô 2: "TIN ĐỌC NHIỀU" */}
            <div className="border border-gray-200 bg-white">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN ĐỌC NHIỀU
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarMostReadNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/hop-tac-quoc-te"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">
                        •
                      </span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-4 group-hover:underline">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ══════════════════════════════════════════════════════════════════
              CỘT PHẢI (NỘI DUNG CHÍNH) — Chiếm phần còn lại
              ══════════════════════════════════════════════════════════════════ */}
          <main className="flex-1 min-w-0">
            {/* Thanh Breadcrumb: Ngay đầu cột phải */}
            <div className="flex items-center h-10 mb-4 w-full">
              <Link
                href="/"
                aria-label="Về trang chủ"
                className="bg-[#1b2559] text-white w-10 h-10 flex items-center justify-center shrink-0 hover:bg-[#151d45] transition-colors"
              >
                <Home size={18} className="text-white" />
              </Link>
              <div className="bg-[#e9ecef] flex-1 h-10 flex items-center px-4">
                <span className="text-[#DA251C] font-bold text-[clamp(12.5px,0.72rem+0.2vw,14.5px)] uppercase tracking-wide">
                  SỨ MỆNH - TẦM NHÌN - CHIẾN LƯỢC
                </span>
              </div>
            </div>

            {/* Icon view mode */}
            <div className="mb-4">
              <button
                type="button"
                aria-label="Chế độ xem lưới"
                className="w-6 h-6 bg-[#2d3748] text-white rounded-xs flex items-center justify-center hover:bg-[#1a202c] transition-colors cursor-pointer"
              >
                <LayoutGrid size={13} />
              </button>
            </div>

            {/* 1. Bài đầu tiên: Sứ mệnh - Tầm nhìn - Giá trị cốt lõi (Bố cục ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-5 sm:gap-6 items-start">
              {/* Logo APAG lớn */}
              <div className="w-[48%] max-[480px]:w-full h-[160px] sm:h-[180px] shrink-0 border border-gray-200 bg-white flex items-center justify-center p-4">
                <span className="text-4xl sm:text-5xl font-black tracking-tight select-none">
                  <span className="text-[#DA251C]">AP</span>
                  <span className="text-[#1b2559]">AG</span>
                </span>
              </div>

              {/* Chữ: Tiêu đề + Ngày giờ */}
              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href="/hop-tac-quoc-te/su-menh-tam-nhin-chien-luoc">
                    Sứ mệnh – Tầm nhìn – Giá trị cốt lõi
                  </Link>
                </h2>

                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2">
                  20:25 25/12/2025
                </p>
              </div>
            </article>

            {/* 2. Bài thứ hai: Chiến lược phát triển Học viện */}
            <div className="w-[200px] sm:w-[240px] max-[480px]:w-full mt-6">
              <article className="flex flex-col">
                <div className="w-full h-[135px] sm:h-[145px] border border-gray-200 bg-white flex items-center justify-center p-4">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight select-none">
                    <span className="text-[#DA251C]">AP</span>
                    <span className="text-[#1b2559]">AG</span>
                  </span>
                </div>

                <h3 className="text-[clamp(13px,0.75rem+0.15vw,14.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2">
                  <Link href="/hop-tac-quoc-te/su-menh-tam-nhin-chien-luoc">
                    Chiến lược phát triển Học viện
                  </Link>
                </h3>
              </article>
            </div>

            {/* Phân trang (Pagination) */}
            <nav
              aria-label="Phân trang"
              className="flex items-center justify-center gap-1.5 mt-9 pt-4"
            >
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="bg-[#e9ecef] text-gray-700 text-[13px] px-3.5 py-1.5 font-medium border border-gray-300 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Đầu
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="text-[13px] w-8 h-8 flex items-center justify-center font-bold bg-[#343a40] text-white border border-[#343a40] cursor-pointer"
              >
                1
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="bg-[#DA251C] text-white text-[13px] px-3.5 py-1.5 font-bold hover:bg-[#b01c22] transition-colors cursor-pointer"
              >
                Cuối
              </button>
            </nav>

            {/* Tìm kiếm thông tin */}
            <div className="flex flex-col items-center justify-center mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[13.5px] font-bold text-gray-800 uppercase tracking-wide">
                  TÌM KIẾM THÔNG TIN
                </span>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-label="Mở tìm kiếm"
                  className="text-gray-700 hover:text-[#DA251C] transition-colors cursor-pointer"
                >
                  <Search size={16} />
                </button>
              </div>

              {isSearchOpen && (
                <div className="mt-3 flex items-center gap-2 w-full max-w-sm">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm..."
                    className="flex-1 px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-none focus:outline-none focus:border-[#1b2559]"
                  />
                  <button
                    type="button"
                    className="bg-[#1b2559] hover:bg-[#DA251C] text-white text-xs px-3 py-1.5 font-bold transition-colors cursor-pointer"
                  >
                    Tìm
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
