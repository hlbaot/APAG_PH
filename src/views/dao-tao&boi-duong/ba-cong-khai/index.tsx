"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  ChevronRight,
  Clock,
  Check,
  Link2,
  FileSpreadsheet,
  Download,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import SidebarMenu from "@/components/sidebar-menu";
import { trainingMenuItems } from "@/data/navigation";

const popularNews = [
  { id: 1, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { id: 2, title: "Thông báo tuyển sinh đào tạo trình độ Thạc sĩ đợt 1 năm 2026", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { id: 3, title: "Kế hoạch mở các lớp bồi dưỡng lãnh đạo, quản lý cấp sở, cấp huyện", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 4, title: "Báo cáo Ba công khai năm học 2025 - 2026 theo quy định Bộ GD&ĐT", href: "/dao-tao&boi-duong/ba-cong-khai" },
  { id: 5, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
];

const reports = [
  {
    title: "Báo cáo Công khai Cam kết chất lượng đào tạo và Chất lượng đào tạo thực tế",
    year: "Năm học 2025 - 2026",
    code: "BC-01/CK-HVHC",
    fileSize: "1.4 MB",
  },
  {
    title: "Báo cáo Công khai Điều kiện đảm bảo chất lượng cơ sở giáo dục đại học (Đội ngũ giảng viên, Cơ sở vật chất)",
    year: "Năm học 2025 - 2026",
    code: "BC-02/CK-HVHC",
    fileSize: "2.1 MB",
  },
  {
    title: "Báo cáo Công khai Thu - Chi tài chính và Mức thu học phí, các khoản thu khác",
    year: "Năm tài chính 2025 - 2026",
    code: "BC-03/CK-HVHC",
    fileSize: "980 KB",
  },
  {
    title: "Báo cáo Tình hình việc làm của sinh viên tốt nghiệp năm 2024 và khảo sát doanh nghiệp 2025",
    year: "Khóa tốt nghiệp gần nhất",
    code: "BC-04/CK-HVHC",
    fileSize: "1.8 MB",
  },
  {
    title: "Báo cáo Quy mô đào tạo chính quy, vừa làm vừa học và sau đại học hiện hành",
    year: "Giai đoạn 2024 - 2026",
    code: "BC-05/CK-HVHC",
    fileSize: "1.1 MB",
  },
];

export default function BaCongKhaiPage() {
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

  const handleDownload = (title: string) => {
    alert(`Đang chuẩn bị tải về tài liệu: ${title}`);
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
              <Link href="/dao-tao&boi-duong/dao-tao-dai-hoc" className="hover:text-[#DA251C]">
                Đào tạo & Bồi dưỡng
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-[#DA251C] font-semibold">Ba công khai</span>
            </div>

            {/* Tiêu đề trang */}
            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase mb-3">
              Báo cáo Ba Công khai theo Quy định của Bộ Giáo dục & Đào tạo
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

            {/* Giới thiệu */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 border-l-4 border-[#1E2A5E] rounded-r mb-6">
              <ShieldCheck className="text-[#1E2A5E] shrink-0 mt-0.5" size={24} />
              <p className="text-[13.5px] sm:text-[14px] text-gray-700 leading-relaxed">
                Thực hiện Thông tư số 36/2017/TT-BGDĐT của Bộ Giáo dục và Đào tạo ban hành Quy chế thực hiện công khai đối với cơ sở giáo dục và đào tạo thuộc hệ thống giáo dục quốc dân, Học viện Hành chính và Quản trị công công bố công khai các nội dung về cam kết chất lượng, điều kiện cơ sở vật chất, đội ngũ giảng viên và tài chính.
              </p>
            </div>

            {/* Danh sách báo cáo tải về */}
            <div className="space-y-3">
              {reports.map((report, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-gray-200 rounded-lg shadow-2xs hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <FileSpreadsheet className="text-green-600 shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-bold text-[14px] sm:text-[15px] text-[#1E2A5E]">
                        {report.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-[12px] text-gray-500 mt-1">
                        <span>Hiệu lực: {report.year}</span>
                        <span>•</span>
                        <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">{report.code}</span>
                        <span>•</span>
                        <span>Dung lượng: {report.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload(report.title)}
                    className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#1E2A5E] hover:bg-[#DA251C] text-white text-[12px] font-semibold px-3.5 py-2 rounded transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Download size={14} />
                    Tải văn bản PDF
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
