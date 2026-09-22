"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  ChevronRight,
  Clock,
  Check,
  Link2,
  Library,
  BookOpen,
  ExternalLink,
  Search,
} from "lucide-react";
import "@/scss/hoc-lieu/hoc-lieu.scss";

import SidebarMenu from "@/components/sidebar-menu";
import { libraryMenuItems } from "@/data/navigation";

const popularNews = [
  { id: 1, title: "Khai trương không gian học tập số và phòng đọc chuyên đề tại Thư viện", href: "http://113.190.240.60:8080/phamquangquyen/" },
  { id: 2, title: "Danh mục giáo trình, bài giảng và tài liệu tham khảo điện tử mới cập nhật", href: "/hoc-lieu/thong-tin-tu-lieu" },
  { id: 3, title: "Hướng dẫn kết nối cơ sở dữ liệu học thuật quốc tế ScienceDirect, ProQuest", href: "http://113.190.240.60:8080/phamquangquyen/" },
  { id: 4, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

export default function HocLieuPage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

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
          {/* CỘT TRÁI (SIDEBAR) */}
          <aside className="col-span-4 xl:col-span-3 max-[480px]:col-span-12 flex flex-col gap-6">
            <SidebarMenu title="HỌC LIỆU" items={libraryMenuItems} />

            <div className="bg-white border border-gray-200 rounded-xs shadow-2xs overflow-hidden">
              <div className="bg-[#1E2A5E] text-white px-4 py-3">
                <h3 className="text-[clamp(13px,0.75rem+0.2vw,15.5px)] font-bold uppercase tracking-wider">TIN XEM NHIỀU</h3>
              </div>
              <div className="divide-y divide-gray-100 p-2">
                {popularNews.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-start gap-2.5 p-2 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-100 text-[#DA251C] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#DA251C] group-hover:text-white transition-colors">
                      {item.id}
                    </span>
                    <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] text-gray-700 font-medium group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* CỘT PHẢI (MAIN CONTENT) */}
          <main className="col-span-8 xl:col-span-9 max-[480px]:col-span-12 bg-white border border-gray-200 rounded-xs p-4 sm:p-6 md:p-8 shadow-2xs">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-gray-500 border-b border-gray-100 pb-3 mb-4">
              <Link href="/" className="hover:text-[#DA251C] flex items-center gap-1">
                <Home size={14} /> Trang chủ
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <Link href="/hoc-lieu/thong-tin-tu-lieu" className="hover:text-[#DA251C]">
                Học liệu
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-[#DA251C] font-semibold">Tổng quan học liệu</span>
            </div>

            {/* Tiêu đề trang */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3 mb-6">
              <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase">
                Trung tâm Thông tin - Thư viện & Học liệu số
              </h1>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1 px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 hover:text-[#DA251C] transition-colors cursor-pointer text-[12px]"
                >
                  <Printer size={13} />
                  <span>In bài</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center gap-1 px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 hover:text-[#DA251C] transition-colors cursor-pointer text-[12px]"
                >
                  {copied ? <Check size={13} className="text-green-600" /> : <Link2 size={13} />}
                  <span>{copied ? "Đã copy" : "Copy link"}</span>
                </button>
              </div>
            </div>

            {/* Banner Học Liệu bot03 */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-xs">
              <div className="relative w-full h-[180px] sm:h-[260px]">
                <Image
                  src="/trangChu/nc&ht/bot03_8abd6ad603--1-1c8704e114.png"
                  alt="Thư viện và Học liệu số Học viện Hành chính và Quản trị công"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Giới thiệu */}
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed bg-blue-50/50 p-4 border-l-4 border-[#1E2A5E] rounded-r mb-8">
              Trung tâm Thông tin - Thư viện phục vụ nhu cầu tra cứu, nghiên cứu khoa học, học tập của cán bộ, giảng viên, học viên và sinh viên Học viện với kho tài nguyên hơn 100.000 bản sách, tạp chí chuyên khảo và cơ sở dữ liệu số chuyên ngành quản lý nhà nước.
            </p>

            {/* Hai phân khu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-2xs space-y-3 hover:border-red-400 transition-colors">
                <div className="w-11 h-11 rounded-full bg-red-50 text-[#DA251C] flex items-center justify-center">
                  <Library size={24} />
                </div>
                <h2 className="text-[16px] font-bold text-[#1E2A5E]">
                  Trung tâm Thư viện & Cổng tra cứu OPAC
                </h2>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  Quản lý hệ thống kho sách giấy, phòng mượn, phòng đọc đa phương tiện và cổng tra cứu thư mục trực tuyến phục vụ bạn đọc 24/7.
                </p>
                <div className="pt-2">
                  <a
                    href="http://113.190.240.60:8080/phamquangquyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#DA251C] hover:underline"
                  >
                    Xem chi tiết dịch vụ thư viện
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-2xs space-y-3 hover:border-blue-400 transition-colors">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-[#1E2A5E] flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-[16px] font-bold text-[#1E2A5E]">
                  Thông tin Tư liệu & Kho Học liệu số
                </h2>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  Lưu trữ các công trình nghiên cứu khoa học, luận án tiến sĩ, luận văn thạc sĩ, kỷ yếu hội thảo và bộ giáo trình nội bộ đã được số hóa.
                </p>
                <div className="pt-2">
                  <Link
                    href="/hoc-lieu/thong-tin-tu-lieu"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#1E2A5E] hover:underline"
                  >
                    Khám phá kho tư liệu số
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
