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
  GraduationCap,
  CheckCircle2,
  Award,
} from "lucide-react";
import SidebarMenu from "@/components/sidebar-menu";
import { trainingMenuItems } from "@/data/navigation";

const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học chính quy tại Phân hiệu Đà Nẵng", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Thông báo tuyển sinh đào tạo trình độ Thạc sĩ đợt 1 năm 2026", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { id: 3, title: "Kế hoạch mở các lớp bồi dưỡng lãnh đạo, quản lý cấp phòng, cấp huyện", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 4, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 5, title: "Chương trình bồi dưỡng kiến thức, kỹ năng chuyển đổi số cho công chức", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
];

const masterPrograms = [
  {
    code: "8340403",
    name: "Thạc sĩ Quản lý công",
    target: "Cán bộ, công chức, viên chức quy hoạch lãnh đạo quản lý các cấp; chuyên viên nghiên cứu chính sách và quản trị khu vực công.",
    focus: "Nâng cao năng lực ra quyết định chính sách, kỹ năng điều hành công vụ trong bối cảnh chuyển đổi số, phân tích kinh tế công và quản trị công hiện đại.",
  },
  {
    code: "8380101",
    name: "Thạc sĩ Luật Hiến pháp và Luật Hành chính",
    target: "Cán bộ công tác tại các cơ quan tư pháp, nội vụ, thanh tra, văn phòng đoàn đại biểu quốc hội, HĐND và UBND các cấp.",
    focus: "Chuyên sâu về cải cách tư pháp, tổ chức bộ máy nhà nước, kiểm soát quyền lực nhà nước, pháp luật giải quyết tranh chấp hành chính và bảo vệ quyền con người.",
  },
  {
    code: "8340402",
    name: "Thạc sĩ Chính sách công",
    target: "Cán bộ phân tích chiến lược, hoạch định chính sách phát triển kinh tế - xã hội tại các bộ, ngành và địa phương.",
    focus: "Phương pháp định lượng và định tính trong thẩm định, đánh giá tác động chính sách (RIA), kinh tế học chính sách và quản trị công quốc tế.",
  },
  {
    code: "8340201",
    name: "Thạc sĩ Tài chính - Ngân hàng (Định hướng Tài chính công)",
    target: "Cán bộ tài chính - kế toán, quản lý ngân sách nhà nước, kho bạc, thuế và quản lý tài sản công.",
    focus: "Kỹ năng quản lý nợ công, lập dự toán ngân sách theo kết quả đầu ra, kiểm toán công và quản trị rủi ro tài chính công.",
  },
];

const regulations = [
  "Hình thức đào tạo: Chính quy tập trung (học vào các ngày trong tuần hoặc cuối tuần linh hoạt phù hợp cho cán bộ đang công tác).",
  "Thời gian đào tạo: Từ 1,5 đến 2 năm (tương đương 60 tín chỉ chuẩn quốc gia).",
  "Đối tượng dự tuyển: Người đã tốt nghiệp đại học đúng ngành, phù hợp hoặc ngành gần (đã hoàn thành chương trình bổ sung kiến thức).",
  "Hình thức tuyển sinh: Xét tuyển kết hợp thi đánh giá năng lực hoặc xét hồ sơ kèm bài luận theo quy định hiện hành.",
  "Chuẩn đầu ra ngoại ngữ: Bậc 4/6 theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam (hoặc các chứng chỉ quốc tế tương đương).",
];

export default function DaoTaoThacSiPage() {
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

            <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
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
          <main className="col-span-8 xl:col-span-9 max-[480px]:col-span-12 bg-white border border-gray-200 rounded p-4 sm:p-6 md:p-8 shadow-sm">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-gray-500 bg-gray-50 px-3 py-2 rounded border border-gray-200 mb-6">
              <Link href="/trang-chu" className="hover:text-[#DA251C] flex items-center gap-1">
                <Home size={14} /> Trang chủ
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-gray-600">Bồi dưỡng</span>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-[#DA251C] font-semibold">Đào tạo thạc sĩ</span>
            </div>

            {/* Tiêu đề trang */}
            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase mb-3">
              Chương trình Đào tạo Sau đại học - Trình độ Thạc sĩ tại Phân hiệu Đà Nẵng
            </h1>

            {/* Meta & Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] sm:text-[13px] text-gray-500 border-b border-gray-200 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#DA251C]" />
                <span>Cập nhật ngày: 10/09/2026</span>
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

            {/* Banner ảnh đào tạo sau đại học */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-xs">
              <div className="relative w-full h-[240px] sm:h-[340px]">
                <Image
                  src="/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png"
                  alt="Đào tạo trình độ Thạc sĩ Học viện Hành chính và Quản trị công"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="p-2.5 text-center text-[12px] text-gray-500 bg-gray-50 border-t border-gray-100 italic">
                Lễ khai giảng và trao bằng Thạc sĩ tại Học viện Hành chính và Quản trị công
              </p>
            </div>

            {/* Giới thiệu */}
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed bg-blue-50/50 p-4 border-l-4 border-[#1E2A5E] rounded-r mb-6">
              Chương trình đào tạo trình độ Thạc sĩ tại Học viện nhằm bồi dưỡng nguồn cán bộ cấp cao có bản lĩnh chính trị vững vàng, tư duy quản trị công hiện đại, làm chủ các công cụ phân tích và giải quyết các bài toán phát triển chiến lược của đất nước.
            </p>

            {/* Danh mục chuyên ngành Thạc sĩ */}
            <section className="space-y-4 mb-8">
              <div className="flex items-center gap-2 border-b-2 border-[#1E2A5E] pb-2">
                <GraduationCap size={22} className="text-[#DA251C]" />
                <h2 className="text-[17px] sm:text-[18px] font-bold text-[#1E2A5E] uppercase tracking-wide">
                  Các chuyên ngành đào tạo Thạc sĩ
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {masterPrograms.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-5 rounded-lg shadow-2xs space-y-3 hover:border-blue-300 transition-colors">
                    <div className="border-b border-gray-100 pb-2">
                      <h3 className="font-bold text-[15px] text-[#DA251C]">{item.name}</h3>
                      <span className="text-[12px] text-gray-500 font-mono">Mã số ngành: {item.code}</span>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold text-gray-800 uppercase mb-1">Đối tượng hướng tới:</h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed">{item.target}</p>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold text-gray-800 uppercase mb-1">Định hướng nghiên cứu:</h4>
                      <p className="text-[13px] text-gray-600 leading-relaxed">{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quy chế và hình thức tổ chức */}
            <section className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3 text-[#1E2A5E]">
                <Award size={20} className="text-[#DA251C]" />
                <h3 className="text-[16px] font-bold uppercase tracking-wide">
                  Hình thức học tập và Điều kiện tuyển sinh
                </h3>
              </div>
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-gray-700">
                {regulations.map((reg, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#1E2A5E] shrink-0 mt-0.5" />
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
