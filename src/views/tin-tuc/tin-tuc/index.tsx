"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
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

import SidebarMenu from "@/components/sidebar-menu";
import { newsMenuItems } from "@/data/navigation";


const sidebarLatestNews = [
  {
    title: "Bồi dưỡng kiến thức, kỹ năng đối ngoại trong công vụ hành chính",
    href: "/bai-viet/tap-huan-ky-nang-xay-dung-chinh-quyen-so-cap-xa",
  },
  {
    title: 'Hội thảo khoa học: "An sinh xã hội cho người cao tuổi ở Việt Nam - Thực trạng và giải pháp"',
    href: "/bai-viet/hoi-thao-khoa-hoc-an-sinh-xa-hoi-cho-nguoi-cao-tuoi-o-viet-nam-thuc-trang-va-giai-phap",
  },
  {
    title: 'Giao lưu văn hóa và Tọa đàm bàn tròn "Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu"',
    href: "/bai-viet/giao-luu-van-hoa-va-toa-dam-ban-tron-phat-trien-nang-luc-lanh-dao-da-van-hoa-va-dinh-huong-nghe-nghiep-toan-cau",
  },
  {
    title: "Thông tin luận án NCS Dương Thị Hòa",
    href: "/bai-viet/doi-moi-phuong-phap-khao-thi-danh-gia-thuc-chat",
  },
  {
    title: "Thông báo lựa chọn tổ chức bán đấu giá tài sản",
    href: "/bai-viet/thong-bao-lua-chon-to-chuc-ban-dau-gia-tai-san",
  },
];

const sidebarMostReadNews = [
  {
    title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công",
    href: "/bai-viet/tap-huan-ky-nang-xay-dung-chinh-quyen-so-cap-xa",
  },
  {
    title: "Các đơn vị trực thuộc",
    href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc",
  },
  {
    title: "Những chặng đường phát triển",
    href: "/gioi-thieu/nhung-chang-duong-phat-trien",
  },
  {
    title: "Lãnh đạo Học viện qua các thời kỳ",
    href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky",
  },
  {
    title: "Tóm tắt những nội dung chính trong Nghị quyết 59-NQ/TW năm 2025 của Bộ Chính trị về hội nhập quốc tế trong tình hình mới",
    href: "/bai-viet/tri-tue-nhan-tao-va-phap-quyen-trong-ky-nguyen-so-tu-kinh-nghiem-quoc-te-den-nhung-ham-y-doi-voi-viet-nam",
  },
  {
    title: "Ban Giám đốc Học viện Hành chính và Quản trị công",
    href: "/gioi-thieu/ban-giam-doc-phan-hieu",
  },
  {
    title: "Những phần thưởng và danh hiệu cao quý",
    href: "/gioi-thieu/nhung-phan-thuong-va-danh-hieu-cao-quy",
  },
  {
    title: "Thông báo về thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2025",
    href: "/bai-viet/tap-huan-ky-nang-xay-dung-chinh-quyen-so-cap-xa",
  },
  {
    title: "Học viện Hành chính và Quản trị công thông báo điểm trúng tuyển đại học hình thức chính quy và thủ tục, thời gian xác nhận nhập học đợt 1 năm 2025",
    href: "/bai-viet/doi-moi-phuong-phap-khao-thi-danh-gia-thuc-chat",
  },
  {
    title: "Phân hiệu Học viện Hành chính và Quản trị công tại tỉnh Đắk Lắk tổ chức Lễ bảo vệ đề án thạc sĩ cho học viên các lớp cao học Quản lý công",
    href: "/bai-viet/hoi-thao-khoa-hoc-an-sinh-xa-hoi-cho-nguoi-cao-tuoi-o-viet-nam-thuc-trang-va-giai-phap",
  },
];

// ─── Interfaces ───────────────────────────────────────────────────────────────
interface ArticleItem {
  id: string;
  title: string;
  date?: string;
  href?: string;
  isRedTitle?: boolean;
}

interface PageData {
  featured: ArticleItem;
  grid: ArticleItem[];
  list: ArticleItem[];
}

// ─── Data Page 1 ──────────────────────────────────────────────────────────────
const page1Data: PageData = {
  featured: {
    id: "p1-feat",
    title: "Thông báo lựa chọn tổ chức bán đấu giá tài sản",
    date: "09:13 17/09/2026",
    href: "/bai-viet/thong-bao-lua-chon-to-chuc-ban-dau-gia-tai-san",
  },
  grid: [
    {
      id: "p1-g1",
      title: "Thông báo danh sách xem xét nâng bậc lương thường xuyên tháng 10/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-g2",
      title:
        "Quyết định số 3546-QĐ/HVHC&QTC ngày 09/9/2026 về việc công nhận tốt nghiệp trình độ đại học đợt 3 năm 2026 cho sinh viên hình thức chính quy học cùng lúc hai chương trình đào tạo (SONG BẰNG) trúng tuyển năm 2021, học tại Hà Nội",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-g3",
      title:
        "Quyết định số 3551-QĐ/HVHC&QTC ngày 09/9/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 3 năm 2026 cho sinh viên hình thức chính quy trúng tuyển năm 2020, học tại Hà Nội",
      href: "/tin-tuc/thong-bao",
    },
  ],
  list: [
    {
      id: "p1-l1",
      title:
        "Quyết định số 3550-QĐ/HVHC&QTC ngày 09/9/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 3 năm 2026 cho sinh viên hình thức chính quy trúng tuyển năm 2021, học tại Hà Nội",
      date: "14:29 09/09/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-l2",
      title:
        "Thông báo danh sách dự kiến công nhận tốt nghiệp trình độ đại học đợt 3 năm 2026 cho sinh viên hình thức chính quy và song bằng trúng tuyển năm 2020, 2021 học tại trụ sở Hà Nội",
      date: "07:20 29/08/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-l3",
      title: "Kế hoạch Triển khai thực hiện bảo hiểm y tế, bảo hiểm thân thể sinh viên năm học 2026 – 2027",
      date: "11:58 21/08/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-l4",
      title: "Thông báo Chiêu sinh lớp Bồi dưỡng nghiệp vụ Văn thư, nghiệp vụ Lưu trữ khai giảng tháng 9/2026",
      date: "16:10 20/08/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-l5",
      title: "Thông báo Tiếp nhận sinh viên nội trú tại Ký túc xá năm học 2026-2027",
      date: "15:30 18/08/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p1-l6",
      title:
        "Thông báo thời gian tối đa hoàn thành chương trình đào tạo đối với sinh viên trình độ đại học hình thức chính quy trúng tuyển năm 2020, học tại trụ sở Hà Nội",
      date: "11:38 18/08/2026",
      href: "/tin-tuc/thong-bao",
    },
  ],
};

// ─── Data Page 2 ──────────────────────────────────────────────────────────────
const page2Data: PageData = {
  featured: {
    id: "p2-feat",
    title: "Thông báo về việc mời chào giá dịch vụ thẩm định giá",
    date: "11:00 18/08/2026",
    href: "/tin-tuc/thong-bao",
  },
  grid: [
    {
      id: "p2-g1",
      title:
        "Thông báo danh sách viên chức, người lao động được xem xét nâng bậc lương thường xuyên tháng 9 năm 2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-g2",
      title:
        "Kế hoạch Tổ chức kỳ thi đánh giá năng lực tiếng Trung, tiếng Pháp của Học viện Hành chính và Quản trị công tại Hà Nội (Đợt 1 - năm 2026)",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-g3",
      title:
        "Thông báo mở lớp nâng cao năng lực tiếng Trung và tiếng Pháp tương đương bậc 3/6 theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam tại Học viện Hành chính và Quản trị công năm 2026",
      href: "/tin-tuc/thong-bao",
    },
  ],
  list: [
    {
      id: "p2-l1",
      title: "Thông báo danh sách xem xét nâng bậc lương thường xuyên tháng 8/2026",
      date: "09:00 13/07/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-l2",
      title:
        "Quyết định số 2544-QĐ/HVHC&QTC ngày 25/6/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 2 năm 2026 (LẦN 2) cho sinh viên hình thức chính quy trúng tuyển năm 2021, học tại Hà Nội",
      date: "17:32 25/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-l3",
      title:
        "Quyết định số 2543-QĐ/HVHC&QTC ngày 25/6/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 2 năm 2026 (LẦN 2) cho sinh viên hình thức chính quy trúng tuyển năm 2020, học tại Hà Nội",
      date: "17:31 25/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-l4",
      title:
        "Quyết định số 2488-QĐ/HVHC&QTC ngày 18/6/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 2 năm 2026 cho sinh viên học cùng lúc hai chương trình đào tạo hình thức chính quy trúng tuyển năm",
      date: "20:54 18/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-l5",
      title:
        "Quyết định số 2487-QĐ/HVHC&QTC ngày 18/6/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 2 năm 2026 (LẦN 1) cho sinh viên hình thức chính quy trúng tuyển năm 2021, học tại Hà Nội",
      date: "20:52 18/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p2-l6",
      title:
        "Quyết định số 2486-QĐ/HVHC&QTC ngày 18/6/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 2 năm 2026 (LẦN 1) cho sinh viên hình thức chính quy trúng tuyển năm 2020, học tại Hà Nội",
      date: "20:51 18/06/2026",
      href: "/tin-tuc/thong-bao",
    },
  ],
};

// ─── Data Page 3 ──────────────────────────────────────────────────────────────
const page3Data: PageData = {
  featured: {
    id: "p3-feat",
    title:
      "Thông báo tổ chức Lễ bế giảng và trao bằng tốt nghiệp trình độ đại học năm 2026 đối với sinh viên học tại trụ sở Hà Nội",
    date: "10:55 17/06/2026",
    href: "/tin-tuc/thong-bao",
  },
  grid: [
    {
      id: "p3-g1",
      title:
        "Quyết định công nhận tốt nghiệp đợt 2 năm 2026 đối với sinh viên đại học hình thức chính quy trúng tuyển năm 2022, học tại trụ sở Hà Nội",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-g2",
      title:
        "Thông báo Danh sách sinh viên trình độ đại học hình thức chính quy và sinh viên học cùng lúc hai chương trình đào tạo trúng tuyển năm 2020, 2021 học tại Hà Nội dự kiến đủ điều kiện công nhận tốt nghiệp đợt 2 năm 2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-g3",
      title:
        "Thông báo chào giá dịch vụ phi tư vấn cung cấp dịch vụ an ninh bảo vệ cho Học viện Hành chính và Quản trị công",
      href: "/tin-tuc/thong-bao",
    },
  ],
  list: [
    {
      id: "p3-l1",
      title:
        "Kế hoạch Tổ chức kỳ thi đánh giá năng lực tiếng Anh của Học viện Hành chính và Quản trị công tại Hà Nội (Đợt 3 - năm 2026)",
      date: "11:29 04/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-l2",
      title:
        "Thư mời chào giá dịch vụ tư vấn thẩm tra bản vẽ thiết kế thi công và dự toán kinh phí mua sắm, lắp đặt bộ logo và biển hiệu của Học viện Hành chính và Quản trị công",
      date: "16:19 02/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-l3",
      title:
        "Thư mời chào giá dịch vụ tư vấn lập bản vẽ thiết kế thi công và lập dự toán kinh phí mua sắm, lắp đặt bộ logo và biển hiệu của Học viện Hành chính và Quản trị công",
      date: "16:15 02/06/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-l4",
      title:
        "Thông báo Triển khai hệ thống giải quyết thủ tục hành chính (trực tuyến) trong công tác khảo thí cho sinh viên, học viên Học viện Hành chính và Quản trị công",
      date: "10:50 25/05/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-l5",
      title: "Thông báo danh sách xem xét nâng bậc lương thường xuyên tháng 6/2026",
      date: "11:58 08/05/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p3-l6",
      title:
        "Kế hoạch số 801-KH/KTĐBCL ngày 28/4/2026 về tổ chức kỳ thi đánh giá năng lực tiếng Anh trình độ tương ứng bậc 3 theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam của Học viện Hành chính và Quản trị công tại Hà Nội (Đợt 02 – năm 2026)",
      date: "09:42 29/04/2026",
      href: "/tin-tuc/thong-bao",
    },
  ],
};

// ─── Data Page 4 ──────────────────────────────────────────────────────────────
const page4Data: PageData = {
  featured: {
    id: "p4-feat",
    title: "Thông báo Danh sách xem xét nâng lương tháng 5/2026",
    date: "20:24 27/04/2026",
    href: "/tin-tuc/thong-bao",
  },
  grid: [
    {
      id: "p4-g1",
      title:
        "Thông báo về việc tiếp nhận sinh viên ở nội trú tại Ký túc xá số 40 Xuân La, Học viện Hành chính và Quản trị công",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-g2",
      title:
        "Quyết định số 1127-QĐ/HVHC&QTC ngày 09/4/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 1 năm 2026 (LẦN 2) cho sinh viên hình thức chính quy trúng tuyển năm 2021, học tại Hà Nội",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-g3",
      title:
        "Quyết định số 1126-QĐ/HVHC&QTC ngày 09/4/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 1 năm 2026 cho sinh viên hình thức chính quy học cùng lúc hai chương trình đào tạo trúng tuyển năm",
      href: "/tin-tuc/thong-bao",
    },
  ],
  list: [
    {
      id: "p4-l1",
      title:
        "Quyết định số 1125-QĐ/HVHC&QTC ngày 09/4/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 1 năm 2026 cho sinh viên hình thức chính quy trúng tuyển năm 2020, học tại Hà Nội",
      date: "14:20 10/04/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-l2",
      title:
        "Thông báo về việc nghỉ lễ Giỗ Tổ Hùng Vương (10/3 âm lịch), ngày Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026",
      date: "14:37 09/04/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-l3",
      title:
        "Thông báo danh sách dự kiến công nhận tốt nghiệp trình độ đại học đợt 1 năm 2026 (Lần 2) cho sinh viên hình thức chính quy và Song bằng trúng tuyển năm 2020, 2021 học tại trụ sở Hà Nội",
      date: "15:58 02/04/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-l4",
      title: "Thông báo chiêu sinh lớp Bồi dưỡng nghiệp vụ Văn thư, nghiệp vụ Lưu trữ khai giảng tháng 4/2026",
      date: "17:04 30/03/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-l5",
      title:
        "Thông báo về việc tổ chức các lớp ôn thi nâng cao năng lực tiếng Anh tương đương bậc 3/6 (B1) theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam tại Học viện Hành chính và Quản trị công năm 2026",
      date: "11:05 27/03/2026",
      isRedTitle: true,
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p4-l6",
      title:
        "Kế hoạch xét, công nhận kết quả học tập và chuyển đổi tín chỉ năm 2026 các học phần trong chương trình đào tạo trình độ đại học cho sinh viên học tại trụ sở Hà Nội",
      date: "14:32 23/03/2026",
      href: "/tin-tuc/thong-bao",
    },
  ],
};

// ─── Data Page 5 ──────────────────────────────────────────────────────────────
const page5Data: PageData = {
  featured: {
    id: "p5-feat",
    title:
      "Kế hoạch Tổ chức kỳ thi đánh giá năng lực tiếng Anh trình độ tương ứng bậc 3 theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam của Học viện Hành chính và Quản trị công tại Hà Nội (Đợt 01 - năm 2026)",
    date: "17:56 20/03/2026",
    href: "/tin-tuc/thong-bao",
  },
  grid: [
    {
      id: "p5-g1",
      title:
        "Danh sách viên chức và người lao động Học viện tại Hà Nội được xem xét nâng bậc lương thường xuyên tháng 4/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-g2",
      title:
        "Thông báo về việc chào giá dịch vụ phi tư vấn, tư vấn khảo sát, lập phương án quản lý vận hành tòa nhà",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-g3",
      title: "Thông báo danh sách xem xét nâng bậc lương thường xuyên tháng 3/2026",
      href: "/tin-tuc/thong-bao",
    },
  ],
  list: [
    {
      id: "p5-l1",
      title:
        "Quyết định số 511-QĐ/HVHC&QTC ngày 12/02/2026 của Giám đốc Học viện Hành chính và Quản trị công về việc công nhận tốt nghiệp trình độ đại học đợt 1 năm 2026 (LẦN 1) cho sinh viên hình thức chính quy trúng tuyển năm 2021, học tại Hà Nội",
      date: "21:05 12/02/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-l2",
      title:
        "Thông báo danh sách viên chức, người lao động được xem xét nâng bậc lương thường xuyên tháng 02.2026",
      date: "17:20 11/02/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-l3",
      title:
        "Thông báo danh sách viên chức, người lao động được xem xét nâng bậc lương thường xuyên tháng 01.2026",
      date: "17:16 11/02/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-l4",
      title:
        "Thông báo kết quả họp xét nâng bậc lương trước thời hạn do lập thành tích xuất sắc trong thực hiện nhiệm vụ năm 2025",
      date: "16:22 11/02/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-l5",
      title:
        "Thông báo Thời gian tổ chức các kỳ thi đánh giá năng lực tiếng Anh trình độ tương ứng bậc 3 theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam năm 2026 tại Học viện Hành chính và Quản trị công",
      date: "15:17 23/01/2026",
      href: "/tin-tuc/thong-bao",
    },
    {
      id: "p5-l6",
      title: "Công văn nộp hồ sơ nâng bậc lương trước thời hạn chỉ tiêu năm 2025",
      date: "14:30 31/12/2025",
      href: "/tin-tuc/thong-bao",
    },
  ],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
  3: page3Data,
  4: page4Data,
  5: page5Data,
};

export default function TinTucPage() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 5;

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const isThongBao = pathname.includes("thong-bao");
  const isCatActive = (href: string) => {
    if (pathname === href) return true;
    if (href === "/tin-tuc/thong-bao" && isThongBao) return true;
    if (href === "/tin-tuc/tin-tuc" && !isThongBao && (pathname === "/tin-tuc" || pathname.startsWith("/tin-tuc/tin-tuc"))) return true;
    return false;
  };

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
            <SidebarMenu title="TIN TỨC" items={newsMenuItems} />


            {/* TIN MỚI NHẤT */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN MỚI NHẤT
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarLatestNews.map((item, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href={item.href}
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">•</span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-3 group-hover:underline">
                        {item.title}
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
                {sidebarMostReadNews.map((item, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href={item.href}
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">•</span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-4 group-hover:underline">
                        {item.title}
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
                  {isThongBao ? "THÔNG BÁO" : "TIN TỨC"}
                </span>

              </div>
            </div>

            {/* 1. Bài viết tiêu điểm (Featured) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-6 items-start">
              <div className="w-[48%] max-[480px]:w-full h-[210px] sm:h-[240px] md:h-[255px] shrink-0 border border-gray-300 bg-white overflow-hidden">
                <Link
                  href={currentContent.featured.href || "/tin-tuc/thong-bao"}
                  className="block relative w-full h-full group cursor-pointer"
                >
                  <ApagLogoCard large />
                </Link>
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h1 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={currentContent.featured.href || "/tin-tuc/thong-bao"}>
                    {currentContent.featured.title}
                  </Link>
                </h1>
                {currentContent.featured.date && (
                  <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-3">
                    {currentContent.featured.date}
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
                      href={article.href || "/tin-tuc/thong-bao"}
                      className="block relative w-full h-full"
                    >
                      <ApagLogoCard className="border-0" />
                    </Link>
                  </div>
                  <h2 className="text-[clamp(13px,0.75rem+0.15vw,14.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-4">
                    <Link href={article.href || "/tin-tuc/thong-bao"}>{article.title}</Link>
                  </h2>
                </article>
              ))}
            </div>

            {/* 3. Danh sách bài viết tiếp theo (logo trái — chữ phải) */}
            {currentContent.list.length > 0 && (
              <div className="space-y-4 sm:space-y-5 mt-6 pt-5 border-t border-gray-200">
                {currentContent.list.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-4 items-start"
                  >
                    <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0 border border-gray-300 bg-white overflow-hidden">
                      <Link
                        href={article.href || "/tin-tuc/thong-bao"}
                        className="block relative w-full h-full group cursor-pointer"
                      >
                        <ApagLogoCard className="border-0" />
                      </Link>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        className={`text-[clamp(13px,0.78rem+0.18vw,14.5px)] font-bold leading-snug transition-colors ${
                          article.isRedTitle
                            ? "text-[#DA251C] hover:text-[#b01c22]"
                            : "text-gray-900 hover:text-[#DA251C]"
                        }`}
                      >
                        <Link href={article.href || "/tin-tuc/thong-bao"}>
                          {article.title}
                        </Link>
                      </h2>
                      {article.date && (
                        <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-1.5">
                          {article.date}
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
