"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Printer, Bookmark, ChevronRight, Clock, Download, ExternalLink, Check, Link2, Palette, ShieldCheck } from "lucide-react";
import "@/scss/gioi-thieu/logo-chinh-thuc/logo-chinh-thuc.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Các đơn vị thuộc và trực thuộc", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 3, title: "Những chặng đường phát triển", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 4, title: "Lãnh đạo Học viện qua các thời kỳ", href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

export default function LogoChinhThucPage() {
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
              <span className="text-gray-700 font-medium truncate">Logo chính thức</span>
            </div>

            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug mb-4">
              Thông báo về việc sử dụng logo Học viện Hành chính và Quản trị công
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>14:35 11/03/2025</span>
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
              <p className="font-semibold text-[#1E2A5E] bg-gray-50 p-3.5 rounded border border-gray-200">
                (apag.edu.vn) – Ngày 10/3/2025, Học viện Hành chính và Quản trị công ban hành Thông báo số 286-TB/HVHC&QTC về việc sử dụng logo Học viện Hành chính và Quản trị công.
              </p>

              {/* Khung hiển thị Logo chính thức */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-gray-200 rounded shadow-xs">
                <div className="w-40 h-40 relative shrink-0 flex items-center justify-center p-2 bg-white rounded-full border-2 border-red-100 shadow-xs">
                  <Image
                    src="/icon.png"
                    alt="Logo chính thức Học viện Hành chính và Quản trị công"
                    width={130}
                    height={130}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-[#1E2A5E] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#DA251C]" />
                    Ý nghĩa biểu trưng của Logo
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Logo thể hiện biểu trưng cho sự phát triển vững mạnh của nền công vụ Việt Nam hiện đại, kết hợp hài hòa giữa ngọn đuốc tri thức khoa học quản trị công với trách nhiệm phụng sự Tổ quốc. Bố cục hình tròn tượng trưng cho sự đoàn kết, tính kỷ cương và hội nhập toàn cầu.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://drive.google.com/file/d/1NFhwbPC6DGvSXXgvWreA_0ZxLU_EfzRE/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#DA251C] hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded transition-colors shadow-xs"
                    >
                      <Download size={14} />
                      Tải về bộ tệp logo chuẩn (Google Drive)
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Banner nhận diện */}
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-[#1E2A5E] uppercase border-b pb-1">
                  Biểu trưng Banner nhận diện thương hiệu
                </h3>
                <div className="w-full relative h-24 bg-white border border-gray-200 rounded p-2 flex items-center justify-center">
                  <Image
                    src="/apag_banner.png"
                    alt="Banner nhận diện Học viện Hành chính và Quản trị công"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Bảng màu */}
              <section className="space-y-3 pt-2">
                <h3 className="font-bold text-sm text-[#1E2A5E] uppercase flex items-center gap-2 border-b pb-1">
                  <Palette className="w-4 h-4 text-[#DA251C]" />
                  Quy chuẩn mã màu thương hiệu
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-[#DA251C] shrink-0 border shadow-xs" />
                    <div>
                      <h4 className="font-bold text-xs text-[#1E2A5E]">Đỏ cờ (Primary Red)</h4>
                      <code className="text-[11px] text-gray-500 font-mono">#DA251C</code>
                      <p className="text-[11px] text-gray-600">Trách nhiệm phụng sự và lòng nhiệt huyết công vụ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-[#1E2A5E] shrink-0 border shadow-xs" />
                    <div>
                      <h4 className="font-bold text-xs text-[#1E2A5E]">Xanh công vụ (Navy Blue)</h4>
                      <code className="text-[11px] text-gray-500 font-mono">#1E2A5E</code>
                      <p className="text-[11px] text-gray-600">Minh bạch, pháp quyền và sự chuyên nghiệp</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
