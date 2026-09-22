"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight, Search } from "lucide-react";

// ─── APAG Logo Card Component ────────────────────────────────────────────────
const ApagLogoCard = ({
  className = "",
  large = false,
}: {
  className?: string;
  large?: boolean;
}) => (
  <div
    className={`w-full h-full bg-white border border-gray-300 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors ${className}`}
  >
    <div className="flex items-center font-black tracking-tight select-none">
      <span className={`text-[#DA251C] ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
        AP
      </span>
      <div className="relative inline-flex items-center">
        <span className={`text-[#1b2559] ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
          A
        </span>
        <span
          className={`absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#DA251C] text-white font-bold rounded-full leading-none flex items-center justify-center ${
            large ? "text-[8px] px-1 py-0.5" : "text-[6px] px-[2.5px] py-[0.5px]"
          }`}
        >
          1959
        </span>
      </div>
      <span className={`text-[#1b2559] ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
        G
      </span>
    </div>
  </div>
);

import SidebarMenu from "@/components/sidebar-menu";
import { qualityMenuItems } from "@/data/navigation";

const sidebarLatestNews = [
  "Bồi dưỡng kiến thức, kỹ năng đối ngoại trong công vụ hành chính",
  'Hội thảo khoa học: "An sinh xã hội cho người cao tuổi ở Việt Nam - Thực trạng và giải pháp"',
  'Giao lưu văn hóa và Tọa đàm bàn tròn "Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu"',
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

// ─── Main Content Data ────────────────────────────────────────────────────────
const featuredArticle = {
  id: "vbpl-feat",
  title: "Quy chế đảm bảo chất lượng giáo dục của Học viện Hành chính và Quản trị công",
  date: "19:00 28/10/2025",
  href: "/dam-bao-chat-luong/he-thong-van-ban-phap-luat",
};

const gridArticles = [
  {
    id: "vbpl-g1",
    title: "Văn bản quy phạm pháp luật về kiểm định chất lượng giáo dục",
    image: "/van_ban_phap_luat.jpg",
    isLogoCard: false,
    href: "/dam-bao-chat-luong/he-thong-van-ban-phap-luat",
  },
  {
    id: "vbpl-g2",
    title: "Hệ thống văn bản về công tác đảm bảo chất lượng giáo dục đại học",
    isLogoCard: true,
    href: "/dam-bao-chat-luong/he-thong-van-ban-phap-luat",
  },
  {
    id: "vbpl-g3",
    title: "Quy định hoạt động đảm bảo chất lượng giáo dục đại học của Học viện Hành chính Quốc gia",
    image: "/quy_dinh_chung_23e93fb80c654b67b243d5b9ce6f62ae-6a0003becb.png",
    isLogoCard: false,
    href: "/dam-bao-chat-luong/he-thong-van-ban-phap-luat",
  },
];

export default function VanBanPhapLuatPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white min-h-screen py-6 sm:py-8 font-sans">
      <div className="w-full max-w-[1240px] xl:max-w-[1280px] mx-auto px-3 sm:px-4">
        <div className="flex flex-row max-[480px]:flex-col gap-6 xl:gap-7 items-start">
          {/* ══════════════════════════════════════════════════════════════════
              CỘT TRÁI (SIDEBAR)
              ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-[280px] xl:w-[300px] max-[480px]:w-full shrink-0 flex flex-col gap-4">
            <SidebarMenu title="ĐẢM BẢO CHẤT LƯỢNG" items={qualityMenuItems} />

            {/* TIN MỚI NHẤT */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN MỚI NHẤT
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarLatestNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/dam-bao-chat-luong/he-thong-van-ban-phap-luat"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">•</span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-3 group-hover:underline">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* TIN ĐỌC NHIỀU */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN ĐỌC NHIỀU
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarMostReadNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/dam-bao-chat-luong/he-thong-van-ban-phap-luat"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">•</span>
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
              CỘT PHẢI (NỘI DUNG CHÍNH)
              ══════════════════════════════════════════════════════════════════ */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
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
                  VĂN BẢN PHÁP LUẬT
                </span>
              </div>
            </div>

            {/* 1. Bài viết tiêu điểm (Featured) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-6 items-start">
              <div className="w-[48%] max-[480px]:w-full h-[210px] sm:h-[240px] md:h-[255px] shrink-0">
                <Link
                  href={featuredArticle.href}
                  className="block relative w-full h-full overflow-hidden group cursor-pointer"
                >
                  <ApagLogoCard large />
                </Link>
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h1 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={featuredArticle.href}>{featuredArticle.title}</Link>
                </h1>
                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-3">
                  {featuredArticle.date}
                </p>
              </div>
            </article>

            {/* 2. Lưới 3 bài viết kế tiếp */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-7 pt-6">
              {gridArticles.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <div className="w-full h-[145px] sm:h-[155px] md:h-[165px] border border-gray-300 relative overflow-hidden group cursor-pointer bg-white">
                    <Link
                      href={article.href}
                      className="block relative w-full h-full"
                    >
                      {article.isLogoCard ? (
                        <ApagLogoCard className="border-0" />
                      ) : (
                        <Image
                          src={article.image!}
                          alt={article.title}
                          fill
                          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </Link>
                  </div>
                  <h2 className="text-[clamp(13px,0.75rem+0.15vw,14.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-3">
                    <Link href={article.href}>{article.title}</Link>
                  </h2>
                </article>
              ))}
            </div>

            {/* 3. Pagination tĩnh 1 trang */}
            <nav
              aria-label="Phân trang"
              className="flex items-center justify-center gap-1.5 mt-9 pt-6"
            >
              <button
                type="button"
                disabled
                className="bg-[#e9ecef] text-gray-400 text-[13px] px-3.5 py-1.5 font-medium border border-gray-300 opacity-50 cursor-not-allowed"
              >
                Đầu
              </button>
              <button
                type="button"
                className="text-[13px] w-8 h-8 flex items-center justify-center font-bold bg-[#343a40] text-white border border-[#343a40] cursor-default"
              >
                1
              </button>
              <button
                type="button"
                disabled
                className="bg-[#DA251C] text-white text-[13px] px-3.5 py-1.5 font-bold opacity-50 cursor-not-allowed"
              >
                Cuối
              </button>
            </nav>

            {/* 4. Tìm kiếm thông tin */}
            <div className="mt-8 flex justify-center items-center">
              <div className="flex items-center border border-gray-300 px-3 py-1.5 max-w-sm w-full bg-white shadow-xs focus-within:border-gray-400">
                <input
                  type="text"
                  placeholder="TÌM KIẾM THÔNG TIN"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs font-semibold text-gray-700 placeholder-gray-500 uppercase outline-none bg-transparent"
                />
                <button
                  type="button"
                  aria-label="Tìm kiếm"
                  className="text-gray-700 hover:text-[#DA251C] ml-2 transition-colors cursor-pointer"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
