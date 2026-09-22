"use client";

import { useState, useEffect } from "react";
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
  ExternalLink,
  ShieldCheck,
  Search,
} from "lucide-react";
import "@/scss/hoc-lieu/thu-vien/thu-vien.scss";

import SidebarMenu from "@/components/sidebar-menu";
import { libraryMenuItems } from "@/data/navigation";

const popularNews = [
  { id: 1, title: "Khai trương không gian học tập số và phòng đọc chuyên đề tại Thư viện Phân hiệu Đà Nẵng", href: "http://113.190.240.60:8080/phamquangquyen/" },
  { id: 2, title: "Danh mục giáo trình, bài giảng và tài liệu tham khảo điện tử mới cập nhật năm 2026", href: "/hoc-lieu/thong-tin-tu-lieu" },
  { id: 3, title: "Hướng dẫn cán bộ, giảng viên tra cứu cơ sở dữ liệu số học viện", href: "http://113.190.240.60:8080/phamquangquyen/" },
  { id: 4, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

const services = [
  "Dịch vụ mượn - trả tài liệu in ấn và tra cứu danh mục tự động trên hệ thống OPAC.",
  "Dịch vụ cung cấp bản sao tài liệu số hóa, tài liệu điện tử phục vụ học tập từ xa.",
  "Không gian tự học hiện đại, trang bị Wi-Fi tốc độ cao và hệ thống máy tính tra cứu chuyên dụng.",
  "Dịch vụ cung cấp thông tin theo yêu cầu nghiên cứu đề tài khoa học các cấp tại miền Trung.",
  "Đào tạo kỹ năng thông tin, hướng dẫn tìm kiếm và trích dẫn tài liệu khoa học chuẩn quốc tế.",
];

export default function ThuVienPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "http://113.190.240.60:8080/phamquangquyen/";
    }
  }, []);

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
                <h3 className="text-[clamp(13px,0.75rem+0.2vw,15.5px)] font-bold uppercase tracking-wider">TIN MỚI NHẤT</h3>
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
              <Link href="/hoc-lieu/thu-vien" className="hover:text-[#DA251C]">
                Học liệu
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-[#DA251C] font-semibold">Thư viện</span>
            </div>

            {/* Tiêu đề trang */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3 mb-6">
              <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase">
                Thư viện Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng
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

            {/* Banner thư viện bot03 */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-xs">
              <div className="relative w-full h-[180px] sm:h-[260px]">
                <Image
                  src="/trangChu/nc&ht/bot03_8abd6ad603--1-1c8704e114.png"
                  alt="Thư viện Học viện Hành chính và Quản trị công"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Khối Cổng tra cứu OPAC */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 rounded-lg space-y-3 mb-8 shadow-xs">
              <h2 className="font-extrabold text-[16px] sm:text-[17px] text-[#1E2A5E]">
                Cổng tra cứu Thư viện điện tử OPAC
              </h2>
              <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed">
                Bạn đọc có thể tra cứu toàn bộ cơ sở dữ liệu thư mục sách in, tạp chí khoa học, tài liệu điện tử và tình trạng mượn trả tài liệu trực tiếp thông qua cổng thông tin thư viện.
              </p>
              <div className="pt-2">
                <a
                  href="http://113.190.240.60:8080/phamquangquyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#DA251C] hover:bg-red-700 text-white font-bold text-[13px] px-5 py-2.5 rounded shadow-xs transition-colors cursor-pointer"
                >
                  <Library size={16} /> Đến Cổng Thư viện OPAC trực tuyến
                  <ExternalLink size={14} />
                </a>
                <p className="text-[12px] text-amber-800 italic mt-2">
                  * Ghi chú: Đây là đường dẫn truy cập hệ thống thư viện điện tử tạm thời trong giai đoạn kết nối và đồng bộ dữ liệu số.
                </p>
              </div>
            </div>

            {/* Các dịch vụ */}
            <section className="space-y-4 mb-6">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1E2A5E] uppercase border-b pb-2">
                Các dịch vụ thư viện cung cấp
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((srv, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-50 border border-gray-200 p-3.5 rounded-lg flex items-start gap-2.5 text-[12.5px] sm:text-[13px] text-gray-700"
                  >
                    <ShieldCheck size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Giờ phục vụ */}
            <div className="flex items-center gap-2.5 text-[13px] text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <Clock size={18} className="text-[#DA251C] shrink-0" />
              <span>
                <strong>Thời gian phục vụ bạn đọc tại Phân hiệu Đà Nẵng:</strong> Từ Thứ Hai đến Thứ Sáu (Sáng: 07h30 - 11h30; Chiều: 13h30 - 17h00). Thứ Bảy mở cửa phòng đọc tự do.
              </span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
