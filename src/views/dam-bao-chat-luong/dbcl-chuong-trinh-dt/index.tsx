"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight } from "lucide-react";

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

// ─── Article Data ─────────────────────────────────────────────────────────────
const featuredArticle = {
  title:
    "Giấy chứng nhận kiểm định chất lượng chương trình đào tạo trình độ đại học đối với 08 ngành của Học viện Hành chính và Quản trị công",
  date: "09:06 26/11/2025",
  image: "/tick_green.png",
  href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
};

const gridArticles = [
  {
    id: "g1",
    title:
      "Bế mạc đợt khảo sát chính thức đánh giá chất lượng 08 chương trình đào tạo đại học tại Học viện Hành chính và Quản trị công",
    image:
      "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
    summary:
      "(apag.edu.vn) – Sau 05 ngày làm việc nghiêm túc, trách nhiệm, hiệu quả, sáng ngày 10/5/2025, tại Hà Nội, Học viện Hành chính và Quản trị công trang trọng tổ chức bế mạc đợt khảo sát chính...",
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
  {
    id: "g2",
    title:
      "Khai mạc đợt khảo sát chính thức đánh giá chất lượng 08 chương trình đào tạo đại học tại Học viện Hành chính và Quản trị công",
    image: "/trangChu/slide/a0-f97775f053.png",
    summary:
      "(apag.edu.vn) – Sáng ngày 06/5/2025, tại Hà Nội, Học viện Hành chính và Quản trị công trang trọng tổ chức buổi khai mạc đợt khảo sát chính thức đánh giá chất lượng 08 chương trình đào...",
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
  {
    id: "g3",
    title:
      "Chính thức khảo sát đánh giá ngoài 08 chương trình đào tạo của Học viện Hành chính và Quản trị công",
    image: "/trangChu/slide/luu-niem-2-899d44225a.png",
    summary:
      "Với mục tiêu nâng cao chất lượng và khẳng định uy tín trong đào tạo, sau quá trình thực hiện tự đánh giá và khảo sát, đánh giá sơ bộ, từ ngày 06/5/2025 – 10/5/2025, Học viện Hành chính v...",
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
];

const listArticles = [
  {
    id: "l1",
    title:
      "Hội nghị Khảo sát sơ bộ đánh giá ngoài 08 chương trình đào tạo trình độ đại học tại Học viện Hành chính và Quản trị công",
    date: "16:20 15/04/2025",
    image: "/trangChu/slide/20260828105210-897744165165165165165-03a85ffb4d.png",
    summary:
      "(apag.edu.vn) - Sáng ngày 15/4/2025, tại trụ sở Học viện Hành chính và Quản trị công, Đoàn chuyên gia đánh giá ngoài thuộc Trung tâm Kiểm định chất lượng giáo dục Thăng Long đã tiến hành khảo sát sơ bộ đối với 08 chương trình đào tạo trình độ đại học của Học viện, nhằm chuẩn bị cho đợt khảo sát chính thức sẽ diễn ra từ ngày 06/5 đến ngày 10/5/2025. Hội nghị được tổ chức theo hình thức trực tiếp kết hợp trực tuy...",
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
  {
    id: "l2",
    title: "Công khai báo cáo tự đánh giá các Chương trình đào tạo đại học năm 2024",
    date: "17:17 19/09/2024",
    isLogoCard: true,
    summary:
      "Thực hiện Kế hoạch số 407/KH-HCQG ngày 25/2/2024 của Giám đốc Học viện Hành chính Quốc gia về việc tự đánh giá và đánh giá ngoài các chương trình đào tạo năm 2024 theo Bộ tiêu chuẩn của Bộ Giáo dục và Đào tạo, Học viện Hành chính Quốc gia công bố công khai Dự thảo Báo cáo Tự đánh giá 08 chương trình đào tạo đại học đến các bên liên quan trong và ngoài Học viện Hành chính Quốc gia.",
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
  {
    id: "l3",
    title:
      "Kế hoạch số 426/KH-HCQG về việc khảo sát lấy ý kiến phản hồi từ các bên liên quan về các lĩnh vực hoạt động của Học viện Hành chính Quốc gia năm 2024",
    date: "17:11 12/06/2024",
    isLogoCard: true,
    summary: "Xem chi tiết: Bộ phiếu khảo sát lấy ý kiến phản hồi từ các bên liên quan",
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
  {
    id: "l4",
    title: "Danh mục phiếu khảo sát",
    date: "17:11 26/06/2023",
    isLogoCard: true,
    href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt",
  },
];

export default function DbclChuongTrinhDtPage() {
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
                      href="/dam-bao-chat-luong/dbcl-chuong-trinh-dt"
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
                      href="/dam-bao-chat-luong/dbcl-chuong-trinh-dt"
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
                  ĐBCL CHƯƠNG TRÌNH ĐT
                </span>
              </div>
            </div>

            {/* 1. Bài nổi bật (ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-5 items-start">
              <div className="w-[48%] max-[480px]:w-full shrink-0">
                <Link
                  href={featuredArticle.href}
                  className="block relative w-full h-[210px] sm:h-[240px] md:h-[235px] overflow-hidden group cursor-pointer bg-white border border-gray-200"
                >
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </Link>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={featuredArticle.href}>{featuredArticle.title}</Link>
                </h1>
                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2">
                  {featuredArticle.date}
                </p>
              </div>
            </article>

            {/* 2. Lưới 3 bài kế tiếp */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-6 pt-5 border-t border-gray-200">
              {gridArticles.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <Link
                    href={article.href}
                    className="block relative w-full h-[145px] sm:h-[155px] overflow-hidden group cursor-pointer bg-white border border-gray-200"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <h2 className="text-[clamp(13px,0.75rem+0.15vw,14.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-3">
                    <Link href={article.href}>{article.title}</Link>
                  </h2>
                  {article.summary && (
                    <p className="text-[clamp(11.5px,0.65rem+0.12vw,12.5px)] text-gray-600 leading-relaxed text-justify mt-1.5 line-clamp-4 flex-1">
                      {article.summary}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {/* 3. Danh sách bài còn lại (ảnh/logo trái — chữ phải) */}
            <div className="space-y-5 sm:space-y-6 mt-6 pt-5 border-t border-gray-200">
              {listArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-4 items-start"
                >
                  <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0">
                    <Link
                      href={article.href}
                      className="block relative w-full h-full overflow-hidden group cursor-pointer bg-white border border-gray-200"
                    >
                      {article.isLogoCard ? (
                        <ApagLogoCard />
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
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[clamp(13px,0.78rem+0.18vw,15px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                      <Link href={article.href}>{article.title}</Link>
                    </h2>
                    {article.date && (
                      <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-1 mb-1.5">
                        {article.date}
                      </p>
                    )}
                    {article.summary && (
                      <p className="text-[clamp(12px,0.7rem+0.15vw,13px)] text-gray-600 leading-relaxed text-justify line-clamp-3">
                        {article.summary}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination tĩnh 1 trang */}
            <nav
              aria-label="Phân trang"
              className="flex items-center justify-center gap-1.5 mt-9 pt-6 border-t border-gray-200"
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
          </main>
        </div>
      </div>
    </div>
  );
}
