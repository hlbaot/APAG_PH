"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight, Search } from "lucide-react";
import Pagination from "@/components/pagination";

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

// ─── Types ────────────────────────────────────────────────────────────────────
interface ArticleItem {
  id: string | number;
  title: string;
  date?: string;
  image?: string;
  isLogoCard?: boolean;
  summary?: string;
  href: string;
}

interface PageData {
  featured: ArticleItem;
  grid: ArticleItem[];
  list: ArticleItem[];
}

// ─── Page 1 Data ──────────────────────────────────────────────────────────────
const page1Data: PageData = {
  featured: {
    id: "gs-p1-feat",
    title:
      "Bế mạc đợt khảo sát chính thức đánh giá ngoài cơ sở giáo dục tại Học viện Hành chính và Quản trị công",
    date: "19:24 02/07/2026",
    image:
      "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
    summary:
      "(apag.edu.vn) - Chiều ngày 02/7/2026, Học viện Hành chính và Quản trị công phối hợp với Trung tâm Kiểm định chất lượng giáo dục Thăng Long tổ chức bế mạc đợt khảo sát chính thức phục vụ đánh giá ngoài cơ sở giáo dục sau gần 05 ngày làm việc khẩn trương, nghiêm túc, khách quan và trách nhiệm của Đoàn chuyên gia đánh giá ngoài. Phiên bế mạc là hoạt động đánh dấu việc hoàn thành chương trình khảo sát chính thức, đồng thời ghi nhận những kết quả bước đầu của quá trình đánh giá ngoài, tạo tiền đề để Học viện tiếp tục triển khai các bước tiếp theo trong quy trình kiểm định chất lượng cơ sở giáo dục theo quy định của Bộ Giáo dục và Đào tạo.",
    href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
  },
  grid: [
    {
      id: "gs-p1-g1",
      title:
        "Khai mạc Khảo sát chính thức đánh giá ngoài cơ sở giáo dục tại Học viện Hành chính và Quản trị công",
      image:
        "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 27/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công trang trọng tổ chức Lễ Khai mạc Khảo sát chính thức đánh giá ngoài cơ sở giáo dục. Đây là sự kiện có ý...",
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-g2",
      title:
        "Đoàn đánh giá ngoài cơ sở giáo dục tiến hành khảo sát chính thức và làm việc tại 3 phân hiệu của Học viện Hành chính và Quản trị công",
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        "(apag.edu.vn) - Trong khuôn khổ chu kỳ kiểm định chất lượng cơ sở giáo dục, vừa qua, Đoàn chuyên gia Đánh giá ngoài của Trung tâm Kiểm định chất lượng giáo dục Thăng Long cùng đại...",
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-g3",
      title:
        "Học viện Hành chính và Quản trị công công khai Dự thảo Báo cáo Tự đánh giá cơ sở giáo dục để lấy ý kiến góp ý",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
  ],
  list: [
    {
      id: "gs-p1-l1",
      title:
        "Quyết định về việc thành lập Tổ Đảm bảo chất lượng giáo dục tại các đơn vị thuộc, trực thuộc Học viện Hành chính và Quản trị công",
      date: "19:00 24/11/2025",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-l2",
      title:
        "Quyết định về việc thành lập Hội đồng Đảm bảo chất lượng giáo dục của Học viện Hành chính và Quản trị công",
      date: "18:00 24/11/2025",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-l3",
      title: "Quy chế đảm bảo chất lượng giáo dục của Học viện Hành chính và Quản trị công",
      date: "19:00 28/10/2025",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-l4",
      title:
        "Kế hoạch Tổ chức lớp tập huấn Nâng cao năng lực đảm bảo chất lượng cơ sở giáo dục đại học đáp ứng tiêu chuẩn đánh giá chất lượng của Bộ Giáo dục và Đào tạo",
      date: "08:00 23/09/2025",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-l5",
      title:
        "Quyết định Ban hành Quy định về so chuẩn, đối sánh chất lượng giáo dục của Học viện Hành chính và Quản trị công",
      date: "17:00 26/08/2025",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p1-l6",
      title: "Kế hoạch Đảm bảo chất lượng giáo dục năm học 2024 - 2025",
      date: "17:00 12/11/2024",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
  ],
};

// ─── Page 2 Data ──────────────────────────────────────────────────────────────
const page2Data: PageData = {
  featured: {
    id: "gs-p2-feat",
    title:
      "Quyết định về việc ban hành chính sách đảm bảo chất lượng giáo dục của Học viện Hành chính Quốc gia",
    date: "00:08 16/03/2024",
    isLogoCard: true,
    href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
  },
  grid: [
    {
      id: "gs-p2-g1",
      title:
        "Quyết định về việc ban hành Quy định hoạt động đảm bảo chất lượng giáo dục đại học của Học viện Hành chính Quốc gia",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p2-g2",
      title:
        "Quyết định Thành lập Hội đồng Đảm bảo chất lượng giáo dục của Học viện Hành chính Quốc gia",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
    {
      id: "gs-p2-g3",
      title:
        "Quyết định Thành lập Tổ Đảm bảo chất lượng giáo dục tại các đơn vị thuộc, trực thuộc Học viện Hành chính Quốc gia",
      isLogoCard: true,
      href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc",
    },
  ],
  list: [],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
};

export default function DbclCoSoGiaoDucPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 2;

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const handlePageChange = (pageNum: number) => {
    const target = Math.min(Math.max(pageNum, 1), totalPages);
    setCurrentPage(target);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
                      href="/dam-bao-chat-luong/dbcl-co-so-giao-duc"
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
                      href="/dam-bao-chat-luong/dbcl-co-so-giao-duc"
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
                  ĐBCL CƠ SỞ GIÁO DỤC
                </span>
              </div>
            </div>

            {/* 1. Bài nổi bật (ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-5 items-start">
              <div className="w-[48%] max-[480px]:w-full shrink-0">
                <Link
                  href={currentContent.featured.href}
                  className="block relative w-full h-[210px] sm:h-[240px] md:h-[235px] overflow-hidden group cursor-pointer bg-white border border-gray-300"
                >
                  {currentContent.featured.isLogoCard ? (
                    <ApagLogoCard large />
                  ) : (
                    <Image
                      src={currentContent.featured.image!}
                      alt={currentContent.featured.title}
                      fill
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  )}
                </Link>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={currentContent.featured.href}>
                    {currentContent.featured.title}
                  </Link>
                </h1>
                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2 mb-2.5">
                  {currentContent.featured.date}
                </p>
                {currentContent.featured.summary && (
                  <p className="text-[clamp(12.5px,0.72rem+0.2vw,14px)] text-gray-700 leading-relaxed text-justify line-clamp-6">
                    {currentContent.featured.summary}
                  </p>
                )}
              </div>
            </article>

            {/* 2. Lưới 3 bài kế tiếp */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-6 pt-5 border-t border-gray-200">
              {currentContent.grid.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <Link
                    href={article.href}
                    className="block relative w-full h-[145px] sm:h-[155px] overflow-hidden group cursor-pointer bg-white border border-gray-300"
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
            {currentContent.list.length > 0 && (
              <div className="space-y-5 sm:space-y-6 mt-6 pt-5 border-t border-gray-200">
                {currentContent.list.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-4 items-start"
                  >
                    <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0">
                      <Link
                        href={article.href}
                        className="block relative w-full h-full overflow-hidden group cursor-pointer bg-white border border-gray-300"
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
            )}

            {/* 4. Phân trang */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />


            {/* 5. Tìm kiếm thông tin */}
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
