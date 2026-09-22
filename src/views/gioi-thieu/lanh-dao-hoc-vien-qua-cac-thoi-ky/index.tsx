

"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Printer, Bookmark, ChevronRight, Clock, Check, Link2 } from "lucide-react";
import "@/scss/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky/lanh-dao-hoc-vien-qua-cac-thoi-ky.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Các đơn vị thuộc và trực thuộc", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 3, title: "Những chặng đường phát triển", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 4, title: "Lãnh đạo Học viện qua các thời kỳ", href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

const leadersData = [
  { term: "1959 - 1961", name: "Phó Thủ tướng Phan Kế Toại", role: "Trực tiếp chỉ đạo thành lập Trường Hành chính và chủ trì khóa học đầu tiên" },
  { term: "1980 - 1981", name: "GS. Mai Hữu Khuê", role: "Hiệu trưởng Trường Hành chính và Kinh tế Trung ương" },
  { term: "1981 - 1987", name: "Đồng chí Dương Văn Dật", role: "Thứ trưởng Bộ Tài chính kiêm Hiệu trưởng Trường Hành chính Trung ương" },
  { term: "1987 - 1991", name: "GS. Đoàn Trọng Truyến", role: "Bộ trưởng - Tổng Thư ký Hội đồng Bộ trưởng kiêm Hiệu trưởng" },
  { term: "1991 - 1997", name: "GS.TS. Nguyễn Duy Gia", role: "Nguyên Tổng Giám đốc NHNN, Giám đốc Học viện Hành chính Quốc gia" },
  { term: "1997 - 1998", name: "GS.TS. Vũ Huy Từ", role: "Phó Giám đốc phụ trách điều hành Học viện Hành chính Quốc gia" },
  { term: "1998 - 2006", name: "TS. Nguyễn Ngọc Hiến", role: "Thứ trưởng Bộ Tư pháp kiêm Giám đốc Học viện Hành chính Quốc gia" },
  { term: "2007 - 2009", name: "PGS.TS. Nguyễn Trọng Điều", role: "Thứ trưởng Bộ Nội vụ kiêm Giám đốc Học viện Hành chính" },
  { term: "2009 - 2014", name: "GS.TS. Nguyễn Đăng Thành", role: "Thứ trưởng Bộ Nội vụ kiêm Giám đốc Học viện Hành chính Quốc gia" },
  { term: "2014 - 2015", name: "TS. Trần Anh Tuấn", role: "Thứ trưởng Bộ Nội vụ phụ trách, điều hành Học viện" },
  { term: "2015 - 2017", name: "PGS.TS. Triệu Văn Cường", role: "Thứ trưởng Bộ Nội vụ phụ trách, điều hành Học viện" },
  { term: "2017 - 2022", name: "TS. Đặng Xuân Hoan", role: "Ủy viên Thư ký Hội đồng Quốc gia GD&PTNL, Giám đốc Học viện" },
  { term: "2023 - Nay", name: "PGS.TS. Nguyễn Bá Chiến", role: "Giám đốc Học viện Hành chính và Quản trị công" },
];

export default function LanhDaoHocVienQuaCacThoiKyPage() {
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
              <span className="text-gray-700 font-medium truncate">Lãnh đạo qua các thời kỳ</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2A5E] leading-snug mb-4">
              Lãnh đạo Học viện qua các thời kỳ lịch sử (1959 - Nay)
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>07:32 17/08/2026</span>
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

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Trải qua hơn 65 năm xây dựng và trưởng thành, các thế hệ lãnh đạo Học viện Hành chính và Quản trị công qua các thời kỳ đã tận tâm, trí tuệ cống hiến cho sự nghiệp đào tạo, bồi dưỡng đội ngũ công chức và xây dựng nền hành chính nhà nước vững mạnh.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-xs sm:text-sm border border-gray-200 divide-y divide-gray-200">
                <thead className="bg-[#1E2A5E] text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold uppercase tracking-wider">Thời gian</th>
                    <th scope="col" className="px-4 py-3 font-bold uppercase tracking-wider">Họ và tên</th>
                    <th scope="col" className="px-4 py-3 font-bold uppercase tracking-wider">Chức vụ / Nhiệm vụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {leadersData.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                      <td className="px-4 py-3 font-bold text-[#DA251C] whitespace-nowrap">{item.term}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">{item.name}</td>
                      <td className="px-4 py-3 text-gray-700">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
