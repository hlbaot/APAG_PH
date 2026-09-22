"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Printer, Bookmark, ChevronRight, Clock, Check, Link2, Award, Medal, Star } from "lucide-react";
import "@/scss/gioi-thieu/nhung-phan-thuong-va-danh-hieu-cao-quy/nhung-phan-thuong-va-danh-hieu-cao-quy.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Các đơn vị thuộc và trực thuộc", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 3, title: "Những chặng đường phát triển", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 4, title: "Lãnh đạo Học viện qua các thời kỳ", href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

const tapTheAwards = [
  "Huân chương Độc lập hạng Ba (1994)",
  "Huân chương Độc lập hạng Nhì (2002)",
  "Cờ thi đua 'Đảng bộ có thành tích trong hoạt động xây dựng Đảng' (2000 - 2002)",
  "Bằng khen 'Đảng bộ trong sạch vững mạnh tiêu biểu 5 năm liền' (2001 - 2005)",
  "04 đơn vị thuộc Học viện được tặng thưởng Huân chương Lao động hạng Ba",
  "04 đơn vị được Thủ tướng Chính phủ tặng Bằng khen",
  "12 đơn vị được Bộ Nội vụ tặng Cờ thi đua xuất sắc",
  "Hàng trăm lượt tập thể đạt danh hiệu Tập thể lao động xuất sắc qua các năm",
];

const caNhanAwards = [
  "01 Nhà giáo được tặng thưởng Huân chương Độc lập hạng Nhất",
  "01 Nhà giáo được tặng thưởng Huân chương Độc lập hạng Nhì",
  "01 Nhà giáo được tặng thưởng Huân chương Độc lập hạng Ba",
  "02 Nhà giáo được phong tặng danh hiệu Nhà giáo Nhân dân",
  "12 Nhà giáo được phong tặng danh hiệu Nhà giáo Ưu tú",
  "06 Cán bộ, công chức, viên chức được tặng Huân chương Lao động hạng Ba",
  "14 Cán bộ được Thủ tướng Chính phủ trao tặng Bằng khen",
  "116 Cán bộ, giảng viên được trao tặng Huy chương Vì sự nghiệp giáo dục",
  "75 Giảng viên được công nhận Giảng viên dạy giỏi cấp Học viện",
];

export default function NhungPhanThuongVaDanhHieuCaoQuyPage() {
  const [copied, setCopied] = useState(false);
  const handlePrint = () => { if (typeof window !== "undefined") window.print(); };
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full bg-[#fdfdfd] py-6 sm:py-8">
      <div className="w-full max-w-[1360px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          <aside className="col-span-4 xl:col-span-3 max-[480px]:col-span-12 flex flex-col gap-6">
            <SidebarMenu title="GIỚI THIỆU" items={introMenuItems} />


            <div className="bg-white border border-gray-200 rounded-xs shadow-2xs overflow-hidden">
              <div className="bg-[#1E2A5E] text-white px-4 py-3">
                <h3 className="text-[clamp(13px,0.75rem+0.2vw,15.5px)] font-bold uppercase tracking-wider">TIN ĐỌC NHIỀU</h3>
              </div>
              <div className="divide-y divide-gray-100 p-2 sm:p-3">
                {popularNews.map((news) => (
                  <Link key={news.id} href={news.href} className="flex items-start gap-2.5 py-2.5 px-2 rounded-xs hover:bg-gray-50 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A5E] group-hover:bg-[#DA251C] shrink-0 mt-2 transition-colors" />
                    <p className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-semibold text-gray-800 group-hover:text-[#DA251C] transition-colors leading-snug">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <main className="col-span-8 xl:col-span-9 max-[480px]:col-span-12 bg-white border border-gray-200 rounded-xs shadow-2xs p-4 sm:p-6 md:p-8">
            <div className="bg-[#f0f2f5] px-3 py-2 rounded-xs flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-5">
              <Link href="/" className="bg-[#1E2A5E] text-white p-1 rounded-xs hover:bg-[#DA251C] transition-colors inline-flex items-center justify-center" aria-label="Trang chủ">
                <Home className="w-3.5 h-3.5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/gioi-thieu/gioi-thieu-chung" className="font-bold text-[#DA251C] hover:underline uppercase">GIỚI THIỆU</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium truncate">Phần thưởng và danh hiệu cao quý</span>
            </div>

            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug mb-4">
              Những phần thưởng và danh hiệu cao quý của Đảng và Nhà nước trao tặng
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>09:01 25/04/2014</span>
              </div>
              <div className="flex items-center gap-3">
                <button type="button" onClick={handlePrint} className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-gray-100 rounded transition-colors cursor-pointer" title="In">
                  <Printer className="w-4 h-4" />
                </button>
                <button type="button" onClick={handleCopyLink} className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-gray-100 rounded transition-colors cursor-pointer" title="Chép link">
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
              <div className="w-full relative aspect-[16/9] bg-white border border-gray-200 rounded overflow-hidden shadow-xs mb-4">
                <Image
                  src="/trangChu/slide/a0-f97775f053.png"
                  alt="Lễ trao thưởng và vinh danh tại Học viện"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* 1. Về tập thể */}
              <section className="bg-amber-50/50 border border-amber-200 p-5 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-[#DA251C] font-bold text-base uppercase">
                  <Award className="w-5 h-5" />
                  <h2>1. Khen thưởng cấp Nhà nước dành cho Tập thể</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {tapTheAwards.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded border border-amber-100 shadow-2xs">
                      <Star size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 2. Về cá nhân */}
              <section className="bg-blue-50/50 border border-blue-200 p-5 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-[#1E2A5E] font-bold text-base uppercase">
                  <Medal className="w-5 h-5" />
                  <h2>2. Danh hiệu cao quý dành cho Cá nhân</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {caNhanAwards.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded border border-blue-100 shadow-2xs">
                      <Medal size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
