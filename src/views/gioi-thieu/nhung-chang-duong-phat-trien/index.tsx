"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Printer, Bookmark, ChevronRight, Clock, Check, Link2, Calendar } from "lucide-react";
import "@/scss/gioi-thieu/nhung-chang-duong-phat-trien/nhung-chang-duong-phat-trien.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 2, title: "Giới thiệu chung về Phân hiệu Học viện tại TP. Đà Nẵng", href: "/gioi-thieu/gioi-thieu-chung" },
  { id: 3, title: "Cơ cấu tổ chức các đơn vị thuộc và trực thuộc Phân hiệu Đà Nẵng", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 4, title: "Những chặng đường phát triển và dấu ấn lịch sử của Phân hiệu", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 5, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
];

export default function NhungChangDuongPhatTrienPage() {
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
              <span className="text-gray-700 font-medium truncate">Những chặng đường phát triển</span>
            </div>

            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug mb-4">
              Những chặng đường xây dựng và phát triển Phân hiệu tại TP. Đà Nẵng
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

            <div className="space-y-6 text-gray-800 text-sm leading-relaxed text-justify">
              <div className="w-full relative aspect-[16/9] bg-white border border-gray-200 rounded overflow-hidden shadow-xs mb-4">
                <Image
                  src="/trangChu/slide/luu-niem-2-899d44225a.png"
                  alt="Tập thể cán bộ giảng viên Phân hiệu qua các thời kỳ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
              <p className="text-center text-xs text-gray-500 italic -mt-2 mb-6">
                Các thế hệ cán bộ, giảng viên và học viên Phân hiệu Học viện tại TP. Đà Nẵng qua các chặng đường phát triển
              </p>

              <div className="border-l-4 border-[#DA251C] pl-4 py-2 bg-red-50/50 rounded-r font-medium text-gray-800">
                Gắn liền với bề dày truyền thống hơn 65 năm của Học viện Hành chính và Quản trị công (tiền thân là Trường Hành chính thành lập năm 1959), Phân hiệu tại TP. Đà Nẵng được thành lập và phát triển nhằm đáp ứng yêu cầu cấp thiết về đào tạo, bồi dưỡng nguồn nhân lực lãnh đạo, quản lý cho khu vực miền Trung và Tây Nguyên.
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#1E2A5E] border-b pb-1">
                  1. Giai đoạn hình thành và đặt nền móng tại khu vực miền Trung
                </h3>
                <p>
                  Nhận thức sâu sắc vị trí chiến lược của miền Trung trong sự nghiệp đổi mới và phát triển đất nước, Học viện đã thành lập cơ sở đào tạo, bồi dưỡng tại Đà Nẵng. Trong những năm đầu, với tinh thần vượt khó, tập thể cán bộ giảng viên đã nhanh chóng ổn định cơ sở vật chất, tổ chức các lớp bồi dưỡng kiến thức quản lý nhà nước ngạch chuyên viên, chuyên viên chính cho hàng nghìn cán bộ thuộc các tỉnh từ Quảng Trị đến Bình Định và Tây Nguyên.
                </p>
              </section>

              <div className="w-full relative aspect-[16/9] bg-white border border-gray-200 rounded overflow-hidden shadow-xs my-4">
                <Image
                  src="/trangChu/slide/a8-141322fba9.png"
                  alt="Hoạt động giảng dạy và học tập tại Phân hiệu Đà Nẵng"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#1E2A5E] border-b pb-1">
                  2. Mở rộng quy mô đào tạo chính quy và sau đại học
                </h3>
                <p>
                  Cùng với sự phát triển kinh tế năng động của thành phố Đà Nẵng và vùng kinh tế trọng điểm miền Trung, Phân hiệu được đầu tư xây dựng cơ sở khang trang tại số 749 đường Trần Hưng Đạo, phường Điện Bàn Đông, TP. Đà Nẵng. Phân hiệu bắt đầu tuyển sinh đào tạo đại học chính quy các ngành Quản lý nhà nước, Luật, Quản trị nhân lực, Lưu trữ học và đào tạo thạc sĩ Quản lý công, mở rộng mạng lưới hợp tác bồi dưỡng chức danh với hầu hết các sở, ban, ngành trong khu vực.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-base text-[#1E2A5E] border-b pb-1">
                  3. Giai đoạn bứt phá, chuyển đổi số và hội nhập hiện đại (Hiện nay)
                </h3>
                <p>
                  Bước vào kỷ nguyên chuyển đổi số và phát triển chính quyền đô thị thông minh, Phân hiệu Đà Nẵng không ngừng đổi mới chương trình bồi dưỡng cán bộ, tích hợp kỹ năng quản trị dữ liệu số, AI trong quản lý công vụ. Phân hiệu tiếp tục khẳng định vị thế là trung tâm đào tạo, bồi dưỡng và nghiên cứu khoa học hành chính uy tín hàng đầu tại khu vực miền Trung - Tây Nguyên.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
