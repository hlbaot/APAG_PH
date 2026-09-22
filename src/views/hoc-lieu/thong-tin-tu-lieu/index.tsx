"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight, Search } from "lucide-react";
import Pagination from "@/components/pagination";

// ─── APAG Logo Card Component ────────────────────────────────────────────────
const ApagLogoCard = ({
  className = "",
  large = false,
}: {
  className?: string;
  large?: boolean;
}) => (
  <div
    className={`w-full h-full bg-white border border-gray-300 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors ${className}`}
  >
    <div className="flex items-center font-black tracking-tight select-none">
      <span className={`text-[#DA251C] ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
        AP
      </span>
      <div className="relative inline-flex items-center">
        <span className={`text-[#1b2559] ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
          A
        </span>
        <span
          className={`absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#DA251C] text-white font-bold rounded-full leading-none flex items-center justify-center ${
            large ? "text-[8px] px-1 py-0.5" : "text-[6px] px-[2.5px] py-[0.5px]"
          }`}
        >
          1959
        </span>
      </div>
      <span className={`text-[#1b2559] ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
        G
      </span>
    </div>
  </div>
);

// ─── Ban Tin Banner Card Component ──────────────────────────────────────────
const BanTinBanner = ({
  so,
  thang,
  bg = "sky",
  classic = false,
}: {
  so: string;
  thang: string;
  bg?: string;
  classic?: boolean;
}) => {
  if (classic) {
    let bgClasses = "bg-[#fffaf0] border border-[#e5d5b7]";
    if (bg === "yellow") {
      bgClasses = "bg-gradient-to-b from-[#fef08a] to-[#fde047] border border-[#facc15]";
    } else if (bg === "temple") {
      bgClasses = "bg-[#ffffff] border border-gray-300";
    }

    return (
      <div
        className={`w-full h-full relative overflow-hidden flex flex-col justify-between p-2.5 select-none ${bgClasses}`}
      >
        <div className="text-center">
          <p className="text-[8.5px] sm:text-[9.5px] uppercase font-serif tracking-widest text-[#8b0000] font-bold">
            BẢN TIN
          </p>
          <p className="text-[12px] sm:text-[13.5px] font-black uppercase font-serif text-[#b91c1c] tracking-tight leading-tight">
            THÔNG TIN - TƯ LIỆU
          </p>
          <p className="text-[7.5px] sm:text-[8px] uppercase font-serif text-[#8b0000] tracking-wider font-semibold">
            HỌC VIỆN HÀNH CHÍNH QUỐC GIA
          </p>
        </div>
        <div className="flex justify-end mt-auto">
          <div className="border border-[#8b0000] rounded-xs px-2 py-0.5 text-right bg-white/70">
            <p className="text-[8px] sm:text-[8.5px] font-bold text-[#b91c1c] uppercase leading-none">
              SỐ {so}
            </p>
            <p className="text-[7px] sm:text-[7.5px] text-gray-700 italic leading-none mt-0.5">
              {thang}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (bg === "tech") {
    return (
      <div className="w-full h-full relative overflow-hidden flex flex-col justify-between p-2.5 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0284c7] select-none text-white">
        <div className="border-b border-blue-400/30 pb-1">
          <p className="text-[11px] sm:text-[13px] font-black uppercase tracking-tight text-white">
            THÔNG TIN TƯ LIỆU
          </p>
          <span className="inline-block bg-[#f59e0b] text-[#0f172a] text-[8px] font-bold px-1.5 py-0.5 rounded-xs mt-0.5">
            SỐ {so}
          </span>
        </div>
        <p className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider text-blue-200">
          KHOA HỌC, CÔNG NGHỆ & CHUYỂN ĐỔI SỐ
        </p>
      </div>
    );
  }

  if (bg === "red") {
    return (
      <div className="w-full h-full relative overflow-hidden flex flex-col justify-between p-2 bg-gradient-to-r from-[#b91c1c] to-[#dc2626] select-none text-white border border-red-700">
        <div>
          <span className="text-[7px] bg-yellow-400 text-red-950 font-bold px-1 py-0.2 uppercase rounded-xs">
            BẢN TIN
          </span>
          <p className="text-[12px] sm:text-[13.5px] font-black uppercase tracking-tight text-white leading-tight mt-0.5">
            THÔNG TIN - TƯ LIỆU
          </p>
          <p className="text-[7px] uppercase font-medium text-red-100">
            HỌC VIỆN HÀNH CHÍNH QUỐC GIA
          </p>
        </div>
        <div className="flex justify-end">
          <span className="text-[7.5px] font-bold bg-white text-red-700 px-1.5 py-0.5 rounded-xs">
            SỐ {so} - {thang}
          </span>
        </div>
      </div>
    );
  }

  let bgStyle = "bg-gradient-to-r from-[#8ecae6] to-[#bde0fe]";
  if (bg === "cyan") bgStyle = "bg-gradient-to-r from-[#56cfe1] to-[#72efdd]";
  if (bg === "blue") bgStyle = "bg-gradient-to-r from-[#64b5f6] to-[#90caf9]";
  if (bg === "orange") bgStyle = "bg-gradient-to-r from-[#fed7aa] to-[#fcd5ce]";
  if (bg === "khaki") bgStyle = "bg-gradient-to-r from-[#b7b7a4] to-[#a5a58d]";
  if (bg === "darkblue") bgStyle = "bg-gradient-to-r from-[#1d3557] to-[#457b9d] text-white";

  return (
    <div
      className={`w-full h-full relative overflow-hidden flex flex-col justify-between p-2 select-none border border-gray-300 ${bgStyle}`}
    >
      <div className="flex justify-between items-start gap-1">
        <div>
          <p className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider text-gray-700 leading-tight">
            BẢN TIN
          </p>
          <div className="flex items-baseline font-black leading-none mt-0.5">
            <span className="text-[12.5px] sm:text-[14px] text-[#DA251C] tracking-tight">THÔNG TIN</span>
            <span className="text-[11.5px] sm:text-[13px] text-[#1b2559] ml-1 tracking-tight">TƯ LIỆU</span>
          </div>
          <p className="text-[6.5px] sm:text-[7px] text-gray-600 font-semibold uppercase mt-0.5">
            HỌC VIỆN HÀNH CHÍNH VÀ QUẢN TRỊ CÔNG
          </p>
        </div>
        <div className="text-right shrink-0 bg-white/70 px-1.5 py-0.5 rounded-xs border border-white/90">
          <p className="text-[6px] sm:text-[6.5px] text-gray-600 uppercase font-semibold">
            XUẤT BẢN MỖI THÁNG 1 KỲ
          </p>
          <p className="text-[10.5px] sm:text-[11.5px] font-black text-[#DA251C] leading-none">
            Số {so}
          </p>
          <p className="text-[6.5px] sm:text-[7px] font-bold text-gray-800 uppercase leading-none mt-0.5">
            {thang}
          </p>
        </div>
      </div>
      <div className="bg-[#1b2559] text-white text-[6.5px] sm:text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 text-center -mx-2 -mb-2 mt-auto">
        BẢN TIN CỦA HỌC VIỆN HÀNH CHÍNH VÀ QUẢN TRỊ CÔNG
      </div>
    </div>
  );
};

import SidebarMenu from "@/components/sidebar-menu";
import { libraryMenuItems } from "@/data/navigation";

const sidebarLatestNews = [
  "Bồi dưỡng kiến thức, kỹ năng đối ngoại trong công vụ hành chính",
  'Hội thảo khoa học: "An sinh xã hội cho người cao tuổi ở Việt Nam - Thực trạng và giải pháp"',
  'Giao lưu văn hóa và Tọa đàm bàn tròn "Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu"',
  "Thông tin luận án NCS Dương Thị Hòa",
  "Thông báo lựa chọn tổ chức bán đấu giá tài sản",
];

const sidebarMostReadNews = [
  "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công",
  "Các đơn vị trực thuộc",
  "Những chặng đường phát triển",
  "Lãnh đạo Học viện qua các thời kỳ",
  "Tóm tắt những nội dung chính trong Nghị quyết 59-NQ/TW năm 2025 của Bộ Chính trị về hội nhập quốc tế trong tình hình mới",
  "Ban Giám đốc Học viện Hành chính và Quản trị công",
  "Những phần thưởng và danh hiệu cao quý",
  "Thông báo về thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2025",
  "Học viện Hành chính và Quản trị công thông báo điểm trúng tuyển đại học hình thức chính quy và thủ tục, thời gian xác nhận nhập học đợt 1 năm 2025",
  "Phân hiệu Học viện Hành chính và Quản trị công tại tỉnh Đắk Lắk tổ chức Lễ bảo vệ đề án thạc sĩ cho học viên các lớp cao học Quản lý công",
];

// ─── Interfaces ───────────────────────────────────────────────────────────────
interface ArticleItem {
  id: string;
  title: string;
  date?: string;
  image?: string;
  isLogoCard?: boolean;
  banner?: {
    so: string;
    thang: string;
    bg?: string;
    classic?: boolean;
  };
  summary?: string;
  hasLink?: boolean;
  href?: string;
}

interface PageData {
  featured: ArticleItem;
  grid: ArticleItem[];
  list: ArticleItem[];
}

// ─── Trang 1 ──────────────────────────────────────────────────────────────────
const page1Data: PageData = {
  featured: {
    id: "p1-feat",
    title: "Bản tin Thông tin - Tư liệu số 38 (tháng 8/2026)",
    date: "14:42 03/09/2026",
    isLogoCard: true,
    href: "/hoc-lieu/thong-tin-tu-lieu",
  },
  grid: [
    {
      id: "p1-g1",
      title: "Bản tin Thông tin - Tư liệu số 37 (tháng 7.2026)",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-g2",
      title: "Bản tin Thông tin - Tư liệu số 36 (tháng 6/2026)",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-g3",
      title: "Bản tin Thông tin - Tư liệu số 35 (tháng 5/2026)",
      banner: { so: "35", thang: "THÁNG 5/2026", bg: "sky" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
  list: [
    {
      id: "p1-l1",
      title: "Bản tin Thông tin - Tư liệu số 34 (tháng 4/2026)",
      date: "15:10 04/05/2026",
      banner: { so: "34", thang: "THÁNG 4/2026", bg: "sky" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-l2",
      title: "Bản tin Thông tin - Tư liệu số 33 (tháng 3/2026)",
      date: "06:11 30/03/2026",
      banner: { so: "33", thang: "THÁNG 3/2026", bg: "blue" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-l3",
      title: "Bản tin Thông tin - Tư liệu số 32 (tháng 02 năm 2026)",
      date: "20:23 07/03/2026",
      banner: { so: "32", thang: "THÁNG 02/2026", bg: "cyan" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-l4",
      title: "Bản tin Thông tin - Tư liệu số 31 (tháng 01/2026)",
      date: "09:22 31/01/2026",
      banner: { so: "31", thang: "THÁNG 01/2026", bg: "cyan" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-l5",
      title: "Bản tin Thông tin - Tư liệu số 30 (tháng 12/2025)",
      date: "18:14 30/12/2025",
      banner: { so: "30", thang: "THÁNG 12/2025", bg: "orange" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p1-l6",
      title: "Bản tin Thông tin - Tư liệu số 29 (tháng 11/2025)",
      date: "20:44 30/11/2025",
      banner: { so: "29", thang: "THÁNG 11/2025", bg: "khaki" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
};

// ─── Trang 2 ──────────────────────────────────────────────────────────────────
const page2Data: PageData = {
  featured: {
    id: "p2-feat",
    title: "Bản tin Thông tin - Tư liệu số 28 (tháng 10/2025)",
    date: "16:30 30/10/2025",
    image: "/thong-tin&tu-lieu/IMG_4003-7aefa03b44.png",
    href: "/hoc-lieu/thong-tin-tu-lieu",
  },
  grid: [
    {
      id: "p2-g1",
      title: "Bản tin Thông tin - Tư liệu số 27 (tháng 9/2025)",
      banner: { so: "27", thang: "THÁNG 9/2025", bg: "cyan" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-g2",
      title: "Bản tin Thông tin - Tư liệu số 26 (tháng 8/2025)",
      banner: { so: "26", thang: "THÁNG 8/2025", bg: "cyan" },
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-g3",
      title: "Bản tin Thông tin – Tư liệu số 25 tháng 7/2025",
      image: "/thong-tin&tu-lieu/Screenshot-2025-07-28-144846-61437658e0.png",
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
  list: [
    {
      id: "p2-l1",
      title: "Bản tin Thông tin – Tư liệu số 24 (tháng 6.2025)",
      date: "14:39 28/06/2025",
      image: "/thong-tin&tu-lieu/Screen-Shot-2025-06-28-at-15.51.54-1-305x175-5935db2ebe.png",
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-l2",
      title: "Bản tin Thông tin – Tư liệu số 22 (tháng 4.2025)",
      date: "10:04 26/04/2025",
      banner: { so: "22", thang: "THÁNG 4/2025", bg: "darkblue" },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-l3",
      title: "Bản tin Thông tin – Tư liệu số 21 (tháng 3.2025)",
      date: "15:49 31/03/2025",
      banner: { so: "21", thang: "THÁNG 3/2025", bg: "red" },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-l4",
      title: "Bản tin Thông tin – Tư liệu số 20 (tháng 02.2025)",
      date: "15:49 28/02/2025",
      banner: { so: "20", thang: "THÁNG 02/2025", bg: "red" },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-l5",
      title: "Bản tin Thông tin – Tư liệu số 19 (tháng 12/2024)",
      date: "15:49 12/12/2024",
      banner: { so: "19", thang: "Tháng 12/2024", bg: "beige", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p2-l6",
      title: "Bản tin Thông tin – Tư liệu số đặc biệt (tháng 11/2024)",
      date: "15:48 13/11/2024",
      banner: { so: "ĐẶC BIỆT", thang: "Tháng 11/2024", bg: "beige", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
};

// ─── Trang 3 ──────────────────────────────────────────────────────────────────
const page3Data: PageData = {
  featured: {
    id: "p3-feat",
    title: "Bản tin Thông tin - Tư liệu số 17 (tháng 10/2024)",
    date: "15:48 10/10/2024",
    image: "/thong-tin&tu-lieu/IMG_5896-305x175-7fc208ce43.png",
    hasLink: true,
    href: "/hoc-lieu/thong-tin-tu-lieu",
  },
  grid: [
    {
      id: "p3-g1",
      title: "Bản tin Thông tin – Tư liệu số 16 (tháng 9.2024)",
      image: "/thong-tin&tu-lieu/IMG_5585-305x175-fbc64cc565.png",
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-g2",
      title: "Bản tin Thông tin – Tư liệu số 15 (tháng 8/2024)",
      banner: { so: "15", thang: "Tháng 8/2024", bg: "beige", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-g3",
      title: "Bản tin Thông tin – Tư liệu số 14 (tháng 7/2024)",
      banner: { so: "14", thang: "Tháng 7 năm 2024", bg: "temple", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
  list: [
    {
      id: "p3-l1",
      title: "Bản tin Thông tin – Tư liệu số 13 (tháng 6/2024)",
      date: "15:48 28/06/2024",
      banner: { so: "13", thang: "Tháng 6 năm 2024", bg: "beige", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-l2",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu số Đặc biệt – Học viện Hành chính Quốc gia",
      date: "18:11 23/05/2024",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-l3",
      title: "Bản tin Thông tin – Tư liệu số Đặc biệt (số 02/2024)",
      date: "15:48 23/05/2024",
      banner: { so: "ĐẶC BIỆT", thang: "Số 02 năm 2024", bg: "beige", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-l4",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu số 11 – Học viện Hành chính Quốc gia",
      date: "18:00 08/01/2024",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-l5",
      title: "Bản tin Thông tin tư liệu số 11 (số 01.2024)",
      date: "15:48 08/01/2024",
      banner: { so: "11", thang: "Số 01.2024", bg: "tech" },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p3-l6",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu số 10 – Học viện Hành chính Quốc gia",
      date: "17:48 18/09/2023",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
};

// ─── Trang 4 ──────────────────────────────────────────────────────────────────
const page4Data: PageData = {
  featured: {
    id: "p4-feat",
    title: "Bản tin Thông tin Tư liệu số 10 (số 04/2023)",
    date: "15:48 18/09/2023",
    image: "/thong-tin&tu-lieu/IMG_3608-305x175-ffe2d54d6d.png",
    hasLink: true,
    href: "/hoc-lieu/thong-tin-tu-lieu",
  },
  grid: [
    {
      id: "p4-g1",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu số 09 – Học viện Hành chính Quốc gia",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p4-g2",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu số 08 – Học viện Hành chính Quốc gia",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p4-g3",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu số 07 (Số 01/2023)",
      isLogoCard: true,
      summary:
        "Thực hiện ý kiến chỉ đạo của Giám đốc Học viện và Lãnh đạo Trung tâm Công nghệ và Thư viện, tại Kế hoạch xây dựng Bản tin Thông tin Tư liệu của Học viện Hành chính Quốc gia đã được phê...",
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
  list: [
    {
      id: "p4-l1",
      title: "Bản tin Thông tin Tư liệu số 7 (số 01/2023)",
      date: "10:39 16/01/2023",
      banner: { so: "07", thang: "Số 01/2023", bg: "yellow", classic: true },
      hasLink: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p4-l2",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu Học viện Hành chính Quốc gia",
      date: "12:02 18/03/2022",
      isLogoCard: true,
      summary:
        "Được sự phê duyệt của Giám đốc Học viện tại Tờ trình số 29/TTr-TTTHNNTTTV ngày 17/3/2022, Phòng Quản lý Thông tin và Tư liệu, Trung tâm Ngoại ngữ – Tin học và Thông tin – Thư viện đã đăng tải Bản tin số 04 (số 02.2022) trên website của Học viện, tại mục Tin tức – Thông tin hành chính.",
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
    {
      id: "p4-l3",
      title: "Thông báo về việc đăng tải Bản tin Thông tin Tư liệu – Học viện Hành chính Quốc gia",
      date: "11:57 18/10/2021",
      isLogoCard: true,
      href: "/hoc-lieu/thong-tin-tu-lieu",
    },
  ],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
  3: page3Data,
  4: page4Data,
};

// ─── Thumbnail Helper Component ───────────────────────────────────────────────
const ArticleThumb = ({
  article,
  large = false,
}: {
  article: ArticleItem;
  large?: boolean;
}) => {
  if (article.isLogoCard) {
    return <ApagLogoCard large={large} />;
  }
  if (article.image) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-white flex items-center justify-center">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }
  if (article.banner) {
    return (
      <BanTinBanner
        so={article.banner.so}
        thang={article.banner.thang}
        bg={article.banner.bg}
        classic={article.banner.classic}
      />
    );
  }
  return <ApagLogoCard large={large} />;
};

export default function ThongTinTuLieuPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 4;

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const handlePageChange = (pageNum: number) => {
    const target = Math.min(Math.max(pageNum, 1), totalPages);
    setCurrentPage(target);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen py-6 sm:py-8 font-sans">
      <div className="w-full max-w-[1240px] xl:max-w-[1280px] mx-auto px-3 sm:px-4">
        <div className="flex flex-row max-[480px]:flex-col gap-6 xl:gap-7 items-start">
          {/* ══════════════════════════════════════════════════════════════════
              CỘT TRÁI (SIDEBAR)
              ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-[280px] xl:w-[300px] max-[480px]:w-full shrink-0 flex flex-col gap-4">
            <SidebarMenu title="HỌC LIỆU" items={libraryMenuItems} />

            {/* TIN MỚI NHẤT */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN MỚI NHẤT
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarLatestNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/hoc-lieu/thong-tin-tu-lieu"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">•</span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-3 group-hover:underline">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* TIN ĐỌC NHIỀU */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN ĐỌC NHIỀU
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarMostReadNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/hoc-lieu/thong-tin-tu-lieu"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">•</span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-4 group-hover:underline">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ══════════════════════════════════════════════════════════════════
              CỘT PHẢI (NỘI DUNG CHÍNH)
              ══════════════════════════════════════════════════════════════════ */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center h-10 mb-5 w-full">
              <Link
                href="/"
                aria-label="Về trang chủ"
                className="bg-[#1b2559] text-white w-10 h-10 flex items-center justify-center shrink-0 hover:bg-[#151d45] transition-colors"
              >
                <Home size={18} className="text-white" />
              </Link>
              <div className="bg-[#e9ecef] flex-1 h-10 flex items-center px-4">
                <span className="text-[#DA251C] font-bold text-[clamp(12.5px,0.72rem+0.2vw,14.5px)] uppercase tracking-wide">
                  THÔNG TIN TƯ LIỆU
                </span>
              </div>
            </div>

            {/* 1. Bài viết tiêu điểm (Featured) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-6 items-start">
              <div className="w-[48%] max-[480px]:w-full h-[210px] sm:h-[240px] md:h-[255px] shrink-0 border border-gray-300 bg-white overflow-hidden">
                <Link
                  href={currentContent.featured.href || "/hoc-lieu/thong-tin-tu-lieu"}
                  className="block relative w-full h-full group cursor-pointer"
                >
                  <ArticleThumb article={currentContent.featured} large />
                </Link>
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h1 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={currentContent.featured.href || "/hoc-lieu/thong-tin-tu-lieu"}>
                    {currentContent.featured.title}
                  </Link>
                </h1>
                {currentContent.featured.date && (
                  <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2.5">
                    {currentContent.featured.date}
                  </p>
                )}
                {currentContent.featured.hasLink && (
                  <p className="text-[clamp(11.5px,0.65rem+0.12vw,12.5px)] text-gray-600 mt-2">
                    Xem chi tiết:{" "}
                    <Link
                      href={currentContent.featured.href || "/hoc-lieu/thong-tin-tu-lieu"}
                      className="text-[#0d6efd] hover:underline font-medium"
                    >
                      Tại đây
                    </Link>
                  </p>
                )}
              </div>
            </article>

            {/* 2. Lưới 3 bài viết kế tiếp */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-7 pt-6">
              {currentContent.grid.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <div className="w-full h-[145px] sm:h-[155px] md:h-[165px] border border-gray-300 relative overflow-hidden group cursor-pointer bg-white">
                    <Link
                      href={article.href || "/hoc-lieu/thong-tin-tu-lieu"}
                      className="block relative w-full h-full"
                    >
                      <ArticleThumb article={article} />
                    </Link>
                  </div>
                  <h2 className="text-[clamp(13px,0.75rem+0.15vw,14.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-3">
                    <Link href={article.href || "/hoc-lieu/thong-tin-tu-lieu"}>
                      {article.title}
                    </Link>
                  </h2>
                  {article.hasLink && (
                    <p className="text-[clamp(11.5px,0.65rem+0.12vw,12px)] text-gray-600 mt-1">
                      Xem chi tiết:{" "}
                      <Link
                        href={article.href || "/hoc-lieu/thong-tin-tu-lieu"}
                        className="text-[#0d6efd] hover:underline font-medium"
                      >
                        Tại đây
                      </Link>
                    </p>
                  )}
                  {article.summary && (
                    <p className="text-[clamp(11.5px,0.65rem+0.12vw,12px)] text-gray-600 leading-relaxed text-justify mt-1.5 line-clamp-4">
                      {article.summary}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {/* 3. Danh sách bài viết tiếp theo (ảnh/logo trái — chữ phải) */}
            {currentContent.list.length > 0 && (
              <div className="space-y-4 sm:space-y-5 mt-6 pt-5 border-t border-gray-200">
                {currentContent.list.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-4 items-start"
                  >
                    <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0">
                      <Link
                        href={article.href || "/hoc-lieu/thong-tin-tu-lieu"}
                        className="block relative w-full h-full overflow-hidden group cursor-pointer bg-white border border-gray-300"
                      >
                        <ArticleThumb article={article} />
                      </Link>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-[clamp(13px,0.78rem+0.18vw,14.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                        <Link href={article.href || "/hoc-lieu/thong-tin-tu-lieu"}>
                          {article.title}
                        </Link>
                      </h2>
                      {article.date && (
                        <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-1">
                          {article.date}
                        </p>
                      )}
                      {article.hasLink && (
                        <p className="text-[clamp(11.5px,0.65rem+0.12vw,12.5px)] text-gray-600 mt-1">
                          Xem chi tiết:{" "}
                          <Link
                            href={article.href || "/hoc-lieu/thong-tin-tu-lieu"}
                            className="text-[#0d6efd] hover:underline font-medium"
                          >
                            Tại đây
                          </Link>
                        </p>
                      )}
                      {article.summary && (
                        <p className="text-[clamp(12px,0.7rem+0.15vw,13px)] text-gray-600 leading-relaxed text-justify mt-1.5 line-clamp-3">
                          {article.summary}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* 4. Phân trang tối đa 3 ô, có ... nếu > 3 */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />


            {/* 5. Tìm kiếm thông tin */}
            <div className="mt-8 flex justify-center items-center">
              <div className="flex items-center border border-gray-300 px-3 py-1.5 max-w-sm w-full bg-white shadow-xs focus-within:border-gray-400">
                <input
                  type="text"
                  placeholder="TÌM KIẾM THÔNG TIN"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs font-semibold text-gray-700 placeholder-gray-500 uppercase outline-none bg-transparent"
                />
                <button
                  type="button"
                  aria-label="Tìm kiếm"
                  className="text-gray-700 hover:text-[#DA251C] ml-2 transition-colors cursor-pointer"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
