"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Home,
  Printer,
  ChevronRight,
  Check,
  Link2,
  Calendar,
  Filter,
  GraduationCap,
} from "lucide-react";
import "@/scss/tin-tuc/thoi-khoa-bieu/thoi-khoa-bieu.scss";

import SidebarMenu from "@/components/sidebar-menu";
import { newsMenuItems } from "@/data/navigation";

const latestNews = [
  { id: 1, title: "Hội thảo khoa học: Quản trị đô thị thông minh trong bối cảnh kỷ nguyên số tại Đà Nẵng", href: "/tin-tuc/tin-tuc" },
  { id: 2, title: "Thông báo tuyển sinh đào tạo trình độ thạc sĩ Quản lý công năm 2026", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { id: 3, title: "Kế hoạch tổ chức các lớp bồi dưỡng ngạch chuyên viên, chuyên viên chính", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 4, title: "Ban Giám đốc Phân hiệu Học viện tại TP. Đà Nẵng gặp mặt cán bộ viên chức", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 5, title: "Tuyên truyền phổ biến các quy định mới về quản lý công chức, viên chức", href: "/tin-tuc/tuyen-truyen-phap-luat" },
];

interface ScheduleItem {
  thu: string;
  tiet: string;
  monHoc: string;
  phong: string;
  giangVien: string;
  ghiChu?: string;
}

const mockSchedules: Record<string, ScheduleItem[]> = {
  "k24-qlnn": [
    { thu: "Thứ Hai", tiet: "Tiết 1 - 3 (07h30 - 10h00)", monHoc: "Lý luận Hành chính nhà nước", phong: "P.301 - Giảng đường A", giangVien: "TS. Nguyễn Văn Hùng", ghiChu: "Học trực tiếp" },
    { thu: "Thứ Hai", tiet: "Tiết 7 - 9 (13h30 - 16h00)", monHoc: "Luật Hành chính Việt Nam", phong: "P.302 - Giảng đường A", giangVien: "ThS. Trần Thị Mai", ghiChu: "Thảo luận nhóm" },
    { thu: "Thứ Ba", tiet: "Tiết 1 - 4 (07h30 - 10h50)", monHoc: "Quản lý nguồn nhân lực trong khu vực công", phong: "P.201 - Giảng đường B", giangVien: "PGS.TS. Lê Quốc Toàn", ghiChu: "Học trực tiếp" },
    { thu: "Thứ Tư", tiet: "Tiết 3 - 5 (09h15 - 11h45)", monHoc: "Tin học ứng dụng trong quản trị văn phòng", phong: "Lab 02 - Tầng 4", giangVien: "ThS. Phan Đình Đức", ghiChu: "Thực hành máy tính" },
    { thu: "Thứ Năm", tiet: "Tiết 1 - 3 (07h30 - 10h00)", monHoc: "Chính sách công và phân tích chính sách", phong: "P.301 - Giảng đường A", giangVien: "TS. Vũ Hải Nam", ghiChu: "Kiểm tra giữa kỳ" },
    { thu: "Thứ Sáu", tiet: "Tiết 7 - 9 (13h30 - 16h00)", monHoc: "Kỹ năng soạn thảo văn bản quản lý nhà nước", phong: "P.105 - Giảng đường B", giangVien: "ThS. Đỗ Hoàng Yến", ghiChu: "Bài tập tình huống" },
  ],
  "k25-luat": [
    { thu: "Thứ Hai", tiet: "Tiết 1 - 3 (07h30 - 10h00)", monHoc: "Luật Dân sự và Tố tụng dân sự", phong: "P.204 - Giảng đường A", giangVien: "TS. Trần Văn Nam", ghiChu: "Học trực tiếp" },
    { thu: "Thứ Ba", tiet: "Tiết 1 - 4 (07h30 - 10h50)", monHoc: "Luật Hình sự phần các tội phạm", phong: "P.204 - Giảng đường A", giangVien: "ThS. Lê Thị Thanh", ghiChu: "Học lý thuyết" },
    { thu: "Thứ Tư", tiet: "Tiết 7 - 9 (13h30 - 16h00)", monHoc: "Kỹ năng tư vấn pháp luật", phong: "P.102 - Giảng đường B", giangVien: "TS. Đặng Quốc Hưng", ghiChu: "Thực hành án mẫu" },
    { thu: "Thứ Năm", tiet: "Tiết 2 - 4 (08h25 - 10h50)", monHoc: "Luật Thương mại quốc tế", phong: "P.204 - Giảng đường A", giangVien: "ThS. Phạm Thu Trang", ghiChu: "Thuyết trình" },
    { thu: "Thứ Sáu", tiet: "Tiết 1 - 3 (07h30 - 10h00)", monHoc: "Tiếng Anh chuyên ngành Luật", phong: "P.305 - Giảng đường A", giangVien: "ThS. Hoàng Mai Ly", ghiChu: "Học trực tiếp" },
  ],
  "ch-k26": [
    { thu: "Thứ Sáu", tiet: "Tiết 11 - 13 (18h00 - 20h30)", monHoc: "Quản trị công hiện đại và đổi mới sáng tạo", phong: "P.Cao học 1", giangVien: "PGS.TS. Trần Đình Thắng", ghiChu: "Học viên cao học" },
    { thu: "Thứ Bảy", tiet: "Tiết 1 - 4 (08h00 - 11h30)", monHoc: "Phương pháp nghiên cứu khoa học hành chính nâng cao", phong: "P.Cao học 1", giangVien: "GS.TS. Nguyễn Văn Hảo", ghiChu: "Học chuyên đề" },
    { thu: "Thứ Bảy", tiet: "Tiết 7 - 10 (13h30 - 17h00)", monHoc: "Đánh giá chính sách công dựa trên bằng chứng", phong: "P.Cao học 1", giangVien: "TS. Bùi Minh Quân", ghiChu: "Thảo luận đề án" },
    { thu: "Chủ Nhật", tiet: "Tiết 1 - 4 (08h00 - 11h30)", monHoc: "Lãnh đạo và quản lý chiến lược trong khu vực công", phong: "P.Cao học 1", giangVien: "PGS.TS. Lê Quốc Toàn", ghiChu: "Báo cáo thực tế" },
  ],
};

export default function ThoiKhoaBieuPage() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [selectedClass, setSelectedClass] = useState("k24-qlnn");
  const [selectedWeek, setSelectedWeek] = useState("tuan-1");

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

  const currentSchedule = mockSchedules[selectedClass] || mockSchedules["k24-qlnn"];

  return (
    <div className="w-full bg-[#fdfdfd] py-6 sm:py-8 font-sans">
      <div className="w-full max-w-[1360px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* CỘT TRÁI (SIDEBAR) */}
          <aside className="col-span-4 xl:col-span-3 max-[480px]:col-span-12 flex flex-col gap-6">
            <SidebarMenu title="TIN TỨC" items={newsMenuItems} />


            <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
              <div className="bg-[#1E2A5E] text-white px-4 py-3">
                <h3 className="text-[clamp(13px,0.75rem+0.2vw,15.5px)] font-bold uppercase tracking-wider">TIN MỚI NHẤT</h3>
              </div>
              <div className="divide-y divide-gray-100 p-2">
                {latestNews.map((item) => (
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
              <Link href="/tin-tuc/tin-tuc" className="hover:text-[#DA251C]">
                Tin tức
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-[#DA251C] font-semibold">Thời khóa biểu</span>
            </div>

            {/* Tiêu đề trang */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3 mb-6">
              <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase">
                TRA CỨU THỜI KHÓA BIỂU — PHÂN HIỆU ĐÀ NẴNG
              </h1>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1 px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 hover:text-[#DA251C] transition-colors cursor-pointer text-[12px]"
                >
                  <Printer size={13} />
                  <span>In lịch</span>
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

            {/* Ghi chú thông tin */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-[13px] text-blue-900 leading-relaxed">
              <p className="font-semibold flex items-center gap-1.5 mb-1">
                <GraduationCap size={18} className="text-blue-700" />
                Cổng tra cứu thời khóa biểu giảng dạy và học tập học kỳ hiện tại
              </p>
              <p className="text-gray-600">
                Sinh viên, học viên và giảng viên tra cứu lịch giảng dạy, học tập theo từng khóa lớp và tuần học bên dưới.
              </p>
            </div>

            {/* Bộ lọc tra cứu (Khóa/Lớp + Tuần học) */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5 mb-6">
              <div className="flex items-center gap-2 text-[#1E2A5E] font-bold text-sm uppercase mb-3">
                <Filter size={16} className="text-[#DA251C]" />
                <span>Bộ lọc tra cứu lịch học</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="selectClass" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Chọn Khóa / Lớp học:
                  </label>
                  <select
                    id="selectClass"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#DA251C]"
                  >
                    <option value="k24-qlnn">K24 - Quản lý nhà nước (Đại học chính quy)</option>
                    <option value="k25-luat">K25 - Luật học (Đại học chính quy)</option>
                    <option value="ch-k26">Cao học Quản trị công K26 (Sau đại học)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="selectWeek" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Chọn Tuần học:
                  </label>
                  <select
                    id="selectWeek"
                    value={selectedWeek}
                    onChange={(e) => setSelectedWeek(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#DA251C]"
                  >
                    <option value="tuan-1">Tuần 1 (15/09/2026 - 21/09/2026)</option>
                    <option value="tuan-2">Tuần 2 (22/09/2026 - 28/09/2026)</option>
                    <option value="tuan-3">Tuần 3 (29/09/2026 - 05/10/2026)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bảng thời khóa biểu */}
            <div className="border border-gray-200 rounded-lg overflow-x-auto shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1E2A5E] text-white font-bold uppercase text-[12px] tracking-wider">
                    <th className="py-3 px-3 border border-slate-700 text-center w-24">Thứ</th>
                    <th className="py-3 px-3 border border-slate-700 min-w-[130px]">Tiết học</th>
                    <th className="py-3 px-3 border border-slate-700 min-w-[200px]">Môn học / Học phần</th>
                    <th className="py-3 px-3 border border-slate-700 w-32">Phòng học</th>
                    <th className="py-3 px-3 border border-slate-700 min-w-[150px]">Giảng viên</th>
                    <th className="py-3 px-3 border border-slate-700 w-28 text-center">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentSchedule.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 border border-gray-200 text-center font-bold text-[#DA251C]">
                        {row.thu}
                      </td>
                      <td className="py-3 px-3 border border-gray-200 text-gray-700 font-medium">
                        {row.tiet}
                      </td>
                      <td className="py-3 px-3 border border-gray-200 font-semibold text-[#1E2A5E]">
                        {row.monHoc}
                      </td>
                      <td className="py-3 px-3 border border-gray-200 text-gray-700">
                        <span className="inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold">
                          {row.phong}
                        </span>
                      </td>
                      <td className="py-3 px-3 border border-gray-200 text-gray-800">
                        {row.giangVien}
                      </td>
                      <td className="py-3 px-3 border border-gray-200 text-center text-xs text-gray-500">
                        {row.ghiChu || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 italic mt-4">
              * Sinh viên, học viên cần có mặt tại phòng học trước giờ vào lớp ít nhất 5 phút. Trường hợp thay đổi lịch học đột xuất, Ban Quản lý Đào tạo sẽ gửi thông báo qua email sinh viên.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
