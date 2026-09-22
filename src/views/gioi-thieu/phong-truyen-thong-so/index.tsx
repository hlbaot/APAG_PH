"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Printer, Bookmark, ChevronRight, Clock, ExternalLink, Eye, Check, Link2, Sparkles, Layers } from "lucide-react";
import "@/scss/gioi-thieu/phong-truyen-thong-so/phong-truyen-thong-so.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Các đơn vị thuộc và trực thuộc", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 3, title: "Những chặng đường phát triển", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 4, title: "Lãnh đạo Học viện qua các thời kỳ", href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

export default function PhongTruyenThongSoPage() {
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
              <span className="text-gray-700 font-medium truncate">Phòng truyền thống số</span>
            </div>

            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug mb-4">
              Phòng truyền thống số 360 độ - Virtual Museum APAG
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>20:00 20/06/2025</span>
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
                  src="/trangChu/slide/20260828105210-897744165165165165165-03a85ffb4d.png"
                  alt="Không gian số hóa và chuyển đổi số tại Học viện"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-[#1E2A5E] text-white p-6 sm:p-7 rounded-lg shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={16} /> Công nghệ thực tế ảo tương tác 360 độ
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Trải nghiệm Không gian 65 năm Lịch sử qua Công nghệ thực tế ảo
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  Không gian số hóa 3D cho phép học viên, cựu sinh viên và đối tác trong và ngoài nước tham quan toàn cảnh lịch sử xây dựng và trưởng thành của Học viện qua công nghệ thực tế ảo tương tác trực quan mọi lúc, mọi nơi.
                </p>
                <div className="pt-2">
                  <a
                    href="https://360napa.webopsagency.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#DA251C] hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded shadow transition-colors"
                  >
                    <Eye size={16} /> Bắt đầu tham quan 360 độ ngay
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <section className="space-y-3 pt-4">
                <h3 className="font-bold text-sm sm:text-base text-[#1E2A5E] uppercase border-b pb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#DA251C]" />
                  Điểm nổi bật của Phòng truyền thống số
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <li className="bg-gray-50 border border-gray-200 p-3 rounded flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1E2A5E] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700">Tái hiện chân thực không gian phòng truyền thống với góc nhìn 360 độ sắc nét.</span>
                  </li>
                  <li className="bg-gray-50 border border-gray-200 p-3 rounded flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1E2A5E] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700">Tích hợp thuyết minh âm thanh tự động và tư liệu hình ảnh lịch sử từ năm 1959.</span>
                  </li>
                  <li className="bg-gray-50 border border-gray-200 p-3 rounded flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1E2A5E] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700">Tra cứu thông tin các thế hệ lãnh đạo và những phần thưởng cao quý trực quan.</span>
                  </li>
                  <li className="bg-gray-50 border border-gray-200 p-3 rounded flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1E2A5E] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700">Tương thích hoàn hảo trên mọi thiết bị máy tính, máy tính bảng và điện thoại thông minh.</span>
                  </li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
