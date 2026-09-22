"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight, Search } from "lucide-react";
import Pagination from "@/components/pagination";
import "@/scss/hop-tac-quoc-te/chuong-trinh-erasmus-plus/chuong-trinh-erasmus-plus.scss";

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

// ─── Dữ liệu Trang 1 (Theo ảnh chụp màn hình 1) ──────────────────────────────

const page1Data: PageData = {
  featured: {
    id: "p1-feat",
    title:
      "Hội thảo Dự án STRIVE 2026 – Tăng cường tính bền vững và thúc đẩy quốc tế hóa giáo dục đại học",
    date: "20:59 28/06/2026",
    image: "/trangChu/slide/strive_hoi_thao.png",
    summary:
      '(apag.edu.vn) - Trong khuôn khổ Dự án "Nâng cao năng lực quốc tế hóa cho các trường đại học mới tại Việt Nam - STRIVE" thuộc Chương trình Erasmus+ của Liên minh châu Âu, từ ngày 25 đến 26/6/2026, tại Trường Đại học Công nghiệp Quảng Ninh đã diễn ra Hội thảo Dự án STRIVE. Hội thảo là diễn đàn để các đơn vị thành viên cùng đánh giá kết quả triển khai dự án, trao đổi kinh nghiệm, thảo luận, đề xuất các giải pháp nhằm nâng cao năng lực quản trị, tăng cường hợp tác quốc tế và thúc đẩy quá trình quốc tế hóa giáo dục đại học tại Việt Nam.',
    href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
  },
  grid: [
    {
      id: "p1-g1",
      title:
        'Hội nghị sinh viên "Nâng cao nhận thức của sinh viên, giảng viên về các cơ hội tham gia Chương trình Erasmus+" – Dự án STRIVE (WP.2, D.5.2)',
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 20/5/2026, tại phòng 3A nhà G, Ban Quản lý khoa học và Hợp tác quốc tế đã chủ trì tổ chức Hội nghị sinh viên: "Nâng cao nhận thức của sinh viên, giảng viên về các cơ ...',
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-g2",
      title:
        "Thông báo Chương trình học bổng trao đổi sinh viên Erasmus+ tại Đại học Tuscia, Cộng hòa Ý năm học 2026 – 2027",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-g3",
      title: "Chương trình tập huấn Dự án STRIVE: Chia sẻ kinh nghiệm thực hiện dự án Erasmus+ KA1",
      image: "/trangChu/slide/hanu_tap_huan.png",
      summary:
        '(apag.edu.vn) - Trong hai ngày 05/01 - 06/01/2026, Trường Đại học Hà Nội (HANU) tổ chức chương trình tập huấn "Chia sẻ kinh nghiệm thực hiện dự án Erasmus+ KA1". Đây là hoạt...',
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
  ],
  list: [
    {
      id: "p1-l1",
      title: "Thông báo tuyển chọn chương trình trao đổi thực tập tại Italia – Hè 2025",
      date: "08:38 26/12/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-l2",
      title: "Bản khảo sát nguyện vọng sinh viên",
      date: "08:35 26/12/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-l3",
      title: "Chương trình Erasmus+ trao đổi dành cho cán bộ hành chính",
      date: "17:16 20/12/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-l4",
      title: "Mẫu Thông báo tuyển chọn giảng viên tham gia hoạt động giảng dạy",
      date: "17:14 20/12/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-l5",
      title: "Thông tin Dự án",
      date: "18:44 24/11/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p1-l6",
      title: "Các thành viên Dự án",
      date: "18:42 24/11/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
  ],
};

// ─── Dữ liệu Trang 2 (Theo ảnh chụp màn hình 2) ──────────────────────────────

const page2Data: PageData = {
  featured: {
    id: "p2-feat",
    title: "Mục đích, mục tiêu của Dự án",
    date: "18:38 24/11/2025",
    isLogoCard: true,
    href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
  },
  grid: [
    {
      id: "p2-g1",
      title: "Kinh phí Dự án",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p2-g2",
      title: "Kết quả Dự án đạt được",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
    {
      id: "p2-g3",
      title: "Hoạt động Hội nghị, Hội thảo, Tập huấn",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
  ],
  list: [
    {
      id: "p2-l1",
      title: "Các gói công việc của Dự án",
      date: "18:21 24/11/2025",
      isLogoCard: true,
      href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus",
    },
  ],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
};

export default function ChuongTrinhErasmusPlusPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const handlePageChange = (pageNum: number) => {
    const target = Math.min(Math.max(pageNum, 1), 2);
    setCurrentPage(target);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
                  CHƯƠNG TRÌNH ERASMUS+
                </span>
              </div>
            </div>

            {/* 1. Bài đầu tiên (Nổi bật nhất: Bố cục ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-5 items-start">
              <div className="w-[48%] max-[480px]:w-full shrink-0">
                <Link
                  href={currentContent.featured.href}
                  className="block relative w-full h-[210px] sm:h-[250px] md:h-[240px] overflow-hidden group cursor-pointer"
                >
                  {currentContent.featured.isLogoCard ? (
                    <ApagLogoBadge size="lg" />
                  ) : (
                    <Image
                      src={currentContent.featured.image!}
                      alt={currentContent.featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  )}
                </Link>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(15px,1rem+0.4vw,21px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={currentContent.featured.href}>{currentContent.featured.title}</Link>
                </h2>

                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2 mb-2.5">
                  {currentContent.featured.date}
                </p>

                {currentContent.featured.summary && (
                  <p className="text-[clamp(12.5px,0.72rem+0.2vw,14.5px)] text-gray-700 leading-relaxed text-justify line-clamp-6">
                    {currentContent.featured.summary}
                  </p>
                )}
              </div>
            </article>

            {/* 2. Hàng 3 bài kế tiếp (Lưới 3 cột bằng nhau) */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-6 pt-5 border-t border-gray-200">
              {currentContent.grid.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <Link
                    href={article.href}
                    className="block relative w-full h-[145px] sm:h-[155px] overflow-hidden group cursor-pointer"
                  >
                    {article.isLogoCard ? (
                      <ApagLogoBadge size="md" />
                    ) : (
                      <Image
                        src={article.image!}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </Link>

                  <h3 className="text-[clamp(13px,0.75rem+0.15vw,15px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-3">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>

                  {article.summary && (
                    <p className="text-[clamp(12px,0.68rem+0.15vw,13px)] text-gray-600 leading-relaxed text-justify mt-1.5 line-clamp-4 flex-1">
                      {article.summary}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {/* 3. Các bài còn lại (Dạng danh sách dọc, ảnh trái - chữ phải) */}
            {currentContent.list.length > 0 && (
              <div className="space-y-5 sm:space-y-6 mt-6 pt-5 border-t border-gray-200">
                {currentContent.list.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-4 items-start"
                  >
                    {/* Cột ảnh nhỏ (~180x120px) hoặc logo card */}
                    <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0">
                      <Link
                        href={article.href}
                        className="block relative w-full h-full overflow-hidden group cursor-pointer"
                      >
                        {article.isLogoCard ? (
                          <ApagLogoBadge size="sm" />
                        ) : (
                          <Image
                            src={article.image!}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </Link>
                    </div>

                    {/* Cột chữ: tiêu đề + ngày giờ + mô tả */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[clamp(13px,0.78rem+0.18vw,15.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                        <Link href={article.href}>{article.title}</Link>
                      </h3>

                      <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-1 mb-1.5">
                        {article.date}
                      </p>

                      {article.summary && (
                        <p className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] text-gray-600 leading-relaxed text-justify line-clamp-3">
                          {article.summary}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* 4. Phân trang (Pagination) cuối trang */}
            <Pagination
              currentPage={currentPage}
              totalPages={2}
              onPageChange={handlePageChange}
            />


            {/* 5. Tìm kiếm thông tin (Hiển thị ở trang 2 theo đúng ảnh chụp màn hình) */}
            {currentPage === 2 && (
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
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
