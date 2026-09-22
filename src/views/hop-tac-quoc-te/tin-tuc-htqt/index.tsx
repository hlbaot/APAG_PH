"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Home, ChevronRight } from "lucide-react";
import Pagination from "@/components/pagination";
import "@/scss/hop-tac-quoc-te/tin-tuc-htqt/tin-tuc-htqt.scss";

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

// ─── Dữ liệu Trang 1 (Theo ảnh chụp màn hình 1) ──────────────────────────────

const page1Data: PageData = {
  featured: {
    id: "p1-feat",
    title:
      "Khai mạc Khóa tập huấn “Nâng cao năng lực quản trị nhằm triển khai hiệu quả các Mục tiêu Phát triển Bền vững tại Việt Nam”",
    date: "10:28 15/09/2026",
    image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
    summary:
      '(apag.edu.vn) - Sáng ngày 15/9/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Ban Kinh tế và Xã hội Liên Hợp Quốc (UN DESA) tổ chức khai mạc Khóa tập huấn "Nâng cao năng lực quản trị nhằm triển khai hiệu quả các Mục tiêu Phát triển Bền vững tại Việt Nam". Chương trình được tổ chức theo hình thức kết hợp trực tiếp và trực tuyến, kết nối giữa trụ sở Học viện tại Hà Nội với các điểm cầu và cơ quan đối tác quốc tế.',
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
  },
  grid: [
    {
      id: "p1-g1",
      title:
        "Giám đốc Học viện Hành chính và Quản trị công tham dự, báo cáo chuyên đề tại Hội nghị trao đổi kinh nghiệm với Ban Tổ chức Trung ương Đảng Nhân dân Cách mạng Lào",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        '(apag.edu.vn) - Ngày 08/9/2026, tại Hội trường Ban Tổ chức Trung ương Đảng Nhân dân Cách mạng Lào, Hội nghị trao đổi chuyên đề "Chế độ làm việc và mối quan hệ phối hợp giữa Bí thư...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-g2",
      title: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 24/8/2026, tại Học viện Hành chính và Quản trị công, PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện chủ trì buổi làm việc trực tuyến với Trường Hành chính và...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-g3",
      title:
        "Học từ thực tiễn doanh nghiệp: Những bài học quản trị từ Vietjet Air dành cho học viên Hàn Quốc, Chương trình Nhà quản lý kinh doanh trẻ toàn cầu tại Học viện Hành chính và Quản trị công",
      image: "/trangChu/slide/vietjet_air.png",
      summary:
        "(apag.edu.vn) - Trong khuôn khổ Chương trình Nhà quản lý kinh doanh trẻ toàn cầu (Global Young Business Managers - GYBM), ngày 05/8/2026, đoàn học viên Hàn Quốc đã có ...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
  list: [
    {
      id: "p1-l1",
      title:
        "Triển khai biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công và Đại học Khon Kaen: Phân hiệu Học viện Hành chính và Quản trị công tại Thành phố Hồ Chí Minh làm việc với Trường Công vụ và Chính sách công (COPA), Thái Lan",
      date: "14:56 29/07/2026",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        '(apag.edu.vn) - Ngày 28/7/2026, Phân hiệu Học viện Hành chính và Quản trị công tại Thành phố Hồ Chí Minh đã đón tiếp và làm việc với Đoàn lãnh đạo Trường Công vụ và Chính sách công (COPA), Đại học Khon Kaen, Thái Lan. Đây là hoạt động được triển khai ngay sau buổi làm việc trực tuyến giữa Giám đốc Học viện Hành chính và Quản trị công và Hiệu trưởng COPA ngày 23/7/2026, nhằm cụ thể hóa các định hướng hợp tác ...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-l2",
      title:
        "Học viện Hành chính và Quản trị công trao đổi hợp tác với Trường Đại học Thành phố Hồng Kông (Trung Quốc)",
      date: "14:00 28/07/2026",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 28/7/2026, Học viện Hành chính và Quản trị công đã tổ chức cuộc họp trực tuyến với Trường Đại học Thành phố Hồng Kông (CityUHK), Trung Quốc và Tổ chức Khoa học và Chuyên gia Việt Nam toàn cầu (AVSE) nhằm trao đổi các cơ hội mở rộng hợp tác đào tạo, nghiên cứu khoa học, tăng cường kết nối học thuật giữa hai trường.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-l3",
      title:
        "Học viện Hành chính và Quản trị công và Trường Công vụ và Chính sách công, Đại học Khon Kaen thúc đẩy hợp tác thực chất, hiệu quả",
      date: "17:05 23/07/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 23/7/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức buổi làm việc trực tuyến với Trường Công vụ và Chính sách công (College of Public Affairs and Policy - COPA), Đại học Khon Kaen, Thái Lan nhằm cụ thể hóa Bản ghi nhớ hợp tác đã ký kết, thúc đẩy các chương trình đào tạo, nghiên cứu khoa học, trao đổi giảng viên, sinh viên và tổ chức các diễn đàn học thuật quốc tế.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-l4",
      title:
        "Kiến tạo năng lực lãnh đạo và thúc đẩy đổi mới sáng tạo trong kỷ nguyên tăng trưởng xanh: dấu ấn từ mô hình hợp tác giữa Học viện Hành chính và Quản trị công, Trường Quản trị Normandie và Tập đoàn Hoá chất Việt Nam",
      date: "11:18 16/07/2026",
      image: "/trangChu/slide/a8-141322fba9.png",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-l5",
      title:
        "Từ yêu cầu của doanh nghiệp đến hành trình xây dựng sự nghiệp: Học viện Chương trình đào tạo quốc tế “Nhà quản lý kinh doanh trẻ toàn cầu” tại Học viện Hành chính và Quản trị công đối thoại với lãnh đạo doanh nghiệp Hàn Quốc và EY Việt Nam",
      date: "09:49 14/07/2026",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        '(apag.edu.vn) - Trong khuôn khổ Chương trình đào tạo quốc tế "Nhà quản lý kinh doanh trẻ toàn cầu", ngày 10/7/2026, Học viện Hành chính và Quản trị công đã tổ chức buổi nói chuyện chuyên đề với sự tham gia của TS. Ko Tae Yeon, Chủ tịch Hiệp hội Doanh nghiệp Hàn Quốc tại Việt Nam và bà Hương Vũ, Tổng Giám đốc Công ty Cổ phần Tư vấn EY Việt Nam. Buổi trao đổi được tổ chức nhằm giúp học viên hiểu rõ hơn về m...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p1-l6",
      title:
        "Học viện Hàn Quốc khám phá con người và văn hóa Việt Nam thông qua trải nghiệm tại Bảo tàng Lịch sử Quân sự Việt Nam",
      date: "19:53 08/07/2026",
      image: "/trangChu/slide/luu-niem-2-899d44225a.png",
      summary:
        '(apag.edu.vn) - Trong khuôn khổ Chương trình "Nhà quản lý kinh doanh trẻ toàn cầu" (Global Young Business Managers - GYBM) do Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý Toàn cầu Daewoo (Hàn Quốc) tổ chức, các học viên Hàn Quốc đã tham gia hoạt động học tập trải nghiệm tại Bảo tàng Lịch sử Quân sự Việt Nam.',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
};

// ─── Dữ liệu Trang 2 (Theo ảnh chụp màn hình 2) ──────────────────────────────

const page2Data: PageData = {
  featured: {
    id: "p2-feat",
    title:
      "Vinachem hợp tác với Học viện Hành chính và Quản trị công và Trường Quản trị Normandie (Pháp) trong đào tạo lãnh đạo cấp cao",
    date: "14:54 08/07/2026",
    isLogoCard: true,
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
  },
  grid: [
    {
      id: "p2-g1",
      title: "Đẩy mạnh hợp tác quốc tế, bồi dưỡng thế hệ lãnh đạo trẻ toàn cầu Việt Nam - Hàn Quốc",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý toàn cầu Daewoo, Hàn Quốc tổ chức Lễ Khai giảng Chương trình "Nhà quản l...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-g2",
      title: "Chung tay bồi dưỡng thế hệ lãnh đạo trẻ toàn cầu, vun đắp tương lai hợp tác Việt Nam - Hàn Quốc",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 15/6/2026, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Học viện Quản lý toàn cầu Daewoo, Hàn Quốc tổ chức Lễ Khai giảng Chương trình "Nhà quản l...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-g3",
      title: "Từ đối ngoại cấp cao đến hợp tác cụ thể về đào tạo, phát triển năng lực quản trị công",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        "(apag.edu.vn) - Trong khuôn khổ chuyến thăm cấp Nhà nước tới Thái Lan, Singapore và Philippines của Tổng Bí thư, Chủ tịch nước Tô Lâm từ ngày 27/5 đến ngày 01/6/2026, Học việ...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
  list: [
    {
      id: "p2-l1",
      title:
        "Học viện Hành chính và Quản trị công tham gia Hội thảo quốc tế về Quản trị nhà nước tại Đại học Phúc Đán, Trung Quốc",
      date: "14:00 01/06/2026",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        '(apag.edu.vn) - Trong hai ngày 26-27/5/2026, Hội thảo Quốc tế về Quản trị Nhà nước lần thứ nhất với chủ đề "Nhà nước mạnh hơn - Quản trị tốt hơn: Năng lực nhà nước và hiệu quả quản trị trong một thế giới toàn cầu hóa" đã chính thức diễn ra tại trường Đại học Phúc Đán, Trung Quốc. Hội thảo quốc tế do trường Quan hệ quốc tế và Quản trị công, Đại học Phúc Đán (School of International Relations & Public Affair...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-l2",
      title:
        "Tổng Bí thư, Chủ tịch nước Tô Lâm chứng kiến Lễ ký kết biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công (Học viện Chính trị quốc gia Hồ Chí Minh) và Đại học Khon Kaen (KKU) của Thái Lan",
      date: "15:41 28/05/2026",
      image: "/trangChu/slide/vietjet_air.png",
      summary:
        '(apag.edu.vn) - Theo đặc phái viên TTXVN, trưa 28/5/2026, tại Thủ đô Bangkok (Thái Lan), Tổng Bí thư, Chủ tịch nước Tô Lâm và Thủ tướng Vương quốc Thái Lan Anutin Charnvirakul đã cùng chứng kiến Lễ trao các văn kiện hợp tác giữa các bộ, ngành hai nước. Trong đó, Học viện Hành chính và Quản trị công (Học viện Chính trị quốc gia Hồ Chí Minh) và Đại học Khon Kaen (KKU) của Thái Lan đã trao Biên bản ghi nhớ về hợp tá...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-l3",
      title:
        "Đoàn Học viện Hành chính và Quản trị công hoàn thành tuần làm việc thứ hai tại Canada: Thúc đẩy hợp tác triển khai Dự án Quản trị địa phương bao trùm và phát triển năng lực lãnh đạo địa phương tại Việt Nam",
      date: "07:22 18/05/2026",
      image: "/trangChu/slide/luu-niem-2-899d44225a.png",
      summary:
        "(apag.edu.vn) - Tiếp theo các hoạt động làm việc tại Ottawa, Canada trong tuần đầu tiên, từ ngày 09 đến 14/5/2026, Đoàn công tác của Học viện Hành chính và Quản trị công do PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện làm Trưởng đoàn đã tiếp tục chương trình công tác tại thành phố Québec, Victoria và Vancouver nhằm khảo sát, đánh giá và thúc đẩy hợp tác với các cơ sở đào tạo, bồi dưỡng của Canada tro...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-l4",
      title:
        "Đoàn công tác của Học viện Hành chính và Quản trị công làm việc tại Canada: Thúc đẩy hợp tác triển khai Dự án Quản trị địa phương bao trùm và nâng cao năng lực đào tạo, bồi dưỡng lãnh đạo địa phương",
      date: "19:06 11/05/2026",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        '(apag.edu.vn) - Thực hiện Quyết định số 1423-QĐ/HVCTQG ngày 02/4/2026 của Giám đốc Học viện Chính trị quốc gia Hồ Chí Minh, từ ngày 05 đến 14/5/2026, đoàn công tác của Học viện Hành chính và Quản trị công do PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện, làm trưởng đoàn đã thực hiện chương trình làm việc tại Canada nhằm thúc đẩy hợp tác triển khai Dự án "Quản trị địa phương bao trùm tại Việt Nam" (Inclusi...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-l5",
      title: "Ra mắt Mạng lưới cơ sở đào tạo chính sách và quản trị công: Gắn kết đào tạo – nghiên cứu – thực tiễn trong kỷ nguyên mới",
      date: "16:00 24/04/2026",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 24/4/2026, tại Hà Nội, Lễ ra mắt Mạng lưới cơ sở đào tạo chính sách và quản trị công (GPPA) và Diễn đàn khoa học thường niên lần thứ nhất với chủ đề "Quản trị quốc gia và đào tạo nhân lực quản lý trong kỷ nguyên mới" đã được tổ chức tại Trường Đại học Kinh tế Quốc dân. GS.TS. Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị khóa XIII, Chủ tịch Hội đồng Lý luận Trung ương dự và phát biểu tại sự kiệ...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p2-l6",
      title:
        "Học viện Hành chính và Quản trị công làm việc với Đại sứ Cộng hòa Nhân dân Băng-la-đét tại Việt Nam, thúc đẩy hợp tác đào tạo, bồi dưỡng cán bộ",
      date: "15:00 16/04/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 16/4/2026, tại Phòng Truyền thông, Học viện Hành chính và Quản trị công đã tổ chức buổi làm việc với Đại sứ quán Cộng hòa Nhân dân Băng-la-đét tại Việt Nam nhằm trao đổi, thảo luận về định hướng hợp tác trong lĩnh vực đào tạo, bồi dưỡng cán bộ lãnh đạo, quản lý.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
};

// ─── Dữ liệu Trang 3 (Theo ảnh chụp màn hình 3) ──────────────────────────────

const page3Data: PageData = {
  featured: {
    id: "p3-feat",
    title: "Ấm áp Tết Bunpimay tại Học viện Hành chính và Quản trị công",
    date: "21:31 10/04/2026",
    image: "/trangChu/slide/a8-141322fba9.png",
    summary:
      "(apag.edu.vn) - Chiều ngày 10/4/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tổ chức buổi lễ chúc mừng Tết cổ truyền Bunpimay 2026 (Phật lịch năm 2569) tới các lưu học sinh nước Cộng hòa Dân chủ Nhân dân Lào đang nghiên cứu và học tập tại Học viện.",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
  },
  grid: [
    {
      id: "p3-g1",
      title:
        "Học viện Hành chính và Quản trị công và EROPA thúc đẩy hợp tác chiến lược về quản trị công, hướng tới quốc tế hóa và chuẩn hóa học thuật",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 07/4/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã có buổi làm việc với đoàn công tác của Tổ chức Hành chính miền Đông thế giới (EROPA) do TS. Alex...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-g2",
      title: "Học viện Hành chính và Quản trị công tiếp và làm việc với Đoàn Bộ Các vấn đề Toàn cầu Canada",
      image: "/trangChu/slide/a9-f769102539.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 16/3/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã đón tiếp và làm việc với Đoàn công tác của Bộ Các vấn đề Toàn cầu Canada nhằm trao đổi về các nội dun...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-g3",
      title: "Thúc đẩy hợp tác đào tạo nguồn nhân lực quản trị chất lượng cao giữa Việt Nam và Hàn Quốc",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 06/3/2026, tại trụ sở Hà Nội, Học viện Hành chính và Quản trị công đã chính thức ký kết Thỏa thuận hợp tác với Học viện Quản lý toàn cầu Daewoo (Hàn Quốc). Sự...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
  list: [
    {
      id: "p3-l1",
      title:
        "Thúc đẩy hợp tác quản trị công Việt Nam – Ô-xtrây-lia, Niu Di-lân: Mở rộng liên kết đào tạo lãnh đạo khu vực công",
      date: "19:00 02/03/2026",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        "(apag.edu.vn) - Chiều ngày 02/3/2026, Lãnh đạo Học viện Hành chính và Quản trị công đã tiếp và làm việc với Đoàn chuyên gia Trường Chính phủ Ô-xtrây-lia và Niu Di-lân (ANZSOG) và Trung tâm Việt - Úc (VAC) do Bà Estrellita Boskovic (Elly), Bí thư thứ nhất, Đại sứ quán Ô-xtrây-lia tại Việt Nam làm Trưởng đoàn, nhằm trao đổi định hướng hợp tác trong đào tạo, bồi dưỡng lãnh đạo, quản lý lĩnh vực chính sách công và quản ...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-l2",
      title:
        "Học viện Hành chính và Quản trị công tham gia Hội thảo quốc tế về Quản trị nhà nước tại Học viện Tổng thống, Liên bang Nga",
      date: "12:33 13/02/2026",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        '(apag.edu.vn) - Từ ngày 10 - 13/02/2026, Hội thảo Quốc tế về Quản trị Nhà nước lần thứ nhất với chủ đề "Quản trị Nhà nước thế kỷ XXI: Tốc độ và Ý nghĩa" đã chính thức diễn ra tại Học viện Tổng thống (RANEPA), Liên bang Nga. Sự kiện quy tụ hơn 700 quan chức cao cấp liên bang và các vùng lãnh thổ Liên bang Nga, cùng hơn 50 đại diện cơ quan nhà nước, các chuyên gia, nhà khoa học và cộng đồng giáo dục ...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-l3",
      title:
        "Thúc đẩy hợp tác đào tạo và nghiên cứu giữa Học viện Hành chính và Quản trị công và Đại học Khon Kaen (Thái Lan)",
      date: "14:00 06/02/2026",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        "Sáng ngày 06/02/2026, Học viện Hành chính và Quản trị công đã trang trọng tổ chức buổi tiếp và làm việc với Đoàn Trường Công vụ và Chính sách công, Đại học Khon Kaen (Thái Lan) nhằm trao đổi chuyên môn và thúc đẩy hợp tác trong lĩnh vực quản trị công và hành chính địa phương. Đoàn Đại học Khon Kaen (Thái Lan) do PGS.TS. Sirisak Laochankham, Hiệu trưởng làm trưởng đoàn.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-l4",
      title: "Cuộc cách mạng về thể chế ở Việt Nam: tầm nhìn cho kỷ nguyên phát triển mới",
      date: "11:20 05/02/2026",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        '(apag.edu.vn) - Hội nghị Thượng đỉnh Chính phủ Thế giới 2026 (World Governments Summit - WGS 2026) diễn ra từ ngày 03-05/02/2026 tại Dubai, Các Tiểu vương quốc Ả Rập Thống nhất, với chủ đề "Shaping Future Governments" - Định hình các Chính phủ tương lai. Đây là một trong những diễn đàn chính trị - quản trị lớn nhất thế giới, quy tụ các nguyên thủ quốc gia, bộ trưởng, lãnh đạo các tổ chức quốc tế, giới học giả ...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-l5",
      title:
        "Học viện Hành chính và Quản trị công tham dự Hội nghị Thượng đỉnh Chính phủ thế giới 2026: Chia sẻ kinh nghiệm cách mạng thể chế của Việt Nam: Tầm nhìn cho kỷ nguyên phát triển mới",
      date: "16:22 04/02/2026",
      image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
      summary:
        '(apag.edu.vn) - Hội nghị Thượng đỉnh Chính phủ thế giới 2026 diễn ra tại Dubai trong bối cảnh trật tự toàn cầu đang tái cấu trúc mạnh mẽ, khi các quốc gia đồng thời đối mặt với áp lực tăng trưởng, bất định địa - chính trị, cách mạng công nghệ và yêu cầu phát triển bền vững. Với chủ đề "Định hình các Chính phủ tương lai", Hội nghị không chỉ là diễn đàn trao đổi chính sách cấp cao, mà còn là không gian định hình tư duy chí...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p3-l6",
      title: "Học viện Hành chính và Quản trị công tiếp Đoàn Học viện Quản trị công Cam Túc (Trung Quốc)",
      date: "20:00 03/02/2026",
      image: "/trangChu/slide/vietjet_air.png",
      summary:
        "Sáng ngày 03/02/2026, tại Hà Nội, Học viện Hành chính và Quản trị công tiếp và làm việc với Đoàn Học viện Quản trị công Cam Túc (Trung Quốc). TS. Bùi Phương Đình, Phó Giám đốc Học viện chủ trì buổi tiếp.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
};

// ─── Dữ liệu Trang 4 (Theo ảnh chụp màn hình 4) ──────────────────────────────

const page4Data: PageData = {
  featured: {
    id: "p4-feat",
    title: "Đẩy mạnh hợp tác Việt Nam - Hàn Quốc trong đào tạo và nghiên cứu quản trị công",
    date: "18:00 28/01/2026",
    image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
    summary:
      "(apag.edu.vn) - Sáng ngày 26/01/2026, Học viện Hành chính và Quản trị công trang trọng tổ chức buổi tiếp và làm việc với Đoàn chuyên gia Trường Đại học INHA (Hàn Quốc) do GS. Kim Young Soon, Chủ tịch Quỹ Chung sống và Kết nối, Giám đốc Viện Nghiên cứu Hội tụ Đa văn hóa làm trưởng đoàn.",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
  },
  grid: [
    {
      id: "p4-g1",
      title: "Tọa đàm khoa học quốc tế: “Tính đa dạng và thực tiễn giao thoa văn hóa trong thế giới đa văn hóa”",
      image: "/trangChu/slide/a8-141322fba9.png",
      summary:
        "(apag.edu.vn) - Ngày 21/01/2026, tại Hà Nội, Học viện Hành chính và Quản trị công đã phối hợp với Đại học INHA (Hàn Quốc), Hiệp hội Giao lưu văn hóa quốc tế Hàn Quốc và Viện Nghiên cứu Hòa...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-g2",
      title:
        "Khai giảng Khóa bồi dưỡng “Nâng cao năng lực lãnh đạo, quản lý, đáp ứng yêu cầu quản trị quốc gia hiện đại, hiệu quả” giữa Viện Quản trị Chandler (CIG), Singapore và Học viện Hành chính và Quản trị công",
      image: "/trangChu/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
      summary:
        '(apag.edu.vn) - Sáng ngày 02/12/2025, Học viện Hành chính và Quản trị công tổ chức Lễ Khai giảng Khóa bồi dưỡng "Nâng cao năng lực lãnh đạo, quản lý, đáp ứng yêu cầu quản trị quốc gia...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-g3",
      title:
        "Học viện Hành chính và Quản trị công đón tiếp Đoàn cán bộ lãnh đạo, học viên Học viện Hành chính và Quản lý Matsushita (MIGM), Nhật Bản",
      image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
      summary:
        "(apag.edu.vn) - Sáng ngày 26/11/2025, Học viện Hành chính và Quản trị công đã trang trọng đón tiếp và làm việc với Đoàn cán bộ lãnh đạo, học viên Học viện Hành chính và Quản lý Matsushit...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
  list: [
    {
      id: "p4-l1",
      title: "Học viện Hành chính và Quản trị công tiếp Đoàn Thanh niên Hàn Quốc",
      date: "20:00 03/11/2025",
      image: "/trangChu/slide/a0-f97775f053.png",
      summary:
        "Chiều ngày 03/11/2025, tại Phòng Truyền thống – Học viện Hành chính và Quản trị công đã diễn ra buổi đón và làm việc giữa Học viện Hành chính và Quản trị công (Việt Nam) và Đoàn Thanh niên Hàn Quốc do ông Jee Chang Sun, Giám đốc Ban Dự án Chiến lược Châu Á - Quỹ Giao lưu Quốc tế Hàn Quốc làm Trưởng đoàn.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-l2",
      title: "Diễn đàn Quản trị công quốc tế thường niên 2025 thành công tốt đẹp",
      date: "19:29 24/10/2025",
      image: "/trangChu/slide/luu-niem-2-899d44225a.png",
      summary:
        "Ngày 24/10/2025, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Chương trình Phát triển Liên Hợp Quốc (UNDP), Viện Quản trị Chandler, Trường Chính sách công Lý Quang Diệu (Singapore), Cơ quan Giáo dục Quốc tế Canada (CBIE), Tổ chức Hành chính miền Đông thế giới (EROPA) và Mạng lưới các cơ sở đào tạo công vụ ASEAN (PSTI) tổ chức Diễn đàn Quản trị công quốc tế thường ni...",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-l3",
      title: "Kiến tạo giải pháp phát triển bền vững nền hành chính tinh gọn, hiệu quả",
      date: "19:18 24/10/2025",
      image: "/trangChu/slide/hop_tac_lao.png",
      summary:
        "Tiếp nối chương trình làm việc của Diễn đàn Quản trị công quốc tế thường niên 2025, chiều cùng ngày 24/10/2025, các đại biểu đã tham dự Phiên chuyên đề thứ 2: Gắn kết giữa cơ sở đào tạo và chính quyền địa phương trong đổi mới sáng tạo.",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-l4",
      title: "Đổi mới sáng tạo - Động lực cho phát triển bền vững trong kỷ nguyên mới",
      date: "14:05 24/10/2025",
      image: "/trangChu/congTacDang/sub2_giam_sat.png",
      summary:
        'Nằm trong chương trình Diễn đàn Quản trị công quốc tế thường niên 2025, sáng 24/10/2025, các đại biểu tham dự Diễn đàn đã cùng nhau thảo luận Phiên 1 với chủ đề "Đổi mới sáng tạo - Động lực cho phát triển bền vững trong kỷ nguyên mới". PGS.TS. Nguyễn Bá Chiến - GS. Vũ Minh Khương - PGS.TS. Nguyễn Thị Hồng Hải đồng chủ trì Phiên 1; và Phiên 2: Đối thoại chính sách với chủ đề: "Đổi mới sáng t...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-l5",
      title:
        "Khai mạc Diễn đàn Quản trị công quốc tế thường niên 2025 – “Đổi mới sáng tạo hướng tới phát triển bền vững quốc gia trong kỷ nguyên mới”",
      date: "10:17 24/10/2025",
      image: "/trangChu/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
      summary:
        'Sáng ngày 24/10/2025, tại Hà Nội, Học viện Hành chính và Quản trị công phối hợp với Chương trình Phát triển Liên Hợp Quốc (UNDP), Viện Quản trị Chandler, Trường Chính sách công Lý Quang Diệu (Singapore), Cơ quan Giáo dục Quốc tế Canada (CBIE), Tổ chức Hành chính miền Đông thế giới (EROPA) và Mạng lưới các cơ sở đào tạo công vụ ASEAN (PSTI) tổ chức khai mạc Diễn đàn Quản trị cô...',
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
    {
      id: "p4-l6",
      title:
        "Diễn đàn Quản trị công quốc tế thường niên 2025 – “Đổi mới sáng tạo hướng tới phát triển bền vững quốc gia trong kỷ nguyên mới”",
      date: "11:40 23/10/2025",
      image: "/trangChu/slide/vietjet_air.png",
      href: "/hop-tac-quoc-te/tin-tuc-htqt",
    },
  ],
};

const pagesDataMap: Record<number, PageData> = {
  1: page1Data,
  2: page2Data,
  3: page3Data,
  4: page4Data,
  5: page4Data,
};

export default function TinTucHTQTPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentContent = pagesDataMap[currentPage] || page1Data;

  const handlePageChange = (pageNum: number) => {
    const target = Math.min(Math.max(pageNum, 1), 4);
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
                  TIN TỨC
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
                      <span className="text-4xl sm:text-5xl font-black tracking-tight select-none">
                        <span className="text-[#DA251C]">AP</span>
                        <span className="text-[#1b2559]">AG</span>
                      </span>
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
                        <span className="text-3xl font-black tracking-tight select-none">
                          <span className="text-[#DA251C]">AP</span>
                          <span className="text-[#1b2559]">AG</span>
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
                          <span className="text-2xl sm:text-3xl font-black tracking-tight select-none">
                            <span className="text-[#DA251C]">AP</span>
                            <span className="text-[#1b2559]">AG</span>
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
            {/* Phân trang */}
            <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={handlePageChange}
            />

          </main>
        </div>
      </div>
    </div>
  );
}
