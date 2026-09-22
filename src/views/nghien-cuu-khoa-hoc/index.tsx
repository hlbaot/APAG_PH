"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home } from "lucide-react";
import Pagination from "@/components/pagination";
import "@/scss/nghien-cuu-khoa-hoc/nghien-cuu-khoa-hoc.scss";

// ─── Dữ liệu Sidebar Trái ──────────────────────────────────────────────────────

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
    title: 'Giao lưu văn hóa và Tọa đàm bàn tròn “Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu”',
    href: "/bai-viet/giao-luu-van-hoa-va-toa-dam-ban-tron-phat-trien-nang-luc-lanh-dao-da-van-hoa-va-dinh-huong-nghe-nghiep-toan-cau",
  },
  {
    title: "Thông tin luận án NCS Dương Thị Hòa",
    href: "/bai-viet/doi-moi-phuong-phap-khao-thi-danh-gia-thuc-chat",
  },
  {
    title: "Thông báo lựa chọn tổ chức bán đấu giá tài sản",
    href: "/bai-viet/chuyen-doi-so-trong-quan-tri-cong-va-cai-cach-thu-tuc-hanh-chinh-2026",
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface ArticleItem {
  id: string | number;
  title: string;
  date?: string;
  image?: string;
  isLogoCard?: boolean;
  summary?: string;
  href: string;
}

interface PageData {
  featured: ArticleItem;
  grid: ArticleItem[];
  list: ArticleItem[];
}

// ─── Dữ liệu Trang 1 ──────────────────────────────────────────────────────────

const page1Data: PageData = {
  featured: {
    id: "p1-feat",
    title:
      'Hội thảo khoa học: “An sinh xã hội cho người cao tuổi ở Việt Nam – Thực trạng và giải pháp”',
    date: "20:39 18/09/2026",
    image:
      "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
    summary:
      '(apag.edu.vn) - Sáng ngày 18/9/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã tổ chức Hội thảo khoa học với chủ đề "An sinh xã hội cho người cao tuổi ở Việt Nam: Thực trạng và giải pháp". TS. Bùi Phương Đình, Phó Giám đốc Học viện và PGS.TS. Đặng Khắc Ánh, Trưởng Khoa Quản lý phát triển xã hội đồng chủ trì. Hội thảo được tổ chức theo hình thức trực tiếp kết hợp trực tuyến tới các phân hiệu.',
    href: "/nghien-cuu-khoa-hoc/hoi-thao-khoa-hoc-an-sinh-xa-hoi-cho-nguoi-cao-tuoi-o-viet-nam-thuc-trang-va-giai-phap",
  },
  grid: [
    {
      id: "p1-g1",
      title:
        'Giao lưu văn hóa và Tọa đàm bàn tròn "Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu"',
      image: "/trangChu/slide/luu-niem-2-899d44225a.png",
      summary:
        '(apag.edu.vn) - Sáng 16/9/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức Chương trình Giao lưu văn hóa và Tọa đàm bàn tròn với chủ đề "Phát triển năng lực lãnh đạo đa...',
      href: "/nghien-cuu-khoa-hoc/giao-luu-van-hoa-va-toa-dam-ban-tron-phat-trien-nang-luc-lanh-dao-da-van-hoa-va-dinh-huong-nghe-nghiep-toan-cau",
    },
    {
      id: "p1-g2",
      title:
        'Hội thảo khoa học góp ý dự thảo "Sổ tay công tác dành cho cán bộ, công chức chính quyền xã, phường, đặc khu"',
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/9/2026, Học viện Hành chính và Quản trị công tổ chức Hội thảo khoa học đóng góp ý kiến cho dự thảo "Sổ tay công tác dành cho cán bộ, công chức chính...',
      href: "/nghien-cuu-khoa-hoc/hoi-thao-khoa-hoc-gop-y-du-thao-so-tay-cong-tac-danh-cho-can-bo-cong-chuc-chinh-quyen-xa-phuong-dac-khu",
    },
    {
      id: "p1-g3",
      title:
        "Trí tuệ nhân tạo và pháp quyền trong kỷ nguyên số: Từ kinh nghiệm quốc tế đến những hàm ý đối với Việt Nam",
      image:
        "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Chiều 11/9/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức Tọa đàm quốc tế "Trí tuệ nhân tạo và pháp quyền trong kỷ nguyên số: kinh nghiệm quốc tế và hà...',
      href: "/nghien-cuu-khoa-hoc/tri-tue-nhan-tao-va-phap-quyen-trong-ky-nguyen-so-tu-kinh-nghiem-quoc-te-den-nhung-ham-y-doi-voi-viet-nam",
    },
  ],
  list: [
    {
      id: "p1-l1",
      title:
        "Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế: Tái định vị vai trò giáo dục đại học trong kỷ nguyên AI",
      date: "17:30 09/09/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 09/9/2026, Học viện Hành chính và Quản trị công tổ chức Tọa đàm khoa học với chủ đề "Giáo dục đại học trong kỷ nguyên AI: vấn đề, tác động và gợi mở" do các chuyên gia đến từ Pháp và Bỉ trình bày.',
      href: "/nghien-cuu-khoa-hoc/nang-cao-nang-luc-giang-day-nghien-cuu-va-lam-viec-trong-moi-truong-quoc-te-tai-dinh-vi-vai-tro-giao-duc-dai-hoc-trong-ky-nguyen-ai",
    },
    {
      id: "p1-l2",
      title:
        "Quyết định số 3474-QĐ/HVHCQTC ngày 28/8/2026 của Giám đốc Học viện Hành chính và Quản trị công phê duyệt danh mục đề tài nghiên cứu khoa học của sinh viên Học viện Hành chính và Quản trị công năm học 2026–2027",
      date: "16:40 28/08/2026",
      isLogoCard: true,
      href: "/nghien-cuu-khoa-hoc/quyet-dinh-so-3474-qd-hvhcqtc-phe-duyet-de-tai-nckh-sinh-vien",
    },
    {
      id: "p1-l3",
      title:
        'Hội thảo khoa học: "Ứng dụng AI trong xây dựng chính phủ số của các quốc gia – Bài học kinh nghiệm cho Việt Nam"',
      date: "15:07 27/08/2026",
      image: "/trangChu/slide/a9-f769102539.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 27/8/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức Hội thảo khoa học với chủ đề "Ứng dụng AI trong xây dựng chính phủ số của các quốc gia - Bài học kinh nghiệm cho Việt Nam". PGS. TS. Nguyễn Thị Thu Vân, Trưởng Khoa Lưu trữ và Quản trị văn phòng chủ trì Hội thảo. Hội thảo được tổ chức theo hình thức trực tiếp kết hợp trực tuyến đến các phân hiệu của Học viện.',
      href: "/nghien-cuu-khoa-hoc/hoi-thao-khoa-hoc-ung-dung-ai-trong-xay-dung-chinh-phu-so-cua-cac-quoc-gia-bai-hoc-kinh-nghiem-cho-viet-nam",
    },
    {
      id: "p1-l4",
      title:
        "Tọa đàm khoa học: Quản trị tích hợp phát triển cấp xã trong bối cảnh đổi mới quản trị địa phương",
      date: "19:42 25/08/2026",
      image:
        "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 25/8/2026, Học viện Hành chính và Quản trị công đã tổ chức buổi Tọa đàm khoa học với chủ đề: "Quản trị tích hợp phát triển cấp xã: Kết nối không gian, lĩnh vực, chủ thể và nguồn lực trong bối cảnh đổi mới quản trị địa phương".',
      href: "/nghien-cuu-khoa-hoc/toa-dam-khoa-hoc-quan-tri-tich-hop-phat-trien-cap-xa",
    },
    {
      id: "p1-l5",
      title:
        "Hướng tới Net Zero 2050: Đổi mới tư duy quản trị môi trường và giải pháp phát triển bền vững tại Việt Nam",
      date: "15:06 21/08/2026",
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 21/8/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức Hội thảo khoa học cấp Học viện với chủ đề: "Quản trị môi trường hướng tới mục tiêu Net zero ở Việt Nam: Lý luận và thực tiễn".',
      href: "/nghien-cuu-khoa-hoc/huong-toi-net-zero-2050-doi-moi-tu-duy-quan-tri-moi-truong",
    },
    {
      id: "p1-l6",
      title:
        'Tọa đàm khoa học: "Quản trị phát triển xã hội của Việt Nam trên nền tảng số – Từ cơ sở lý luận đến kiến nghị chính sách"',
      date: "20:00 19/08/2026",
      image: "/trangChu/congTacDang/sub4_trung_uong_3.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 19/8/2026, tại Học viện Hành chính và Quản trị công đã diễn ra Tọa đàm khoa học thảo luận, góp ý báo cáo tổng hợp, báo cáo tóm tắt và báo cáo kiến nghị đề tài "Quản trị phát triển xã hội của Việt Nam trên nền tảng số".',
      href: "/nghien-cuu-khoa-hoc/toa-dam-khoa-hoc-quan-tri-phat-trien-xa-hoi-cua-viet-nam-tren-nen-tang-so",
    },
  ],
};

// ─── Dữ liệu Trang 2 (Theo ảnh chụp màn hình 1) ──────────────────────────────

const page2Data: PageData = {
  featured: {
    id: "p2-feat",
    title: "Học viện Hàn Quốc khám phá con người và văn hóa Việt Nam thông qua trải nghiệm tại Bảo tàng Lịch sử Quân sự Việt Nam",
    date: "19:53 08/07/2026",
    image: "/trangChu/slide/luu-niem-2-899d44225a.png",
    summary:
      '(apag.edu.vn) - Trong khuôn khổ Chương trình "Nhà quản lý kinh doanh trẻ toàn cầu" (Global Young Business Managers - GYBM) do Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý Toàn cầu Daewoo (Hàn Quốc) tổ chức, các học viên Hàn Quốc đã tham gia hoạt động học tập trải nghiệm tại Bảo tàng Lịch sử Quân sự Việt Nam.',
    href: "/nghien-cuu-khoa-hoc",
  },
  grid: [
    {
      id: "p2-g1",
      title: "Vinachem hợp tác với Học viện Hành chính và Quản trị công và Trường Quản trị Normandie (Pháp) trong đào tạo lãnh đạo cấp cao",
      isLogoCard: true,
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-g2",
      title: "Hội thảo Dự án STRIVE 2026 - Tăng cường tính bền vững và thúc đẩy quốc tế hóa giáo dục đại học",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Trong khuôn khổ Dự án "Nâng cao năng lực quốc tế hóa cho các trường đại học mới tại Việt Nam - STRIVE" thuộc Chương trình Erasmus+ của Liên minh châu Âu, từ ngày 25 đ...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-g3",
      title: "Đẩy mạnh hợp tác quốc tế, bồi dưỡng thế hệ lãnh đạo trẻ toàn cầu Việt Nam - Hàn Quốc",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý toàn cầu Daewoo, Hàn Quốc tổ chức Lễ Khai giảng Chương trình "Nhà quản l...',
      href: "/nghien-cuu-khoa-hoc",
    },
  ],
  list: [
    {
      id: "p2-l1",
      title: "Chung tay bồi dưỡng thế hệ lãnh đạo trẻ toàn cầu, vun đắp tương lai hợp tác Việt Nam - Hàn Quốc",
      date: "10:07 15/06/2026",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý toàn cầu Daewoo, Hàn Quốc tổ chức Lễ Khai giảng Chương trình "Nhà quản lý kinh doanh trẻ toàn cầu" năm 2026. Chương trình được tổ chức nhằm trang bị cho các học viên những kiến thức về Việt Nam, về môi trường làm việc và kinh doanh tại Việt Nam, đồng thời phát triển những năng lực cần thiết ...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-l2",
      title: "Từ đối ngoại cấp cao đến hợp tác cụ thể về đào tạo, phát triển năng lực quản trị công",
      date: "14:17 01/06/2026",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        '(apag.edu.vn) - Trong khuôn khổ chuyến thăm cấp Nhà nước tới Thái Lan, Singapore và Philippines của Tổng Bí thư, Chủ tịch nước Tô Lâm từ ngày 27/5 đến ngày 01/6/2026, Học viện Hành chính và Quản trị công trực thuộc Học viện Chính trị quốc gia Hồ Chí Minh đã trao các Biên bản ghi nhớ hợp tác với Đại học Khon Kaen (Thái Lan) và Đại học Philippines. Các Biên bản ghi nhớ hợp tác được thiết lập trong những lĩnh vực gắn tr...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-l3",
      title: "Học viện Hành chính và Quản trị công tham gia Hội thảo quốc tế về Quản trị nhà nước tại Đại học Phúc Đán, Trung Quốc",
      date: "14:00 01/06/2026",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        '(apag.edu.vn) - Trong hai ngày 26-27/5/2026, Hội thảo Quốc tế về Quản trị Nhà nước lần thứ nhất với chủ đề "Nhà nước mạnh hơn - Quản trị tốt hơn: Năng lực nhà nước và hiệu quả quản trị trong một thế giới toàn cầu hóa" đã chính thức diễn ra tại trường Đại học Phúc Đán, Trung Quốc. Hội thảo quốc tế do trường Quan hệ quốc tế và Quản trị công, Đại học Phúc Đán (School of International Relations & Public Affair...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-l4",
      title: "Tổng Bí thư, Chủ tịch nước Tô Lâm chứng kiến Lễ ký kết biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công (Học viện Chính trị quốc gia Hồ Chí Minh) và Đại học Khon Kaen (KKU) của Thái Lan",
      date: "15:41 28/05/2026",
      image: "/trangChu/slide/vietjet_air.png",
      summary:
        '(apag.edu.vn) - Theo đặc phái viên TTXVN, trưa 28/5/2026, tại Thủ đô Bangkok (Thái Lan), Tổng Bí thư, Chủ tịch nước Tô Lâm và Thủ tướng Vương quốc Thái Lan Anutin Charnvirakul đã cùng chứng kiến Lễ trao các văn kiện hợp tác giữa các bộ, ngành hai nước. Trong đó, Học viện Hành chính và Quản trị công (Học viện Chính trị quốc gia Hồ Chí Minh) và Đại học Khon Kaen (KKU) của Thái Lan đã trao Biên bản ghi nhớ về hợp tá...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-l5",
      title: 'Hội nghị sinh viên "Nâng cao nhận thức của sinh viên, giảng viên về các cơ hội tham gia Chương trình Erasmus+" – Dự án STRIVE (WP.2, D.5.2)',
      date: "19:56 20/05/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 20/5/2026, tại phòng 3A nhà G, Ban Quản lý khoa học và Hợp tác quốc tế đã chủ trì tổ chức Hội nghị sinh viên: "Nâng cao nhận thức của sinh viên, giảng viên về các cơ hội tham gia Chương trình Erasmus+". Đây là hoạt động trọng tâm nằm trong khuôn khổ Dự án quốc tế STRIVE (WP2, D.5.2) do Học viện Hành chính và Quản trị công phối hợp triển khai. Hội nghị được tổ chức theo hình thức trực tiếp k...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p2-l6",
      title: "Đoàn Học viện Hành chính và Quản trị công hoàn thành tuần làm việc thứ hai tại Canada: Thúc đẩy hợp tác triển khai Dự án Quản trị địa phương bao trùm và phát triển năng lực lãnh đạo địa phương tại Việt Nam",
      date: "07:22 18/05/2026",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Tiếp theo các hoạt động làm việc tại Ottawa, Canada trong tuần đầu tiên, từ ngày 09 đến 14/5/2026, Đoàn công tác của Học viện Hành chính và Quản trị công do PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện làm Trưởng đoàn đã tiếp tục chương trình công tác tại thành phố Québec, Victoria và Vancouver nhằm khảo sát, đánh giá và thúc đẩy hợp tác với các cơ sở đào tạo, bồi dưỡng của Canada tro...',
      href: "/nghien-cuu-khoa-hoc",
    },
  ],
};

// ─── Dữ liệu Trang 3 (Theo ảnh chụp màn hình 2) ──────────────────────────────

const page3Data: PageData = {
  featured: {
    id: "p3-feat",
    title: "Đoàn công tác của Học viện Hành chính và Quản trị công làm việc tại Canada: Thúc đẩy hợp tác triển khai Dự án Quản trị địa phương bao trùm và nâng cao năng lực đào tạo, bồi dưỡng lãnh đạo địa phương",
    date: "19:06 11/05/2026",
    image: "/trangChu/slide/luu-niem-2-899d44225a.png",
    summary:
      '(apag.edu.vn) - Thực hiện Quyết định số 1423-QĐ/HVCTQG ngày 02/4/2026 của Giám đốc Học viện Chính trị quốc gia Hồ Chí Minh, từ ngày 05 đến 14/5/2026, đoàn công tác của Học viện Hành chính và Quản trị công do PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện, làm trưởng đoàn đã thực hiện chương trình làm việc tại Canada nhằm thúc đẩy hợp tác triển khai Dự án "Quản trị địa phương bao trùm tại Việt Nam" (Inclusive Local Governance in Viet Nam - ILG) và mở rộng quan hệ hợp tác trong đào tạo, bồi dưỡng và phát triển năng lực quản trị địa phương cho đội ngũ lãnh đạo, quản lý của Việt Nam.',
    href: "/nghien-cuu-khoa-hoc",
  },
  grid: [
    {
      id: "p3-g1",
      title: "Quyết định số 2024-QĐ/HVHC&QTC ngày 03/5/2026 về việc thành lập Ban Điều phối Đề án Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế cho viên chức, giảng viên HV HC&QTC giai đoạn 2026 – 2027, định hướng đến năm 2030",
      isLogoCard: true,
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-g2",
      title: "Quyết định số 2023-QĐ/HVHC&QTC ngày 03/5/2026 về việc thành lập Tổ xây dựng, soạn thảo Đề án Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế cho VC, GV HV HC&QTC giai đoạn 2026 – 2027, định hướng đến năm 2030",
      isLogoCard: true,
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-g3",
      title: "Quyết định số 2022-QĐ/HVHC&QTC ngày 03/5/2026 về việc thành lập Ban Chỉ đạo Đề án Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế cho viên chức, giảng viên HV HC&QTC giai đoạn 2026 – 2027, định hướng đến năm 2030",
      isLogoCard: true,
      href: "/nghien-cuu-khoa-hoc",
    },
  ],
  list: [
    {
      id: "p3-l1",
      title: "Ra mắt Mạng lưới cơ sở đào tạo chính sách và quản trị công: Gắn kết đào tạo - nghiên cứu - thực tiễn trong kỷ nguyên mới",
      date: "16:00 24/04/2026",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 24/4/2026, tại Hà Nội, Lễ ra mắt Mạng lưới cơ sở đào tạo chính sách và quản trị công (GPPA) và Diễn đàn khoa học thường niên lần thứ nhất với chủ đề "Quản trị quốc gia và đào tạo nhân lực quản lý trong kỷ nguyên mới" đã được tổ chức tại Trường Đại học Kinh tế Quốc dân. GS.TS. Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị khóa XIII, Chủ tịch Hội đồng Lý luận Trung ương dự và phát biểu tại sự kiệ...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-l2",
      title: "Học viện Hành chính và Quản trị công làm việc với Đại sứ Cộng hòa Nhân dân Băng-la-đét tại Việt Nam, thúc đẩy hợp tác đào tạo, bồi dưỡng cán bộ",
      date: "15:00 16/04/2026",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 16/4/2026, tại Phòng Truyền thống, Học viện Hành chính và Quản trị công đã tổ chức buổi làm việc với Đại sứ quán Cộng hòa Nhân dân Băng-la-đét tại Việt Nam nhằm trao đổi, thảo luận về định hướng hợp tác trong lĩnh vực đào tạo, bồi dưỡng cán bộ lãnh đạo, quản lý.',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-l3",
      title: "Ấm áp Tết Bunpimay tại Học viện Hành chính và Quản trị công",
      date: "21:31 10/04/2026",
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 10/4/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức buổi lễ chúc mừng Tết cổ truyền Bunpimay 2026 (Phật lịch năm 2569) tới các lưu học sinh nước Cộng hòa Dân chủ Nhân dân Lào đang nghiên cứu và học tập tại Học viện.',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-l4",
      title: "Học viện Hành chính và Quản trị công và EROPA thúc đẩy hợp tác chiến lược về quản trị công, hướng tới quốc tế hóa và chuẩn hóa học thuật",
      date: "17:28 07/04/2026",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 07/4/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã có buổi làm việc với đoàn công tác của Tổ chức Hành chính miền Đông thế giới (EROPA) do TS. Alex Brillantes Jr., Tổng Thư ký EROPA dẫn đầu. Hai bên đã trao đổi, thống nhất nhiều nội dung hợp tác trọng tâm như: phối hợp tổ chức Diễn đàn Quản trị công quốc tế thường niên; thúc đẩy lộ trình quốc tế hóa, gia nhập hệ thống Scopus c...',
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-l5",
      title: "Thông báo Chương trình học bổng trao đổi sinh viên Erasmus+ tại Đại học Tuscia, Cộng hòa Ý năm học 2026 – 2027",
      date: "19:17 01/04/2026",
      isLogoCard: true,
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      id: "p3-l6",
      title: "Học viện Hành chính và Quản trị công tiếp và làm việc với Đoàn Bộ Các vấn đề Toàn cầu Canada",
      date: "20:00 16/03/2026",
      image: "/trangChu/slide/a9-f769102539.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 16/3/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã đón tiếp và làm việc với Đoàn công tác của Bộ Các vấn đề Toàn cầu Canada nhằm trao đổi về các nội dung hợp tác trong thời gian tới, đặc biệt là việc triển khai dự án "Quản trị địa phương bao trùm tại Việt Nam".',
      href: "/nghien-cuu-khoa-hoc",
    },
  ],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
  3: page3Data,
};

export default function NghienCuuKhoaHocPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (

    <div className="w-full bg-white min-h-screen py-6 sm:py-8 font-sans">
      <div className="w-full max-w-[1240px] xl:max-w-[1280px] mx-auto px-3 sm:px-4">
        <div className="flex flex-row max-[480px]:flex-col gap-6 xl:gap-7 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════
              CỘT TRÁI (SIDEBAR) — Chiều rộng cố định (~270-300px)
              ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-[280px] xl:w-[300px] max-[480px]:w-full shrink-0 flex flex-col gap-4">
            {/* Header chuyên mục: Ô đỏ trên cùng */}
            <div className="bg-[#DA251C] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(14px,0.8rem+0.2vw,16px)] tracking-wide">
              NGHIÊN CỨU KHOA HỌC
            </div>

            {/* Ô 1: "TIN MỚI NHẤT" */}
            <div className="border border-gray-200 bg-white">
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
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">
                        •
                      </span>
                      <span className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-medium leading-snug line-clamp-3 group-hover:underline">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ô 2: "TIN ĐỌC NHIỀU" */}
            <div className="border border-gray-200 bg-white">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[14px] sm:text-[14.5px] tracking-wide">
                TIN ĐỌC NHIỀU
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarMostReadNews.map((item, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href={item.href}
                      className="group flex items-start gap-2 text-gray-900 hover:text-[#DA251C] transition-colors"
                    >
                      <span className="text-[#1b2559] text-base leading-tight select-none shrink-0 font-black">
                        •
                      </span>
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
              CỘT PHẢI (NỘI DUNG CHÍNH) — Chiếm phần còn lại
              ══════════════════════════════════════════════════════════════════ */}
          <main className="flex-1 min-w-0">
            {/* Thanh Breadcrumb: Ngay đầu cột phải */}
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
                  NGHIÊN CỨU KHOA HỌC
                </span>
              </div>
            </div>

            {/* 1. Bài đầu tiên (Nổi bật nhất: Bố cục ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 items-start">
              <div className="w-[48%] max-[480px]:w-full shrink-0">
                <Link
                  href={currentContent.featured.href}
                  className="block relative w-full h-[240px] max-[480px]:h-[210px] overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={currentContent.featured.image!}
                    alt={currentContent.featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </Link>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(15px,1rem+0.4vw,21px)] font-bold text-[#DA251C] hover:underline transition-colors leading-snug">
                  <Link href={currentContent.featured.href}>{currentContent.featured.title}</Link>
                </h2>

                <p className="text-[clamp(12px,0.68rem+0.15vw,13px)] text-gray-400 italic mt-2 mb-2.5">
                  {currentContent.featured.date}
                </p>

                <p className="text-[clamp(12.5px,0.72rem+0.2vw,14.5px)] text-gray-700 leading-relaxed text-justify line-clamp-6">
                  {currentContent.featured.summary}
                </p>
              </div>
            </article>

            {/* 2. Hàng 3 bài kế tiếp (Lưới 3 cột bằng nhau) */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 mt-6 pt-5 border-t border-gray-200">
              {currentContent.grid.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <Link
                    href={article.href}
                    className="block relative w-full h-[145px] overflow-hidden group cursor-pointer"
                  >
                    {article.isLogoCard ? (
                      <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors">
                        <span className="text-3xl font-black tracking-tight select-none">
                          <span className="text-[#1b2559]">AP</span>
                          <span className="text-[#DA251C]">AG</span>
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={article.image!}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </Link>

                  <h3 className="text-[clamp(13px,0.75rem+0.15vw,15px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug mt-2.5 line-clamp-3">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>

                  {article.summary && (
                    <p className="text-[clamp(12px,0.68rem+0.15vw,13px)] text-gray-600 leading-relaxed text-justify mt-1.5 line-clamp-4 flex-1">
                      {article.summary}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {/* 3. Các bài còn lại (Dạng danh sách dọc, ảnh trái - chữ phải) */}
            <div className="space-y-5 sm:space-y-6 mt-6 pt-5 border-t border-gray-200">
              {currentContent.list.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-row max-[480px]:flex-col gap-4 items-start"
                >
                  {/* Cột ảnh nhỏ (~180x120px) hoặc logo card */}
                  <div className="w-[185px] max-[480px]:w-full h-[120px] max-[480px]:h-[115px] shrink-0">
                    <Link
                      href={article.href}
                      className="block relative w-full h-full overflow-hidden group cursor-pointer"
                    >
                      {article.isLogoCard ? (
                        <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors">
                          <span className="text-2xl sm:text-3xl font-black tracking-tight select-none">
                            <span className="text-[#1b2559]">AP</span>
                            <span className="text-[#DA251C]">AG</span>
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={article.image!}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </Link>
                  </div>

                  {/* Cột chữ: tiêu đề + ngày giờ + mô tả */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[clamp(13px,0.78rem+0.18vw,15.5px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                      <Link href={article.href}>{article.title}</Link>
                    </h3>

                    <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-1 mb-1.5">
                      {article.date}
                    </p>

                    {article.summary && (
                      <p className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] text-gray-600 leading-relaxed text-justify line-clamp-3">
                        {article.summary}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* 4. Phân trang (Pagination) cuối trang */}
            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={handlePageChange}
            />

          </main>
        </div>
      </div>
    </div>
  );
}
