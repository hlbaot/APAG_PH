"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Home,
  Printer,
  ChevronRight,
  Check,
  Link2,
  CalendarDays,
  ExternalLink,
  Info,
} from "lucide-react";
import "@/scss/tin-tuc/lich-cong-tac/lich-cong-tac.scss";

import SidebarMenu from "@/components/sidebar-menu";
import { newsMenuItems } from "@/data/navigation";

const latestNews = [
  { id: 1, title: "Hội thảo khoa học: Quản trị đô thị thông minh trong bối cảnh kỷ nguyên số tại Đà Nẵng", href: "/tin-tuc/tin-tuc" },
  { id: 2, title: "Thông báo tuyển sinh đào tạo trình độ thạc sĩ Quản lý công năm 2026", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { id: 3, title: "Kế hoạch tổ chức các lớp bồi dưỡng ngạch chuyên viên, chuyên viên chính", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
  { id: 4, title: "Ban Giám đốc Phân hiệu Học viện tại TP. Đà Nẵng gặp mặt cán bộ viên chức", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 5, title: "Tuyên truyền phổ biến các quy định mới về quản lý công chức, viên chức", href: "/tin-tuc/tuyen-truyen-phap-luat" },
];

const DA_NANG_CALENDAR_URL =
  "https://lichtuan.apag.edu.vn/index.php?route=apag/calendar";

export default function LichCongTacPage() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = DA_NANG_CALENDAR_URL;
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
              <span className="text-[#DA251C] font-semibold">Lịch công tác</span>
            </div>

            {/* Tiêu đề trang */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3 mb-6">
              <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug uppercase">
                LỊCH CÔNG TÁC PHÂN HIỆU TẠI TP. ĐÀ NẴNG
              </h1>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1 px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 hover:text-[#DA251C] transition-colors cursor-pointer text-[12px]"
                >
                  <Printer size={13} />
                  <span>In trang</span>
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

            {/* Đoạn giới thiệu */}
            <div className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Lịch công tác của <strong>Phân hiệu Học viện Hành chính và Quản trị công tại thành phố Đà Nẵng</strong> được công bố và cập nhật thường xuyên trên Hệ thống Quản lý Lịch tuần điện tử của Học viện.
              </p>
              <p>
                Hệ thống cung cấp đầy đủ thông tin về các cuộc họp, hội thảo khoa học, lịch giảng dạy, làm việc với các cơ quan, đơn vị đối tác tại khu vực miền Trung - Tây Nguyên của Ban Giám đốc Phân hiệu và các đơn vị trực thuộc.
              </p>
            </div>

            {/* Khối nổi bật liên kết mở lịch đã lọc theo Đà Nẵng */}
            <div className="bg-slate-50 border-2 border-dashed border-[#1E2A5E]/20 rounded-xl p-6 sm:p-8 text-center my-6 space-y-4">
              <div className="w-14 h-14 bg-red-100 text-[#DA251C] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CalendarDays size={28} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#1E2A5E]">
                CỔNG TRA CỨU LỊCH TUẦN ĐIỆN TỬ — PHÂN HIỆU ĐÀ NẴNG
              </h2>
              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                Bấm vào nút dưới đây để chuyển hướng trực tiếp đến hệ thống Lịch tuần đã được lọc riêng cho Phân hiệu tại TP. Đà Nẵng.
              </p>
              <div className="pt-2">
                <a
                  href={DA_NANG_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#DA251C] hover:bg-[#b51c14] text-white text-[15px] font-bold uppercase rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <CalendarDays size={18} />
                  <span>Xem lịch công tác</span>
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-xs text-gray-400 italic">
                * Hệ thống sẽ mở trong tab mới để đảm bảo trải nghiệm hiển thị tốt nhất.
              </p>
            </div>

            {/* Ghi chú hướng dẫn */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 text-[13.5px] text-amber-900 mt-8">
              <Info size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-1">Lưu ý đối với cán bộ, giảng viên và học viên:</span>
                <p className="leading-relaxed">
                  Lịch công tác có thể được điều chỉnh theo yêu cầu nhiệm vụ đột xuất. Vui lòng kiểm tra lại trước khi tham dự hoặc liên hệ Văn phòng Phân hiệu (số 749 đường Trần Hưng Đạo, phường Điện Bàn Đông, TP. Đà Nẵng) để được hỗ trợ.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
