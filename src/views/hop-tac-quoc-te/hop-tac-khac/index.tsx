"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight, Search } from "lucide-react";
import "@/scss/hop-tac-quoc-te/hop-tac-khac/hop-tac-khac.scss";

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

// ─── Component hiển thị thẻ Logo APAG ────────────────────────────────────────

function ApagLogoBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const fontSizes = {
    sm: "text-2xl sm:text-3xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
  };

  const dotSizes = {
    sm: "w-1.5 h-2 top-[32%] left-[48%]",
    md: "w-1.5 h-2 top-[32%] left-[48%]",
    lg: "w-2 h-2.5 top-[32%] left-[48%]",
  };

  return (
    <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors">
      <div className={`flex items-center select-none font-black tracking-tighter ${fontSizes[size]}`}>
        <span className="text-[#DA251C]">AP</span>
        <span className="relative text-[#1b2559] mx-[-1px]">
          A
          <span className={`absolute -translate-x-1/2 -translate-y-1/2 bg-[#DA251C] rounded-full ${dotSizes[size]}`} />
        </span>
        <span className="text-[#1b2559]">G</span>
      </div>
    </div>
  );
}

export default function HopTacKhacPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`Tìm kiếm: ${searchQuery}`);
  };

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
                      href="/hop-tac-quoc-te/tin-tuc-htqt"
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
                      href="/hop-tac-quoc-te/tin-tuc-htqt"
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
            <div className="flex items-center h-10 mb-5 w-full">
              <Link
                href="/"
                aria-label="Về trang chủ"
                className="bg-[#1b2559] text-white w-10 h-10 flex items-center justify-center shrink-0 hover:bg-[#151d45] transition-colors"
              >
                <Home size={18} className="text-white" />
              </Link>
              <div className="bg-[#e9ecef] flex-1 h-10 flex items-center px-4">
                <span className="text-[#DA251C] font-bold text-[clamp(12.5px,0.72rem+0.2vw,14.5px)] uppercase tracking-wide">
                  HỢP TÁC KHÁC
                </span>
              </div>
            </div>

            {/* 1. Bài đầu tiên (Nổi bật nhất: Bố cục ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-5 items-start">
              <div className="w-[48%] max-[480px]:w-full shrink-0">
                <Link
                  href="/hop-tac-quoc-te/hop-tac-khac"
                  className="block relative w-full h-[210px] sm:h-[250px] md:h-[240px] overflow-hidden group cursor-pointer"
                >
                  <ApagLogoBadge size="lg" />
                </Link>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(15px,1rem+0.4vw,21px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href="/hop-tac-quoc-te/hop-tac-khac">
                    Văn bản quy phạm pháp luật về quản lý hợp tác quốc tế
                  </Link>
                </h2>

                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2 mb-2.5">
                  14:52 26/01/2026
                </p>
              </div>
            </article>

            {/* 2. Hàng bài kế tiếp (Lưới) */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-6 pt-5 border-t border-gray-200">
              <article className="flex flex-col">
                <Link
                  href="/hop-tac-quoc-te/hop-tac-khac"
                  className="block relative w-full h-[145px] sm:h-[155px] overflow-hidden group cursor-pointer"
                >
                  <ApagLogoBadge size="md" />
                </Link>

                <h3 className="text-[clamp(13px,0.75rem+0.15vw,15px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-3">
                  <Link href="/hop-tac-quoc-te/hop-tac-khac">
                    Thủ tục xin thị thực (Visa) cho sinh viên quốc tế
                  </Link>
                </h3>

                <p className="text-[clamp(12px,0.68rem+0.15vw,13px)] text-gray-600 leading-relaxed text-justify mt-1.5 line-clamp-4 flex-1">
                  Các hoạt động hỗ trợ cho sinh viên quốc tế nhằm hướng đến thúc đẩy đổi mới sáng tạo, phát triển kỹ năng thực hành, và tăng cường hợp tác quốc tế nhằm đáp ứng nhu cầu của nền hành chính..
                </p>
              </article>
            </div>

            {/* 3. Phân trang (Pagination) cuối trang */}
            <nav
              aria-label="Phân trang"
              className="flex items-center justify-center gap-1.5 mt-9 pt-6 border-t border-gray-200"
            >
              {/* Nút Đầu */}
              <button
                type="button"
                disabled
                className="bg-[#e9ecef] text-gray-700 text-[13px] px-3.5 py-1.5 font-medium border border-gray-300 opacity-50 cursor-not-allowed"
              >
                Đầu
              </button>

              {/* Nút số 1 active */}
              <button
                type="button"
                className="text-[13px] w-8 h-8 flex items-center justify-center font-bold bg-[#343a40] text-white border border-[#343a40]"
              >
                1
              </button>

              {/* Nút Cuối */}
              <button
                type="button"
                disabled
                className="bg-[#DA251C] text-white text-[13px] px-3.5 py-1.5 font-bold opacity-50 cursor-not-allowed"
              >
                Cuối
              </button>
            </nav>

            {/* 4. Tìm kiếm thông tin */}
            <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-[13.5px] sm:text-[14px] font-bold text-gray-800 tracking-wide uppercase">
                TÌM KIẾM THÔNG TIN
              </span>
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Nhập từ khóa tìm kiếm..."
                  className="border border-gray-300 rounded-xs pl-3 pr-9 py-1.5 text-[13px] text-gray-800 focus:outline-none focus:border-[#1b2559] w-[220px] sm:w-[260px] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Tìm kiếm"
                  className="absolute right-2 text-gray-600 hover:text-[#DA251C] transition-colors cursor-pointer"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
