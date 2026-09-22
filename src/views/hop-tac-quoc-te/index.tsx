"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight } from "lucide-react";
import Pagination from "@/components/pagination";
import "@/scss/hop-tac-quoc-te/hop-tac-quoc-te.scss";

import SidebarMenu from "@/components/sidebar-menu";
import { internationalMenuItems } from "@/data/navigation";

const sidebarLatestNews = [
  "Bồi dưỡng kiến thức, kỹ năng đối ngoại trong công vụ hành chính",
  'Hội thảo khoa học: "An sinh xã hội cho người cao tuổi ở Việt Nam - Thực trạng và giải pháp"',
  'Giao lưu văn hóa và Tọa đàm bàn tròn “Phát triển năng lực lãnh đạo đa văn hóa và định hướng nghề nghiệp toàn cầu”',
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

// ─── Dữ liệu Trang 1 (Theo ảnh chụp màn hình Ban Hợp tác quốc tế - Trang 1) ────

const page1Data: PageData = {
  featured: {
    id: "p1-feat",
    title:
      "Quyết định về việc cử đoàn tham gia Chương trình trao đổi sinh viên tại Trường Công vụ và Chính sách công, Đại học Khon Kaen, Thái Lan năm học 2026 – 2027",
    date: "16:53 16/09/2026",
    isLogoCard: true,
    href: "/hop-tac-quoc-te",
  },
  grid: [
    {
      id: "p1-g1",
      title:
        "Khai mạc Khóa tập huấn “Nâng cao năng lực quản trị nhằm triển khai hiệu quả các Mục tiêu Phát triển Bền vững tại Việt Nam”",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/9/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Ban Kinh tế và Xã hội Liên Hợp Quốc (UN DESA) tổ chức khai mạc Khóa tập huấn "Nâng...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-g2",
      title:
        "Giám đốc Học viện Hành chính và Quản trị công tham dự, báo cáo chuyên đề tại Hội nghị trao đổi kinh nghiệm với Ban Tổ chức Trung ương Đảng Nhân dân Cách mạng Lào",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        '(apag.edu.vn) - Ngày 08/9/2026, tại Hội trường Ban Tổ chức Trung ương Đảng Nhân dân Cách mạng Lào, Hội nghị trao đổi chuyên đề "Chế độ làm việc và mối quan hệ phối hợp giữa Bí thư...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-g3",
      title: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 24/8/2026, tại Học viện Hành chính và Quản trị công, PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện chủ trì buổi làm việc trực tuyến với Trường Hành chính và...",
      href: "/hop-tac-quoc-te",
    },
  ],
  list: [
    {
      id: "p1-l1",
      title:
        "Học từ thực tiễn doanh nghiệp: Những bài học quản trị từ Vietjet Air dành cho học viên Hàn Quốc, Chương trình Nhà quản lý kinh doanh trẻ toàn cầu tại Học viện Hành chính và Quản trị công",
      date: "08:41 07/08/2026",
      image: "/trangChu/slide/vietjet_air.png",
      summary:
        "(apag.edu.vn) - Trong khuôn khổ Chương trình Nhà quản lý kinh doanh trẻ toàn cầu (Global Young Business Managers - GYBM), ngày 05/8/2026, đoàn học viên Hàn Quốc đã có chuyến nghiên cứu, khảo sát tại Vietjet Air.",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-l2",
      title:
        "Triển khai biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công và Đại học Khon Kaen: Phân hiệu Học viện Hành chính và Quản trị công tại Thành phố Hồ Chí Minh làm việc với Trường Công vụ và Chính sách công (COPA), Thái Lan",
      date: "14:56 29/07/2026",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        '(apag.edu.vn) - Ngày 28/7/2026, Phân hiệu Học viện Hành chính và Quản trị công tại Thành phố Hồ Chí Minh đã đón tiếp và làm việc với Đoàn lãnh đạo Trường Công vụ và Chính sách công (COPA), Đại học Khon Kaen, Thái Lan. Đây là hoạt động được triển khai ngay sau buổi làm việc trực tuyến giữa Giám đốc Học viện Hành chính và Quản trị công và Hiệu trưởng COPA ngày 23/7/2026, nhằm cụ thể hóa các định hướng hợp tác ...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-l3",
      title:
        "Học viện Hành chính và Quản trị công trao đổi hợp tác với Trường Đại học Thành phố Hồng Kông (Trung Quốc)",
      date: "14:00 28/07/2026",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 28/7/2026, Học viện Hành chính và Quản trị công đã tổ chức cuộc họp trực tuyến với Trường Đại học Thành phố Hồng Kông (CityUHK), Trung Quốc và Tổ chức Khoa học và Chuyên gia Việt Nam toàn cầu (AVSE) nhằm trao đổi các cơ hội mở rộng hợp tác đào tạo, nghiên cứu khoa học, tăng cường kết nối học thuật giữa hai trường.",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-l4",
      title:
        "Học viện Hành chính và Quản trị công và Trường Công vụ và Chính sách công, Đại học Khon Kaen thúc đẩy hợp tác thực chất, hiệu quả",
      date: "17:05 23/07/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 23/7/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức buổi làm việc trực tuyến với Trường Công vụ và Chính sách công (College of Public Affairs and Policy - COPA), Đại học Khon Kaen, Thái Lan nhằm cụ thể hóa Bản ghi nhớ hợp tác đã ký kết, thúc đẩy các chương trình đào tạo, nghiên cứu khoa học, trao đổi giảng viên, sinh viên và tổ chức các diễn đàn học thuật quốc tế.",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-l5",
      title:
        "Kiến tạo năng lực lãnh đạo và thúc đẩy đổi mới sáng tạo trong kỷ nguyên tăng trưởng xanh: dấu ấn từ mô hình hợp tác giữa Học viện Hành chính và Quản trị công, Trường Quản trị Normandie và Tập đoàn Hoá chất Việt Nam",
      date: "11:18 16/07/2026",
      image: "/trangChu/slide/a8-141322fba9.png",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p1-l6",
      title:
        "Từ yêu cầu của doanh nghiệp đến hành trình xây dựng sự nghiệp: Học viện Chương trình đào tạo quốc tế “Nhà quản lý kinh doanh trẻ toàn cầu” tại Học viện Hành chính và Quản trị công đối thoại với lãnh đạo doanh nghiệp Hàn Quốc và EY Việt Nam",
      date: "09:49 14/07/2026",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        '(apag.edu.vn) - Trong khuôn khổ Chương trình đào tạo quốc tế "Nhà quản lý kinh doanh trẻ toàn cầu", ngày 10/7/2026, Học viện Hành chính và Quản trị công đã tổ chức buổi nói chuyện chuyên đề với sự tham gia của TS. Ko Tae Yeon, Chủ tịch Hiệp hội Doanh nghiệp Hàn Quốc tại Việt Nam và bà Hương Vũ, Tổng Giám đốc Công ty Cổ phần Tư vấn EY Việt Nam. Buổi trao đổi được tổ chức nhằm giúp học viên hiểu rõ hơn về m...',
      href: "/hop-tac-quoc-te",
    },
  ],
};

// ─── Dữ liệu Trang 2 (Theo ảnh chụp màn hình Ban Hợp tác quốc tế - Trang 2) ────

const page2Data: PageData = {
  featured: {
    id: "p2-feat",
    title:
      "Học viện Hàn Quốc khám phá con người và văn hóa Việt Nam thông qua trải nghiệm tại Bảo tàng Lịch sử Quân sự Việt Nam",
    date: "19:53 08/07/2026",
    image: "/trangChu/slide/luu-niem-2-899d44225a.png",
    summary:
      '(apag.edu.vn) - Trong khuôn khổ Chương trình "Nhà quản lý kinh doanh trẻ toàn cầu" (Global Young Business Managers - GYBM) do Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý Toàn cầu Daewoo (Hàn Quốc) tổ chức, các học viên Hàn Quốc đã tham gia hoạt động học tập trải nghiệm tại Bảo tàng Lịch sử Quân sự Việt Nam.',
    href: "/hop-tac-quoc-te",
  },
  grid: [
    {
      id: "p2-g1",
      title:
        "Vinachem hợp tác với Học viện Hành chính và Quản trị công và Trường Quản trị Normandie (Pháp) trong đào tạo lãnh đạo cấp cao",
      isLogoCard: true,
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-g2",
      title: "Hội thảo Dự án STRIVE 2026 – Tăng cường tính bền vững và thúc đẩy quốc tế hóa giáo dục đại học",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        '(apag.edu.vn) - Trong khuôn khổ Dự án "Nâng cao năng lực quốc tế hóa cho các trường đại học mới tại Việt Nam - STRIVE" thuộc Chương trình Erasmus+ của Liên minh châu Âu, từ ngày 25 d...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-g3",
      title: "Đẩy mạnh hợp tác quốc tế, bồi dưỡng thế hệ lãnh đạo trẻ toàn cầu Việt Nam – Hàn Quốc",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý toàn cầu Daewoo, Hàn Quốc tổ chức Lễ Khai giảng Chương trình "Nhà quản l...',
      href: "/hop-tac-quoc-te",
    },
  ],
  list: [
    {
      id: "p2-l1",
      title: "Chung tay bồi dưỡng thế hệ lãnh đạo trẻ toàn cầu, vun đắp tương lai hợp tác Việt Nam – Hàn Quốc",
      date: "10:07 15/06/2026",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý toàn cầu Daewoo, Hàn Quốc tổ chức Lễ Khai giảng Chương trình "Nhà quản lý kinh doanh trẻ toàn cầu" năm 2026. Chương trình được tổ chức nhằm trang bị cho các học viên những kiến thức về Việt Nam, về môi trường làm việc và kinh doanh tại Việt Nam, đồng thời phát triển những năng lực cần thiết ...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-l2",
      title: "Từ đối ngoại cấp cao đến hợp tác cụ thể về đào tạo, phát triển năng lực quản trị công",
      date: "14:17 01/06/2026",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        "(apag.edu.vn) - Trong khuôn khổ chuyến thăm cấp Nhà nước tới Thái Lan, Singapore và Philippines của Tổng Bí thư, Chủ tịch nước Tô Lâm từ ngày 27/5 đến ngày 01/6/2026, Học viện Hành chính và Quản trị công trực thuộc Học viện Chính trị quốc gia Hồ Chí Minh đã trao các Biên bản ghi nhớ hợp tác với Đại học Khon Kaen (Thái Lan) và Đại học Philippines. Các Biên bản ghi nhớ hợp tác được thiết lập trong những lĩnh vực gắn tr...",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-l3",
      title:
        "Học viện Hành chính và Quản trị công tham gia Hội thảo quốc tế về Quản trị nhà nước tại Đại học Phúc Đán, Trung Quốc",
      date: "14:00 01/06/2026",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Trong hai ngày 26-27/5/20262026, Hội thảo Quốc tế về Quản trị Nhà nước lần thứ nhất với chủ đề "Nhà nước mạnh hơn - Quản trị tốt hơn: Năng lực nhà nước và hiệu quả quản trị trong một thế giới toàn cầu hóa" đã chính thức diễn ra tại trường Đại học Phúc Đán, Trung Quốc. Hội thảo quốc tế do trường Quan hệ quốc tế và Quản trị công, Đại học Phúc Đán (School of International Relations & Public Affair...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-l4",
      title:
        "Tổng Bí thư, Chủ tịch nước Tô Lâm chứng kiến Lễ ký kết biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công (Học viện Chính trị quốc gia Hồ Chí Minh) và Đại học Khon Kaen (KKU) của Thái Lan",
      date: "15:41 28/05/2026",
      image: "/trangChu/slide/vietjet_air.png",
      summary:
        '(apag.edu.vn) - Theo đặc phái viên TTXVN, trưa 28/5/2026, tại Thủ đô Bangkok (Thái Lan), Tổng Bí thư, Chủ tịch nước Tô Lâm và Thủ tướng Vương quốc Thái Lan Anutin Charnvirakul đã cùng chứng kiến Lễ trao các văn kiện hợp tác giữa các bộ, ngành hai nước. Trong đó, Học viện Hành chính và Quản trị công (Học viện Chính trị quốc gia Hồ Chí Minh) và Đại học Khon Kaen (KKU) của Thái Lan đã trao Biên bản ghi nhớ về hợp tá...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-l5",
      title:
        'Hội nghị sinh viên "Nâng cao nhận thức của sinh viên, giảng viên về các cơ hội tham gia Chương trình Erasmus+" – Dự án STRIVE (WP.2, D.5.2)',
      date: "19:56 20/05/2026",
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        '(apag.edu.vn) - Chiều ngày 20/5/2026, tại phòng 3A nhà G, Ban Quản lý khoa học và Hợp tác quốc tế đã chủ trì tổ chức Hội nghị sinh viên: "Nâng cao nhận thức của sinh viên, giảng viên về các cơ hội tham gia Chương trình Erasmus+". Đây là hoạt động trọng tâm nằm trong khuôn khổ Dự án quốc tế STRIVE (WP.2, D.5.2) do Học viện Hành chính và Quản trị công phối hợp triển khai. Hội nghị được tổ chức theo hình thức trực tiếp k...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p2-l6",
      title:
        "Đoàn Học viện Hành chính và Quản trị công hoàn thành tuần làm việc thứ hai tại Canada: Thúc đẩy hợp tác triển khai Dự án Quản trị địa phương bao trùm và phát triển năng lực lãnh đạo địa phương tại Việt Nam",
      date: "07:22 18/05/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        "(apag.edu.vn) - Tiếp theo các hoạt động làm việc tại Ottawa, Canada trong tuần đầu tiên, từ ngày 09 đến 14/5/2026, Đoàn công tác của Học viện Hành chính và Quản trị công do PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện làm Trưởng đoàn đã tiếp tục chương trình công tác tại thành phố Québec, Victoria và Vancouver nhằm khảo sát, đánh giá và thúc đẩy hợp tác với các cơ sở đào tạo, bồi dưỡng của Canada tro...",
      href: "/hop-tac-quoc-te",
    },
  ],
};

// ─── Dữ liệu Trang 3 (Theo ảnh chụp màn hình Ban Hợp tác quốc tế - Trang 3) ────

const page3Data: PageData = {
  featured: {
    id: "p3-feat",
    title:
      "Đoàn công tác của Học viện Hành chính và Quản trị công làm việc tại Canada: Thúc đẩy hợp tác triển khai Dự án Quản trị địa phương bao trùm và nâng cao năng lực đào tạo, bồi dưỡng lãnh đạo địa phương",
    date: "19:06 11/05/2026",
    image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
    summary:
      '(apag.edu.vn) - Thực hiện Quyết định số 1423-QĐ/HVCTQG ngày 02/4/2026 của Giám đốc Học viện Chính trị quốc gia Hồ Chí Minh, từ ngày 05 đến 14/5/2026, đoàn công tác của Học viện Hành chính và Quản trị công do PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện, làm trưởng đoàn đã thực hiện chương trình làm việc tại Canada nhằm thúc đẩy hợp tác triển khai Dự án "Quản trị địa phương bao trùm tại Việt Nam" (Inclusive Local Governance in Viet Nam - ILG) và mở rộng quan hệ hợp tác trong đào tạo, bồi dưỡng và phát triển năng lực quản trị địa phương cho đội ngũ lãnh đạo, quản lý của Việt Nam.',
    href: "/hop-tac-quoc-te",
  },
  grid: [
    {
      id: "p3-g1",
      title:
        "Quyết định số 2024-QĐ/HVHC&QTC ngày 03/5/2026 về việc thành lập Ban Điều phối Đề án Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế cho viên chức, giảng viên HV HC&QTC giai đoạn 2026 – 2027, định hướng đến năm 2030",
      isLogoCard: true,
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-g2",
      title:
        "Quyết định số 2023-QĐ/HVHC&QTC ngày 03/5/2026 về việc thành lập Tổ xây dựng, soạn thảo Đề án Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế cho VC, GV HV HC&QTC giai đoạn 2026 – 2027, định hướng đến năm 2030",
      isLogoCard: true,
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-g3",
      title:
        "Quyết định số 2022-QĐ/HVHC&QTC ngày 03/5/2026 về việc thành lập Ban Chỉ đạo Đề án Nâng cao năng lực giảng dạy, nghiên cứu và làm việc trong môi trường quốc tế cho viên chức, giảng viên HV HC&QTC giai đoạn 2026 – 2027, định hướng đến năm 2030",
      isLogoCard: true,
      href: "/hop-tac-quoc-te",
    },
  ],
  list: [
    {
      id: "p3-l1",
      title: "Ra mắt Mạng lưới cơ sở đào tạo chính sách và quản trị công: Gắn kết đào tạo – nghiên cứu – thực tiễn trong kỷ nguyên mới",
      date: "16:00 24/04/2026",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 24/4/2026, tại Hà Nội, Lễ ra mắt Mạng lưới cơ sở đào tạo chính sách và quản trị công (GPPA) và Diễn đàn khoa học thường niên lần thứ nhất với chủ đề "Quản trị quốc gia và đào tạo nhân lực quản lý trong kỷ nguyên mới" đã được tổ chức tại Trường Đại học Kinh tế Quốc dân. GS.TS. Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị khóa XIII, Chủ tịch Hội đồng Lý luận Trung ương dự và phát biểu tại sự kiệ...',
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-l2",
      title:
        "Học viện Hành chính và Quản trị công làm việc với Đại sứ Cộng hòa Nhân dân Băng-la-đét tại Việt Nam, thúc đẩy hợp tác đào tạo, bồi dưỡng cán bộ",
      date: "15:00 16/04/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 16/4/2026, tại Phòng Truyền thông, Học viện Hành chính và Quản trị công đã tổ chức buổi làm việc với Đại sứ quán Cộng hòa Nhân dân Băng-la-đét tại Việt Nam nhằm trao đổi, thảo luận về định hướng hợp tác trong lĩnh vực đào tạo, bồi dưỡng cán bộ lãnh đạo, quản lý.",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-l3",
      title: "Ấm áp Tết Bunpimay tại Học viện Hành chính và Quản trị công",
      date: "21:31 10/04/2026",
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 10/4/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức buổi lễ chúc mừng Tết cổ truyền Bunpimay 2026 (Phật lịch năm 2569) tới các lưu học sinh nước Cộng hòa Dân chủ Nhân dân Lào đang nghiên cứu và học tập tại Học viện.",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-l4",
      title:
        "Học viện Hành chính và Quản trị công và EROPA thúc đẩy hợp tác chiến lược về quản trị công, hướng tới quốc tế hóa và chuẩn hóa học thuật",
      date: "17:38 07/04/2026",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 07/4/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã có buổi làm việc với đoàn công tác của Tổ chức Hành chính miền Đông thế giới (EROPA) do TS. Alex Brillantes Jr, Tổng Thư ký EROPA dẫn đầu. Hai bên đã trao đổi, thống nhất nhiều nội dung hợp tác trọng tâm như: phối hợp tổ chức Diễn đàn Quản trị công quốc tế thường niên; thúc đẩy lộ trình quốc tế hóa, gia nhập hệ thống Scopus c...",
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-l5",
      title: "Thông báo Chương trình học bổng trao đổi sinh viên Erasmus+ tại Đại học Tuscia, Cộng hòa Ý năm học 2026 – 2027",
      date: "19:17 01/04/2026",
      isLogoCard: true,
      href: "/hop-tac-quoc-te",
    },
    {
      id: "p3-l6",
      title: "Học viện Hành chính và Quản trị công tiếp và làm việc với Đoàn Bộ Các vấn đề Toàn cầu Canada",
      date: "20:00 16/03/2026",
      image: "/trangChu/slide/a9-f769102539.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 16/3/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã đón tiếp và làm việc với Đoàn công tác của Bộ Các vấn đề Toàn cầu Canada nhằm trao đổi về các nội dung hợp tác trong thời gian tới, đặc biệt là việc triển khai dự án Quản trị địa phương bao trùm tại Việt Nam.",
      href: "/hop-tac-quoc-te",
    },
  ],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
  3: page3Data,
};

export default function HopTacQuocTePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const handlePageChange = (pageNum: number) => {
    const target = Math.min(Math.max(pageNum, 1), 3);
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
              CỘT TRÁI (SIDEBAR) — Chiều rộng cố định (~270-300px)
              ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-[280px] xl:w-[300px] max-[480px]:w-full shrink-0 flex flex-col gap-4">
            <SidebarMenu title="HỢP TÁC QUỐC TẾ" items={internationalMenuItems} />

            {/* Ô 1: "TIN MỚI NHẤT" */}
            <div className="border border-gray-200 bg-white">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN MỚI NHẤT
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarLatestNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/hop-tac-quoc-te/tin-tuc-htqt"
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

            {/* Ô 2: "TIN ĐỌC NHIỀU" */}
            <div className="border border-gray-200 bg-white">
              <div className="bg-[#1b2559] text-white font-bold text-center py-2.5 px-3 uppercase text-[clamp(13px,0.75rem+0.15vw,14.5px)] tracking-wide">
                TIN ĐỌC NHIỀU
              </div>
              <ul className="divide-y divide-dashed divide-gray-300">
                {sidebarMostReadNews.map((title, idx) => (
                  <li key={idx} className="py-2.5 px-3.5">
                    <Link
                      href="/hop-tac-quoc-te/tin-tuc-htqt"
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
                  BAN HỢP TÁC QUỐC TẾ
                </span>
              </div>
            </div>

            {/* 1. Bài đầu tiên (Nổi bật nhất: Bố cục ảnh trái / chữ phải) */}
            <article className="flex flex-row max-[480px]:flex-col gap-4 sm:gap-5 items-start">
              <div className="w-[48%] max-[480px]:w-full shrink-0">
                <Link
                  href={currentContent.featured.href}
                  className="block relative w-full h-[210px] sm:h-[250px] md:h-[240px] overflow-hidden group cursor-pointer"
                >
                  {currentContent.featured.isLogoCard ? (
                    <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-6 group-hover:border-[#DA251C] transition-colors">
                      <div className="flex items-center select-none font-black tracking-tighter text-4xl sm:text-5xl">
                        <span className="text-[#DA251C]">AP</span>
                        <span className="relative text-[#1b2559] mx-[-1px]">
                          A
                          <span className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-2 h-2.5 bg-[#DA251C] rounded-full" />
                        </span>
                        <span className="text-[#1b2559]">G</span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={currentContent.featured.image!}
                      alt={currentContent.featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  )}
                </Link>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(15px,1rem+0.4vw,21px)] font-bold text-gray-900 hover:text-[#DA251C] transition-colors leading-snug">
                  <Link href={currentContent.featured.href}>{currentContent.featured.title}</Link>
                </h2>

                <p className="text-[clamp(11px,0.65rem+0.12vw,12.5px)] text-gray-400 italic mt-2 mb-2.5">
                  {currentContent.featured.date}
                </p>

                {currentContent.featured.summary && (
                  <p className="text-[clamp(12.5px,0.72rem+0.2vw,14.5px)] text-gray-700 leading-relaxed text-justify line-clamp-6">
                    {currentContent.featured.summary}
                  </p>
                )}
              </div>
            </article>

            {/* 2. Hàng 3 bài kế tiếp (Lưới 3 cột bằng nhau) */}
            <div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-4 sm:gap-5 mt-6 pt-5 border-t border-gray-200">
              {currentContent.grid.map((article) => (
                <article key={article.id} className="flex flex-col">
                  <Link
                    href={article.href}
                    className="block relative w-full h-[145px] sm:h-[155px] overflow-hidden group cursor-pointer"
                  >
                    {article.isLogoCard ? (
                      <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors">
                        <div className="flex items-center select-none font-black tracking-tighter text-3xl">
                          <span className="text-[#DA251C]">AP</span>
                          <span className="relative text-[#1b2559] mx-[-1px]">
                            A
                            <span className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-2 bg-[#DA251C] rounded-full" />
                          </span>
                          <span className="text-[#1b2559]">G</span>
                        </div>
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
                  className="flex flex-row max-[480px]:flex-col gap-3.5 sm:gap-4 items-start"
                >
                  {/* Cột ảnh nhỏ (~180x120px) hoặc logo card */}
                  <div className="w-[185px] max-[480px]:w-full h-[115px] sm:h-[115px] md:h-[120px] shrink-0">
                    <Link
                      href={article.href}
                      className="block relative w-full h-full overflow-hidden group cursor-pointer"
                    >
                      {article.isLogoCard ? (
                        <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-[#DA251C] transition-colors">
                          <div className="flex items-center select-none font-black tracking-tighter text-2xl sm:text-3xl">
                            <span className="text-[#DA251C]">AP</span>
                            <span className="relative text-[#1b2559] mx-[-1px]">
                              A
                              <span className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-2 bg-[#DA251C] rounded-full" />
                            </span>
                            <span className="text-[#1b2559]">G</span>
                          </div>
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
