"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  Bookmark,
  ChevronRight,
  Clock,
  Check,
  Link2,
  GraduationCap,
  CheckCircle2,
  School,
  BookOpen,
} from "lucide-react";
import "@/scss/dao-tao&boi-duong/dao-tao-dai-hoc/dao-tao-dai-hoc.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { trainingMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học chính quy tại Phân hiệu Đà Nẵng", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Thông báo tuyển sinh đào tạo trình độ Thạc sĩ đợt 1 năm 2026", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { id: 3, title: "Kế hoạch mở các lớp bồi dưỡng lãnh đạo, quản lý cấp phòng, cấp huyện", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 4, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 5, title: "Chương trình bồi dưỡng kiến thức, kỹ năng chuyển đổi số cho công chức", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
];

const majors = [
  {
    code: "7340401",
    name: "Ngành Quản lý nhà nước",
    duration: "4 năm (130 tín chỉ)",
    description: "Đào tạo nguồn nhân lực chất lượng cao nắm vững lý luận và nghiệp vụ hành chính, pháp luật, hoạch định và thực thi chính sách công tại các cơ quan bộ máy nhà nước và tổ chức kinh tế - xã hội.",
    careers: ["Công chức tại UBND các cấp, Sở, Ban, Ngành", "Chuyên viên văn phòng, tổ chức cán bộ", "Nghiên cứu viên tại viện, trung tâm chính sách", "Quản lý hành chính tại các tổ chức phi chính phủ và doanh nghiệp"],
  },
  {
    code: "7380101",
    name: "Ngành Luật",
    duration: "4 năm (132 tín chỉ)",
    description: "Trang bị hệ thống kiến thức toàn diện về luật hiến pháp, hành chính, tố tụng dân sự, hình sự và thương mại quốc tế, gắn liền thực tiễn quản lý nhà nước hiện đại.",
    careers: ["Thẩm phán, Kiểm sát viên, Luật sư, Công chứng viên", "Cán bộ pháp chế cơ quan nhà nước, doanh nghiệp", "Tư vấn viên pháp luật trong nước và quốc tế"],
  },
  {
    code: "7340404",
    name: "Ngành Quản trị nhân lực",
    duration: "4 năm (130 tín chỉ)",
    description: "Cung cấp kiến thức hiện đại về hoạch định nguồn nhân lực, tuyển dụng, đào tạo phát triển, đãi ngộ và văn hóa công sở trong khu vực công lẫn tư nhân.",
    careers: ["Trưởng/Phó phòng Nhân sự doanh nghiệp, tập đoàn", "Chuyên viên tổ chức cán bộ cơ quan nhà nước", "Chuyên gia tư vấn tuyển dụng và săn đầu người (headhunter)"],
  },
  {
    code: "7340406",
    name: "Ngành Quản trị văn phòng",
    duration: "4 năm (130 tín chỉ)",
    description: "Đào tạo kỹ năng quản trị thông tin văn phòng, lưu trữ tài liệu số, tổ chức sự kiện, điều hành công việc và kỹ năng số trong môi trường chính phủ điện tử.",
    careers: ["Chánh/Phó văn phòng cơ quan, tổ chức", "Thư ký lãnh đạo, trợ lý giám đốc", "Quản trị viên hệ thống hồ sơ, dữ liệu văn phòng điện tử"],
  },
  {
    code: "7310101",
    name: "Ngành Kinh tế",
    duration: "4 năm (130 tín chỉ)",
    description: "Nắm vững nguyên lý kinh tế học, tài chính công, quản lý dự án đầu tư công, phân tích và dự báo kinh tế phục vụ phát triển kinh tế vùng và địa phương.",
    careers: ["Chuyên viên Sở Kế hoạch & Đầu tư, Sở Tài chính", "Phân tích viên chính sách kinh tế vĩ mô", "Chuyên viên tài chính ngân hàng, doanh nghiệp lớn"],
  },
  {
    code: "7480104",
    name: "Ngành Hệ thống thông tin",
    duration: "4 năm (135 tín chỉ)",
    description: "Đào tạo kỹ sư/cử nhân chuyên sâu về xây dựng và vận hành hệ thống thông tin quản lý, chuyển đổi số hành chính công, an toàn dữ liệu và trí tuệ nhân tạo phục vụ dịch vụ công trực tuyến.",
    careers: ["Kỹ sư hệ thống thông tin chính phủ điện tử", "Chuyên viên phân tích nghiệp vụ dữ liệu công nghệ", "Quản trị viên mạng và cơ sở dữ liệu cơ quan, tập đoàn"],
  },
];

export default function DaoTaoDaiHocPage() {
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
              <span className="text-[#DA251C] font-semibold">Đào tạo đại học</span>
            </div>

            {/* Tiêu đề trang */}
            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase mb-3">
              Chương trình Đào tạo Đại học Chính quy — Phân hiệu Đà Nẵng
            </h1>

            {/* Meta & Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] sm:text-[13px] text-gray-500 border-b border-gray-200 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#DA251C]" />
                <span>Cập nhật ngày: 15/09/2026</span>
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

            {/* Banner Thông Tin Tuyển Sinh */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-xs">
              <div className="relative w-full h-[220px] sm:h-[300px]">
                <Image
                  src="/trangChu/ThongTinTuyenSinh-599f70999b.png"
                  alt="Thông tin tuyển sinh đại học Học viện Hành chính và Quản trị công"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Giới thiệu tóm tắt */}
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed bg-red-50/40 p-4 border-l-4 border-[#DA251C] rounded-r mb-6">
              Học viện Hành chính và Quản trị công là trung tâm quốc gia hàng đầu về đào tạo, bồi dưỡng cán bộ, công chức, viên chức và nghiên cứu khoa học hành chính. Chương trình đào tạo đại học chính quy được thiết kế theo chuẩn kiểm định quốc tế, gắn kết chặt chẽ giữa lý thuyết quản lý và kỹ năng hành chính thực tiễn trong kỷ nguyên số.
            </p>

            {/* Poster tuyển sinh 2026 chi tiết */}
            <div className="mb-8">
              <div className="relative w-full max-w-[760px] mx-auto h-[480px] sm:h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/trangChu/nc&ht/tuyensinh-2026-cfd7a24819.png"
                  alt="Tuyển sinh đại học chính quy 2026"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <p className="text-center text-[12px] text-gray-500 italic mt-2">
                Thông báo tuyển sinh trình độ đại học hình thức chính quy năm 2026
              </p>
            </div>

            {/* Phương thức tuyển sinh */}
            <section className="bg-gray-50 border border-gray-200 p-5 rounded-lg mb-8">
              <div className="flex items-center gap-2 mb-3 text-[#1E2A5E]">
                <School size={20} className="text-[#DA251C]" />
                <h2 className="text-[16px] sm:text-[17px] font-bold uppercase tracking-wide">
                  Các phương thức tuyển sinh năm 2026
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <div className="flex items-start gap-2.5 text-[13.5px] text-gray-700 bg-white p-3 rounded border border-gray-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-[#DA251C] shrink-0 mt-0.5" />
                  <span>Phương thức 1: Xét tuyển theo kết quả kỳ thi tốt nghiệp THPT năm 2026</span>
                </div>
                <div className="flex items-start gap-2.5 text-[13.5px] text-gray-700 bg-white p-3 rounded border border-gray-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-[#DA251C] shrink-0 mt-0.5" />
                  <span>Phương thức 2: Xét tuyển theo kết quả học tập THPT (xét học bạ các kỳ học)</span>
                </div>
                <div className="flex items-start gap-2.5 text-[13.5px] text-gray-700 bg-white p-3 rounded border border-gray-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-[#DA251C] shrink-0 mt-0.5" />
                  <span>Phương thức 3: Xét tuyển kết hợp chứng chỉ ngoại ngữ quốc tế (IELTS, TOEFL)</span>
                </div>
                <div className="flex items-start gap-2.5 text-[13.5px] text-gray-700 bg-white p-3 rounded border border-gray-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-[#DA251C] shrink-0 mt-0.5" />
                  <span>Phương thức 4: Xét tuyển thẳng và ưu tiên xét tuyển theo quy chế của Bộ GD&ĐT</span>
                </div>
              </div>
            </section>

            {/* Danh mục ngành đào tạo */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-[#1E2A5E] pb-2">
                <GraduationCap size={22} className="text-[#DA251C]" />
                <h2 className="text-[17px] sm:text-[18px] font-bold text-[#1E2A5E] uppercase tracking-wide">
                  Các ngành đào tạo Cử nhân chính quy
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {majors.map((prog) => (
                  <div key={prog.code} className="border border-gray-200 p-5 rounded-lg bg-gray-50/50 hover:border-blue-300 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-2 mb-3">
                      <div>
                        <h3 className="font-bold text-[15px] sm:text-[16px] text-[#1E2A5E]">{prog.name}</h3>
                        <span className="text-[12px] text-gray-500 font-mono">Mã ngành: {prog.code}</span>
                      </div>
                      <span className="inline-block bg-blue-100 text-[#1E2A5E] text-[12px] font-bold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                        {prog.duration}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed mb-3">
                      {prog.description}
                    </p>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#DA251C] uppercase mb-1">Cơ hội việc làm sau tốt nghiệp:</h4>
                      <ul className="list-disc list-inside text-[12.5px] text-gray-600 space-y-1">
                        {prog.careers.map((op, opIdx) => (
                          <li key={opIdx}>{op}</li>
                        ))}
                      </ul>
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
