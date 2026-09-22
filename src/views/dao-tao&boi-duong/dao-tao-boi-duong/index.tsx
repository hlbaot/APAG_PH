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
  Briefcase,
  Award,
  CheckCircle2,
} from "lucide-react";
import SidebarMenu from "@/components/sidebar-menu";
import { trainingMenuItems } from "@/data/navigation";

const popularNews = [
  { id: 1, title: "Thông báo chiêu sinh các lớp bồi dưỡng ngạch chuyên viên, chuyên viên chính tại Phân hiệu Đà Nẵng", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 2, title: "Kế hoạch bồi dưỡng lãnh đạo, quản lý cấp phòng và tương đương năm 2026", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 3, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 4, title: "Thông báo tuyển sinh đào tạo trình độ Thạc sĩ đợt 1 năm 2026", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { id: 5, title: "Tập huấn kỹ năng số và chuyển đổi số trong quản lý nhà nước cho cán bộ miền Trung", href: "/tin-tuc/tin-tuc" },
];

const courses = [
  {
    title: "Bồi dưỡng ngạch Chuyên viên cao cấp và tương đương",
    duration: "240 tiết (tập trung hoặc vừa làm vừa học)",
    target: "Công chức, viên chức giữ ngạch Chuyên viên chính hoặc tương đương đã được quy hoạch ngạch Chuyên viên cao cấp tại các tỉnh, thành miền Trung - Tây Nguyên.",
    content: "Hoàn thiện tư duy chiến lược, năng lực xây dựng thể chế và xử lý các vấn đề chính sách phức tạp tầm quốc gia.",
  },
  {
    title: "Bồi dưỡng ngạch Chuyên viên chính và tương đương",
    duration: "160 tiết (học trực tiếp kết hợp trực tuyến)",
    target: "Công chức, viên chức giữ ngạch Chuyên viên hoặc tương đương có đủ điều kiện thi nâng ngạch Chuyên viên chính.",
    content: "Nâng cao năng lực phân tích chính sách, tổ chức thực thi công vụ và điều hành hoạt động tại cơ quan, đơn vị.",
  },
  {
    title: "Bồi dưỡng ngạch Chuyên viên và tương đương",
    duration: "120 tiết",
    target: "Công chức, viên chức mới được tuyển dụng hoặc đang giữ ngạch Cán sự chuẩn bị chuyển ngạch Chuyên viên.",
    content: "Trang bị kiến thức tổng quan về bộ máy nhà nước, kỹ năng soạn thảo văn bản quản lý nhà nước và văn hóa công vụ.",
  },
  {
    title: "Bồi dưỡng lãnh đạo, quản lý cấp Vụ, cấp Sở và tương đương",
    duration: "80 tiết",
    target: "Cán bộ giữ chức vụ hoặc quy hoạch chức danh Giám đốc Sở, Phó Giám đốc Sở và tương đương các tỉnh thành khu vực miền Trung.",
    content: "Nâng cao năng lực lãnh đạo, quản trị chiến lược ngành và địa phương, quản lý khủng hoảng truyền thông trong khu vực công.",
  },
  {
    title: "Bồi dưỡng lãnh đạo, quản lý cấp Phòng và tương đương",
    duration: "60 tiết",
    target: "Trưởng phòng, Phó trưởng phòng và tương đương thuộc các cơ quan nhà nước, đơn vị sự nghiệp công lập trên địa bàn miền Trung.",
    content: "Kỹ năng phân công công việc, điều hành cuộc họp, kiểm tra giám sát và tạo động lực làm việc cho cấp dưới.",
  },
  {
    title: "Bồi dưỡng kỹ năng số và chuyển đổi số trong quản lý nhà nước",
    duration: "40 tiết",
    target: "Cán bộ, công chức, viên chức tham gia các ban chỉ đạo chuyển đổi số và vận hành hệ thống thông tin chính quyền điện tử.",
    content: "Khai thác dữ liệu lớn, an toàn thông tin, sử dụng AI trong phân tích hồ sơ hành chính và cung cấp dịch vụ công trực tuyến.",
  },
];

export default function DaoTaoBoiDuongPage() {
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
            <SidebarMenu title="ĐÀO TẠO, BỒI DƯỠNG" items={trainingMenuItems} />

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
              <Link href="/dao-tao&boi-duong/dao-tao-boi-duong" className="hover:text-[#DA251C]">
                Bồi dưỡng
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-[#DA251C] font-semibold">Đào tạo bồi dưỡng</span>
            </div>

            {/* Tiêu đề trang */}
            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase mb-3">
              Chương trình Đào tạo, Bồi dưỡng Cán bộ, Công chức, Viên chức
            </h1>

            {/* Meta & Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] sm:text-[13px] text-gray-500 border-b border-gray-200 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#DA251C]" />
                <span>Cập nhật ngày: 20/08/2026</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1 px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 hover:text-[#DA251C] transition-colors cursor-pointer"
                >
                  <Printer size={13} />
                  <span>In bài</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center gap-1 px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 hover:text-[#DA251C] transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} className="text-green-600" /> : <Link2 size={13} />}
                  <span>{copied ? "Đã copy link" : "Copy link"}</span>
                </button>
              </div>
            </div>

            {/* Banner ảnh đào tạo bồi dưỡng */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-xs">
              <div className="relative w-full h-[240px] sm:h-[340px]">
                <Image
                  src="/trangChu/slide/a8-141322fba9.png"
                  alt="Hoạt động bồi dưỡng cán bộ công chức tại Phân hiệu Đà Nẵng"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="p-2.5 text-center text-[12px] text-gray-500 bg-gray-50 border-t border-gray-100 italic">
                Lớp bồi dưỡng kỹ năng lãnh đạo, quản lý và điều hành công vụ hiện đại tại Phân hiệu Đà Nẵng
              </p>
            </div>

            {/* Giới thiệu */}
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed bg-amber-50/50 p-4 border-l-4 border-amber-500 rounded-r mb-6">
              Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng đảm nhiệm nhiệm vụ đào tạo, bồi dưỡng, nâng cao năng lực cho đội ngũ cán bộ, công chức, viên chức tại các tỉnh, thành phố khu vực miền Trung - Tây Nguyên theo tiêu chuẩn ngạch công chức và tiêu chuẩn chức danh lãnh đạo, quản lý.
            </p>

            {/* Các khóa bồi dưỡng */}
            <section className="space-y-4 mb-8">
              <div className="flex items-center gap-2 border-b-2 border-[#1E2A5E] pb-2">
                <Briefcase size={22} className="text-[#DA251C]" />
                <h2 className="text-[17px] sm:text-[18px] font-bold text-[#1E2A5E] uppercase tracking-wide">
                  Các chương trình Bồi dưỡng trọng điểm
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {courses.map((c, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-5 rounded-lg shadow-2xs space-y-2 hover:border-[#1E2A5E] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-bold text-[15px] text-[#1E2A5E]">{c.title}</h3>
                      <span className="flex items-center gap-1 text-[12px] text-[#DA251C] font-semibold bg-red-50 px-2.5 py-1 rounded w-fit">
                        <Clock size={12} /> {c.duration}
                      </span>
                    </div>
                    <div className="text-[13px] text-gray-700">
                      <span className="font-semibold text-gray-800">Đối tượng:</span> {c.target}
                    </div>
                    <div className="text-[13px] text-gray-600">
                      <span className="font-semibold text-gray-800">Nội dung cốt lõi:</span> {c.content}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
