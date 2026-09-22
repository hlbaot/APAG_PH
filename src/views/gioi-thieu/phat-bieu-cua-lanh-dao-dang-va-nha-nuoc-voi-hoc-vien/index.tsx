"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Printer, Bookmark, ChevronRight, Clock, Check, Link2, Calendar } from "lucide-react";
import "@/scss/gioi-thieu/phat-bieu-cua-lanh-dao-dang-va-nha-nuoc-voi-hoc-vien/phat-bieu-cua-lanh-dao-dang-va-nha-nuoc-voi-hoc-vien.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Các đơn vị thuộc và trực thuộc", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 3, title: "Những chặng đường phát triển", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 4, title: "Lãnh đạo Học viện qua các thời kỳ", href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

export default function PhatBieuCuaLanhDaoDangVaNhaNuocVoiHocVienPage() {
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
              <span className="text-gray-700 font-medium truncate">Phát biểu của lãnh đạo Đảng & Nhà nước</span>
            </div>

            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug mb-4">
              Phát biểu của Lãnh đạo Đảng và Nhà nước đối với Học viện
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>10:30 15/05/2026</span>
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

            <div className="space-y-6 text-gray-800 text-sm leading-relaxed text-justify">
              <div className="w-full relative aspect-[16/9] bg-white border border-gray-200 rounded overflow-hidden shadow-xs mb-4">
                <Image
                  src="/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png"
                  alt="Lãnh đạo phát biểu chỉ đạo tại Học viện"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
              <p className="text-center text-xs text-gray-500 italic -mt-2 mb-6">
                Lãnh đạo Đảng, Nhà nước và Bộ Nội vụ phát biểu tại Lễ khai giảng và bế giảng trao bằng tốt nghiệp
              </p>

              <div className="space-y-4 divide-y divide-gray-200">
                <article className="pt-4 first:pt-0 space-y-2">
                  <span className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#DA251C]" /> Ngày 15/05/2024
                  </span>
                  <h3 className="font-bold text-base text-[#1E2A5E]">
                    Chỉ đạo của Tổng Bí thư tại Lễ kỷ niệm ngày truyền thống Học viện
                  </h3>
                  <p className="text-gray-700">
                    Học viện phải thực sự là cái nôi đào tạo ra những cán bộ công chức vừa hồng vừa chuyên, có tư duy kiến tạo, bản lĩnh vững vàng, dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung của đất nước trong kỷ nguyên phát triển mới.
                  </p>
                </article>

                <article className="pt-4 space-y-2">
                  <span className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#DA251C]" /> Ngày 05/09/2025
                  </span>
                  <h3 className="font-bold text-base text-[#1E2A5E]">
                    Thông điệp của Chủ tịch nước gửi các thế hệ giảng viên và học viên nhân dịp năm học mới
                  </h3>
                  <p className="text-gray-700">
                    Biểu dương những nỗ lực to lớn của đội ngũ thầy cô giáo Học viện Hành chính và Quản trị công trong việc đổi mới phương pháp giảng dạy, đưa công nghệ số và thực tiễn vào từng bài giảng.
                  </p>
                </article>

                <article className="pt-4 space-y-2">
                  <span className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#DA251C]" /> Ngày 12/12/2025
                  </span>
                  <h3 className="font-bold text-base text-[#1E2A5E]">
                    Ý kiến chỉ đạo của Thủ tướng Chính phủ tại Diễn đàn Quản trị công Quốc gia
                  </h3>
                  <p className="text-gray-700">
                    Đề nghị Học viện đi đầu trong việc nghiên cứu cơ chế thử nghiệm chính sách (Sandbox), cải cách thủ tục hành chính, cung cấp luận cứ khoa học để hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa.
                  </p>
                </article>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
