"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  Bookmark,
  Share2,
  ChevronRight,
  Clock,
  Building2,
  GraduationCap,
  Landmark,
  MapPin,
  Check,
  Link2,
} from "lucide-react";
import "@/scss/gioi-thieu/don-vi-thuoc-va-truc-thuoc/don-vi-thuoc-va-truc-thuoc.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 2, title: "Giới thiệu chung về Phân hiệu Học viện tại TP. Đà Nẵng", href: "/gioi-thieu/gioi-thieu-chung" },
  { id: 3, title: "Cơ cấu tổ chức các đơn vị thuộc và trực thuộc Phân hiệu Đà Nẵng", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 4, title: "Những chặng đường phát triển và dấu ấn lịch sử của Phân hiệu", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 5, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
];

export default function DonViThuocVaTrucThuocPage() {
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
          {/* CỘT TRÁI */}
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

          {/* CỘT PHẢI */}
          <main className="col-span-8 xl:col-span-9 max-[480px]:col-span-12 bg-white border border-gray-200 rounded-xs shadow-2xs p-4 sm:p-6 md:p-8">
            <div className="bg-[#f0f2f5] px-3 py-2 rounded-xs flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-5">
              <Link href="/" className="bg-[#1E2A5E] text-white p-1 rounded-xs hover:bg-[#DA251C] transition-colors inline-flex items-center justify-center" aria-label="Trang chủ">
                <Home className="w-3.5 h-3.5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/gioi-thieu/gioi-thieu-chung" className="font-bold text-[#DA251C] hover:underline uppercase">GIỚI THIỆU</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium truncate">Các đơn vị thuộc và trực thuộc</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2A5E] leading-snug mb-4">
              Cơ cấu các đơn vị thuộc và trực thuộc Phân hiệu tại TP. Đà Nẵng
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Cập nhật ngày 20/08/2026 - Phân hiệu Đà Nẵng</span>
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

            <div className="space-y-8">
              {/* 1. Phòng Ban chức năng */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-[#1E2A5E] pb-2 mb-4">
                  <Building2 className="w-5 h-5 text-[#DA251C]" />
                  <h2 className="text-base sm:text-lg font-bold text-[#1E2A5E] uppercase tracking-wide">
                    I. Các Phòng, Ban chức năng trực thuộc Phân hiệu
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                    <h3 className="font-bold text-[#DA251C] text-sm">Phòng Quản lý Đào tạo & Bồi dưỡng</h3>
                    <p className="text-xs text-gray-600 mt-1">Tổ chức tuyển sinh, quản lý quá trình đào tạo đại học, thạc sĩ và triển khai các lớp bồi dưỡng công chức, viên chức tại miền Trung.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                    <h3 className="font-bold text-[#DA251C] text-sm">Phòng Tổ chức – Hành chính</h3>
                    <p className="text-xs text-gray-600 mt-1">Tham mưu quản lý nhân sự, chế độ chính sách cho cán bộ giảng viên, công tác văn thư lưu trữ và đối nội - đối ngoại.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                    <h3 className="font-bold text-[#DA251C] text-sm">Phòng Kế hoạch – Tài vụ</h3>
                    <p className="text-xs text-gray-600 mt-1">Quản lý tài chính, ngân sách, học phí và các nguồn kinh phí hoạt động thường xuyên theo quy định nhà nước.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                    <h3 className="font-bold text-[#DA251C] text-sm">Ban Quản trị Cơ sở vật chất & Hậu cần</h3>
                    <p className="text-xs text-gray-600 mt-1">Quản lý hệ thống giảng đường, phòng máy tính, ký túc xá học viên và bảo đảm an ninh trật tự tại 749 Trần Hưng Đạo.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded sm:col-span-2">
                    <h3 className="font-bold text-[#DA251C] text-sm">Ban Quản lý Khoa học & Hợp tác phát triển</h3>
                    <p className="text-xs text-gray-600 mt-1">Điều phối hoạt động NCKH, sáng kiến kinh nghiệm, tổ chức hội thảo và xúc tiến hợp tác đào tạo với các địa phương miền Trung - Tây Nguyên.</p>
                  </div>
                </div>
              </section>

              {/* 2. Bộ môn chuyên môn */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-[#1E2A5E] pb-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-[#DA251C]" />
                  <h2 className="text-base sm:text-lg font-bold text-[#1E2A5E] uppercase tracking-wide">
                    II. Các Bộ môn chuyên môn thuộc Phân hiệu Đà Nẵng
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white border border-gray-200 p-3.5 rounded shadow-2xs">
                    <h4 className="font-bold text-sm text-[#1E2A5E]">Bộ môn Quản lý Nhà nước & Hành chính học</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Giảng dạy khối kiến thức lý luận hành chính, cải cách nền hành chính nhà nước và kỹ năng quản lý công.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-3.5 rounded shadow-2xs">
                    <h4 className="font-bold text-sm text-[#1E2A5E]">Bộ môn Luật & Pháp chế</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Giảng dạy pháp luật hành chính, kỹ năng xây dựng văn bản quy phạm pháp luật và pháp luật chuyên ngành.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-3.5 rounded shadow-2xs">
                    <h4 className="font-bold text-sm text-[#1E2A5E]">Bộ môn Quản trị Nhân lực & Văn phòng</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Đào tạo nghiệp vụ văn thư lưu trữ điện tử, quản trị nhân sự công vụ và chuyển đổi số văn phòng.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-3.5 rounded shadow-2xs">
                    <h4 className="font-bold text-sm text-[#1E2A5E]">Bộ môn Kinh tế & Quản lý phát triển</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Giảng dạy tài chính công, quản lý dự án công và chính sách phát triển kinh tế - xã hội địa phương.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-3.5 rounded shadow-2xs sm:col-span-2">
                    <h4 className="font-bold text-sm text-[#1E2A5E]">Bộ môn Khoa học Cơ bản & Tin học</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Đảm nhiệm khối kiến thức đại cương, ngoại ngữ chuyên ngành và tin học ứng dụng trong quản lý nhà nước.</p>
                  </div>
                </div>
              </section>

              {/* 3. Tổ chức đoàn thể */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-[#DA251C] pb-2 mb-4">
                  <Landmark className="w-5 h-5 text-[#DA251C]" />
                  <h2 className="text-base sm:text-lg font-bold text-[#DA251C] uppercase tracking-wide">
                    III. Các Tổ chức đoàn thể
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded border border-red-100 bg-red-50/40">
                    <h3 className="font-bold text-[#1E2A5E] text-sm">Công đoàn Phân hiệu</h3>
                    <p className="text-xs text-gray-600 mt-1">Chăm lo đời sống vật chất, tinh thần và bảo vệ quyền lợi hợp pháp của viên chức, người lao động.</p>
                  </div>
                  <div className="p-4 rounded border border-red-100 bg-red-50/40">
                    <h3 className="font-bold text-[#1E2A5E] text-sm">Đoàn Thanh niên Phân hiệu</h3>
                    <p className="text-xs text-gray-600 mt-1">Tổ chức phong trào thanh niên xung kích, tình nguyện, rèn luyện kỹ năng mềm và nghiên cứu trẻ.</p>
                  </div>
                  <div className="p-4 rounded border border-red-100 bg-red-50/40">
                    <h3 className="font-bold text-[#1E2A5E] text-sm">Hội Cựu chiến binh</h3>
                    <p className="text-xs text-gray-600 mt-1">Phát huy truyền thống Bộ đội Cụ Hồ trong công tác giảng dạy, nghiên cứu và giáo dục chính trị.</p>
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
