"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, Search } from "lucide-react";
import Pagination from "@/components/pagination";
import SidebarMenu from "@/components/sidebar-menu";
import { newsMenuItems } from "@/data/navigation";

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

// ─── Sidebar Data ─────────────────────────────────────────────────────────────
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
  href?: string;
  image?: string;
  excerpt?: string;
}

interface PageData {
  featured: ArticleItem;
  grid: ArticleItem[];
  list: ArticleItem[];
}

// ─── Data Page 1 ──────────────────────────────────────────────────────────────
const page1Data: PageData = {
  featured: {
    id: "ttpl-p1-feat",
    title:
      "Phổ biến Nghị định số 345/2026/NĐ-CP của Chính phủ: Quy định chi tiết một số điều, biện pháp thi hành Luật Dự trữ quốc gia về dự trữ quốc gia và quản lý, sử dụng hàng dự trữ quốc gia.",
    date: "14:37 16/09/2026",
    image: "/tuyen-truyen-phap-luat/345-ef2ff26f89.png",
    href: "/tin-tuc/tuyen-truyen-phap-luat",
  },
  grid: [
    {
      id: "ttpl-p1-g1",
      title:
        "Phổ biến Thông tư số 74/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định Danh mục ngành đào tạo các trình độ của giáo dục đại học.",
      image: "/tuyen-truyen-phap-luat/74-4c751b6c80-13a8b98e28.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-g2",
      title:
        "Phổ biến Thông tư số 72/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định về hợp tác, liên kết đào tạo trong giáo dục nghề nghiệp.",
      image: "/tuyen-truyen-phap-luat/72-20eb89c167.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-g3",
      title:
        "Phổ biến Văn bản hợp nhất số 17/2026/VBHN-BKHCN của Bộ Khoa học và Công nghệ: Quy định về chữ ký điện tử và dịch vụ tin cậy.",
      image: "/tuyen-truyen-phap-luat/17-43ba187248-772e1a0537.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
  ],
  list: [
    {
      id: "ttpl-p1-l1",
      title:
        "Phổ biến Quyết định số 39/2026/QĐ-TTg của Thủ tướng Chính phủ: Quy định về Khung trình độ quốc gia Việt Nam.",
      date: "17:00 08/09/2026",
      image: "/tuyen-truyen-phap-luat/39-621febcb19.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-l2",
      title:
        "Phổ biến Văn bản hợp nhất số 15/2026/VBHN-BYT của Bộ Y tế: Quy định chi tiết và hướng dẫn thi hành một số điều của Luật Bảo hiểm xã hội về trợ cấp hưu trí xã hội",
      date: "17:00 08/09/2026",
      image: "/tuyen-truyen-phap-luat/15-d892aed31b-274e42028d.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-l3",
      title:
        "Phổ biến Nghị định số 309/2026/NĐ-CP của Chính phủ: Sửa đổi, bổ sung một số điều của Nghị định số 118/2025/NĐ-CP ngày 09 tháng 6 năm 2025 của Chính phủ về thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa",
      date: "17:00 08/09/2026",
      image: "/tuyen-truyen-phap-luat/309-e0ebfd54dd-add769f805.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-l4",
      title:
        "Phổ biến Nghị định số 317/2026/NĐ-CP của Chính phủ: Quy định về tổ chức, quản lý và sử dụng Quỹ Học bổng Quốc gia",
      date: "17:00 08/09/2026",
      image: "/tuyen-truyen-phap-luat/317-87f63f9b2d-bf3a7b591a.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-l5",
      title:
        "Phổ biến Văn bản hợp nhất số 01/2026/VBHN-BTP của Bộ Tư pháp: Về thực hiện thủ tục hành chính trên môi trường điện tử",
      date: "17:00 04/09/2026",
      image: "/tuyen-truyen-phap-luat/01-d6a757e74e-2b103d4694.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p1-l6",
      title:
        "Phổ biến Thông tư 71/2026/TT-BGDĐT Quy định về hội đồng trường của cơ sở giáo dục đại học tư thục và cơ sở giáo dục nghề nghiệp tư thục",
      date: "17:00 04/09/2026",
      image: "/tuyen-truyen-phap-luat/71-b393fb695f-22c420b7fe.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
  ],
};

// ─── Data Page 2 ──────────────────────────────────────────────────────────────
const page2Data: PageData = {
  featured: {
    id: "ttpl-p2-feat",
    title: "Phổ biến Luật số 12/2026/QH16 của Quốc hội: Luật Phổ biến, giáo dục pháp luật",
    date: "17:00 04/09/2026",
    image: "/tuyen-truyen-phap-luat/p2_feat_luat_12.png",
    href: "/tin-tuc/tuyen-truyen-phap-luat",
  },
  grid: [
    {
      id: "ttpl-p2-g1",
      title:
        "Phổ biến Văn bản hợp nhất số 6050/2026/VBHN-BTP của Bộ Tư pháp: Về thực hiện thủ tục hành chính theo cơ chế Một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.",
      image: "/tuyen-truyen-phap-luat/p2_g1_vbhn_6050.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-g2",
      title:
        "Phổ biến Thông tư số 70/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định về quản lý và sử dụng học bạ số trong các cơ sở giáo dục phổ thông và cơ sở giáo dục thường xuyên.",
      excerpt:
        "Quy định về quản lý và sử dụng học bạ số trong các cơ sở giáo dục phổ thông và cơ sở giáo dục thường xuyên.",
      image: "/tuyen-truyen-phap-luat/p2_g2_tt_70.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-g3",
      title:
        "Phổ biến Nghị quyết số 241/NQ-CP của Chính phủ: Về việc tiếp thu, giải trình và chỉnh lý dự thảo Luật Phổ biến, giáo dục pháp luật (sửa đổi).",
      excerpt:
        "Về việc tiếp thu, giải trình và chỉnh lý dự thảo Luật Phổ biến, giáo dục pháp luật (sửa đổi)",
      image: "/tuyen-truyen-phap-luat/p2_g3_nq_241.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
  ],
  list: [
    {
      id: "ttpl-p2-l1",
      title:
        "Phổ biến Thông tư số 69/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Ban hành Quy chế tổ chức và hoạt động của trường năng khiếu nghệ thuật, thể dục, thể thao.",
      date: "16:00 26/08/2026",
      excerpt:
        "Ban hành Quy chế tổ chức và hoạt động của trường năng khiếu nghệ thuật, thể dục, thể thao.",
      image: "/tuyen-truyen-phap-luat/p2_l1_tt_69.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-l2",
      title:
        "Phổ biến Thông tư số 68/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định việc giảng dạy khối lượng kiến thức văn hóa giáo dục phổ thông trong chương trình đào tạo các ngành, nghề đặc thù.",
      date: "16:00 26/08/2026",
      excerpt:
        "Quy định việc giảng dạy khối lượng kiến thức văn hóa giáo dục phổ thông trong chương trình đào tạo các ngành, nghề đặc thù.",
      image: "/tuyen-truyen-phap-luat/p2_l2_tt_68.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-l3",
      title:
        "Phổ biến Văn bản hợp nhất số 10/2026/VBHN-BNV của Bộ Nội vụ: Quy định về tuyển dụng, sử dụng và quản lý công chức.",
      date: "17:00 19/08/2026",
      excerpt: "Quy định về tuyển dụng, sử dụng và quản lý công chức",
      image: "/tuyen-truyen-phap-luat/p2_l3_vbhn_10.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-l4",
      title:
        "Phổ biến Nghị định số 322/2026/NĐ-CP của Chính phủ: Sửa đổi, bổ sung một số điều của Nghị định số 86/2021/NĐ-CP ngày 25/9/2021 của Chính phủ quy định việc công dân Việt Nam ra nước ngoài học tập, giảng dạy, NCKH và trao đổi học thuật",
      date: "17:00 19/08/2026",
      excerpt:
        "Sửa đổi, bổ sung một số điều của Nghị định số 86/2021/NĐ-CP ngày 25 tháng 9 năm 2021 của Chính phủ quy định việc công dân Việt Nam ra nước ngoài học tập, giảng dạy, nghiên cứu khoa học và trao đổi học thuật",
      image: "/tuyen-truyen-phap-luat/p2_l4_nd_322.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-l5",
      title:
        "Phổ biến Nghị quyết số 227/NQ-CP của Chính phủ: Về chính sách của Luật về văn bản quy phạm pháp luật",
      date: "17:00 17/08/2026",
      excerpt: "Về chính sách của Luật về văn bản quy phạm pháp luật",
      image: "/tuyen-truyen-phap-luat/p2_l5_nq_227.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p2-l6",
      title:
        "Phổ biến Nghị định số 317/2026/NĐ-CP của Chính phủ: Quy định về tổ chức, quản lý và sử dụng Quỹ Học bổng Quốc gia",
      date: "17:00 17/08/2026",
      excerpt: "Quy định về tổ chức, quản lý và sử dụng Quỹ Học bổng Quốc gia",
      image: "/tuyen-truyen-phap-luat/p2_l6_nd_317.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
  ],
};

// ─── Data Page 3 ──────────────────────────────────────────────────────────────
const page3Data: PageData = {
  featured: {
    id: "ttpl-p3-feat",
    title:
      "Phổ biến Thông tư số 65/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định về điều kiện, trình tự, thủ tục, thẩm quyền công nhận văn bằng do cơ sở giáo dục nước ngoài cấp để sử dụng tại Việt Nam.",
    date: "17:00 14/08/2026",
    excerpt:
      "Quy định về điều kiện, trình tự, thủ tục, thẩm quyền công nhận văn bằng do cơ sở giáo dục nước ngoài cấp để sử dụng tại Việt Nam",
    image: "/tuyen-truyen-phap-luat/p3_feat_tt_65.png",
    href: "/tin-tuc/tuyen-truyen-phap-luat",
  },
  grid: [
    {
      id: "ttpl-p3-g1",
      title:
        "Phổ biến Quyết định số 1555/QĐ-TTg của Thủ tướng Chính phủ: Ban hành Khung chương trình đào tạo, bồi dưỡng về quản trị dữ liệu",
      excerpt: "Ban hành Khung chương trình đào tạo, bồi dưỡng về quản trị dữ liệu",
      image: "/tuyen-truyen-phap-luat/p3_g1_qd_1555.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-g2",
      title:
        "Phổ biến Quyết định số 41/2026/QĐ-TTg của Thủ tướng Chính phủ: Bãi bỏ một số văn bản quy phạm pháp luật của Thủ tướng Chính phủ.",
      excerpt: "Bãi bỏ một số văn bản quy phạm pháp luật của Thủ tướng Chính phủ",
      image: "/tuyen-truyen-phap-luat/p3_g2_qd_41.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-g3",
      title:
        "Phổ biến Nghị quyết số 37/2026/NQ-CP của Chính phủ: Về cơ cấu, số lượng và một số chính sách đối với hiệu trưởng, giám đốc, phó hiệu trưởng, phó giám đốc, nhân sự hỗ trợ giáo dục khi thực hiện sắp xếp cơ sở giáo dục mầm non, phổ thông...",
      excerpt:
        "Về cơ cấu, số lượng và một số chính sách đối với hiệu trưởng, giám đốc, phó hiệu trưởng, phó giám đốc, nhân sự hỗ trợ giáo dục khi thực hiện sắp xếp cơ sở giáo dục mầm non, phổ thông, bồi dưỡng",
      image: "/tuyen-truyen-phap-luat/p3_g3_nq_37.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
  ],
  list: [
    {
      id: "ttpl-p3-l1",
      title:
        "Phổ biến Nghị định số 300/2026/NĐ-CP của Chính phủ: Sửa đổi, bổ sung một số điều của Nghị định số 170/2025/NĐ-CP ngày 30 tháng 6 năm 2025 của Chính phủ quy định về tuyển dụng, sử dụng và quản lý công chức.",
      date: "17:00 06/08/2026",
      excerpt:
        "Sửa đổi, bổ sung một số điều của Nghị định số 170/2025/NĐ-CP ngày 30 tháng 6 năm 2025 của Chính phủ quy định về tuyển dụng, sử dụng và quản lý công chức",
      image: "/tuyen-truyen-phap-luat/p3_l1_nd_300.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-l2",
      title:
        "Phổ biến Nghị định số 308/2026/NĐ-CP của Chính phủ: Quy định chi tiết một số điều của Luật Giáo dục nghề nghiệp về chính sách hỗ trợ của Nhà nước đối với doanh nghiệp và Quỹ đào tạo nhân lực của doanh nghiệp.",
      date: "17:00 06/08/2026",
      excerpt:
        "Quy định chi tiết một số điều của Luật Giáo dục nghề nghiệp về chính sách hỗ trợ của Nhà nước đối với doanh nghiệp và Quỹ đào tạo nhân lực của doanh nghiệp",
      image: "/tuyen-truyen-phap-luat/p3_l2_nd_308.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-l3",
      title:
        "Phổ biến Thông tư số 62/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định quy trình biên soạn, ban hành chương trình, giáo trình dạy và học các môn học, học phần bắt buộc sử dụng chung trong chương trình đào tạo các trình độ của giáo dục đại học",
      date: "17:00 02/08/2026",
      excerpt:
        "Quy định quy trình biên soạn, ban hành chương trình, giáo trình dạy và học các môn học, học phần bắt buộc sử dụng chung trong chương trình đào tạo các trình độ của giáo dục đại học.",
      image: "/tuyen-truyen-phap-luat/p3_l3_tt_62.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-l4",
      title:
        "Phổ biến Thông tư số 61/2026/TT-BGDĐT của Bộ Giáo dục và Đào tạo: Quy định về khai thác, sử dụng tài nguyên giáo dục mở trong hoạt động giáo dục đại học.",
      date: "17:00 02/08/2026",
      excerpt:
        "Quy định về khai thác, sử dụng tài nguyên giáo dục mở trong hoạt động giáo dục đại học.",
      image: "/tuyen-truyen-phap-luat/p3_l4_tt_61.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-l5",
      title:
        "Phổ biến Quyết định số 38/2026/QĐ-TTg của Thủ tướng Chính phủ: Quy định Khung cơ cấu hệ thống giáo dục quốc dân",
      date: "15:00 30/07/2026",
      excerpt: "Quy định Khung cơ cấu hệ thống giáo dục quốc dân",
      image: "/tuyen-truyen-phap-luat/p3_l5_qd_38.png",
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
    {
      id: "ttpl-p3-l6",
      title: "Thông tư số 11/2026/TT-BNV",
      date: "21:16 26/07/2026",
      excerpt:
        "Thông tư Hướng dẫn một số nội dung tại Nghị định số 289/2025/NĐ-CP ngày 06 tháng 11 năm 2025 của Chính phủ hướng dẫn thi hành Nghị quyết số 197/2025/QH15 ngày 17 tháng 5 năm 2025 của Quốc hội về một số cơ chế, chính sách đặc biệt tạo đột phá trong xây dựng và tổ chức thi hành pháp luật thuộc thẩm quyền của Bộ Nội vụ, ban hành ngày 28/05/2026.",
      image: "", // APAG Logo card
      href: "/tin-tuc/tuyen-truyen-phap-luat",
    },
  ],
};

const pagesMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
  3: page3Data,
  4: page1Data,
  5: page2Data,
};

export default function TuyenTruyenPhapLuatPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 5;

  const currentContent = pagesMap[currentPage] || page1Data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#fdfdfd] py-6 sm:py-8 font-sans">
      <div className="w-full max-w-[1360px] mx-auto px-4">
        <div className="flex flex-row max-[480px]:flex-col gap-6 lg:gap-8 items-start">
          {/* ══════════════════════════════════════════════════════════════════
              CỘT TRÁI (SIDEBAR)
              ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-[280px] xl:w-[300px] max-[480px]:w-full shrink-0 flex flex-col gap-6">
            {/* Chuyên mục TIN TỨC */}
            <SidebarMenu title="TIN TỨC" items={newsMenuItems} />

            {/* TIN MỚI NHẤT */}
            <div className="border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN MỚI NHẤT
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarLatestNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/tin-tuc/tuyen-truyen-phap-luat"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">
                        •
                      </span>
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
                      href="/tin-tuc/tuyen-truyen-phap-luat"
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">
                        •
                      </span>
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
            {/* Breadcrumb Bar */}
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
                  TUYÊN TRUYỀN PHỔ BIẾN PHÁP LUẬT
                </span>
              </div>
            </div>

            {/* 1. Bài viết tiêu điểm (Featured) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-6 items-start">
              <div className="w-[48%] max-[480px]:w-full h-[210px] sm:h-[240px] md:h-[255px] shrink-0 border border-gray-300 bg-white overflow-hidden relative">
                <Link
                  href={currentContent.featured.href || "/tin-tuc/tuyen-truyen-phap-luat"}
                  className="block relative w-full h-full group cursor-pointer"
                >
                  {currentContent.featured.image ? (
                    <Image
                      src={currentContent.featured.image}
                      alt={currentContent.featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <ApagLogoCard large />
                  )}
                </Link>
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h1 className="text-[clamp(15px,1rem+0.4vw,20px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={currentContent.featured.href || "/tin-tuc/tuyen-truyen-phap-luat"}>
                    {currentContent.featured.title}
                  </Link>
                </h1>
                {currentContent.featured.date && (
                  <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2.5">
                    {currentContent.featured.date}
                  </p>
                )}
                {currentContent.featured.excerpt && (
                  <p className="text-[clamp(12px,0.68rem+0.15vw,13.5px)] text-gray-600 mt-2 leading-relaxed line-clamp-3">
                    {currentContent.featured.excerpt}
                  </p>
                )}
              </div>
            </article>

            <div className="w-full h-px bg-gray-200 my-6" />

            {/* 2. Lưới 3 tin phụ (Grid 3 cột) */}
            {currentContent.grid && currentContent.grid.length > 0 && (
              <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mb-6">
                {currentContent.grid.map((item) => (
                  <article key={item.id} className="flex flex-col group">
                    <div className="w-full h-[140px] sm:h-[155px] md:h-[170px] border border-gray-300 bg-white overflow-hidden mb-2.5 relative">
                      <Link
                        href={item.href || "/tin-tuc/tuyen-truyen-phap-luat"}
                        className="block relative w-full h-full cursor-pointer"
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <ApagLogoCard />
                        )}
                      </Link>
                    </div>
                    <h2 className="text-[clamp(13px,0.75rem+0.15vw,14.5px)] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-4">
                      <Link href={item.href || "/tin-tuc/tuyen-truyen-phap-luat"}>
                        {item.title}
                      </Link>
                    </h2>
                    {item.excerpt && (
                      <p className="text-[clamp(11.5px,0.65rem+0.12vw,12.5px)] text-gray-600 mt-1 line-clamp-3 leading-snug">
                        {item.excerpt}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}

            {/* 3. Danh sách tin phía dưới (List items) */}
            {currentContent.list && currentContent.list.length > 0 && (
              <div className="flex flex-col gap-4 sm:gap-5">
                {currentContent.list.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-5 items-start group"
                  >
                    <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0 border border-gray-300 bg-white overflow-hidden relative">
                      <Link
                        href={article.href || "/tin-tuc/tuyen-truyen-phap-luat"}
                        className="block relative w-full h-full cursor-pointer"
                      >
                        {article.image ? (
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <ApagLogoCard className="border-0" />
                        )}
                      </Link>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-[clamp(13px,0.78rem+0.18vw,14.5px)] font-bold leading-snug transition-colors line-clamp-3 text-gray-900 hover:text-[#DA251C]">
                        <Link href={article.href || "/tin-tuc/tuyen-truyen-phap-luat"}>
                          {article.title}
                        </Link>
                      </h2>
                      {article.date && (
                        <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-1.5">
                          {article.date}
                        </p>
                      )}
                      {article.excerpt && (
                        <p className="text-[clamp(12px,0.68rem+0.15vw,13px)] text-gray-600 mt-1 line-clamp-3 leading-snug">
                          {article.excerpt}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* 4. Phân trang */}
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
