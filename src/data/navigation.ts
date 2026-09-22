export interface NavDropdownItem {
  title: string;
  href: string;
  external?: boolean;
}

// 1. GIỚI THIỆU
export const introMenuItems: NavDropdownItem[] = [
  { title: "BAN GIÁM ĐỐC PHÂN HIỆU", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { title: "GIỚI THIỆU CHUNG", href: "/gioi-thieu/gioi-thieu-chung" },
  { title: "ĐƠN VỊ THUỘC VÀ TRỰC THUỘC", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { title: "NHỮNG CHẶNG ĐƯỜNG PHÁT TRIỂN", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
];

// 2. ĐÀO TẠO, BỒI DƯỠNG
export const trainingMenuItems: NavDropdownItem[] = [
  { title: "ĐÀO TẠO ĐẠI HỌC", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
  { title: "ĐÀO TẠO THẠC SĨ", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
  { title: "ĐÀO TẠO BỒI DƯỠNG", href: "/dao-tao&boi-duong/dao-tao-boi-duong" },
];

// 3. HỢP TÁC QUỐC TẾ
export const internationalMenuItems: NavDropdownItem[] = [
  { title: "SỨ MỆNH - TẦM NHÌN - CHIẾN LƯỢC", href: "/hop-tac-quoc-te/su-menh-tam-nhin-chien-luoc" },
  { title: "TIN TỨC HỢP TÁC QUỐC TẾ", href: "/hop-tac-quoc-te/tin-tuc-htqt" },
  { title: "CHƯƠNG TRÌNH ERASMUS+", href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus" },
  { title: "HỢP TÁC KHÁC", href: "/hop-tac-quoc-te/hop-tac-khac" },
  { title: "LIÊN HỆ", href: "/hop-tac-quoc-te/lien-he" },
];

// 4. ĐẢM BẢO CHẤT LƯỢNG
export const qualityMenuItems: NavDropdownItem[] = [
  { title: "ĐBCL CHƯƠNG TRÌNH ĐÀO TẠO", href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt" },
  { title: "ĐBCL CƠ SỞ GIÁO DỤC", href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc" },
  { title: "HỆ THỐNG VĂN BẢN PHÁP LUẬT", href: "/dam-bao-chat-luong/he-thong-van-ban-phap-luat" },
];

// 5. HỌC LIỆU
export const libraryMenuItems: NavDropdownItem[] = [
  { title: "THƯ VIỆN", href: "http://113.190.240.60:8080/phamquangquyen/", external: true },
  { title: "THÔNG TIN TƯ LIỆU", href: "/hoc-lieu/thong-tin-tu-lieu" },
];

// 6. TIN TỨC
export const newsMenuItems: NavDropdownItem[] = [
  { title: "TIN TỨC", href: "/tin-tuc/tin-tuc" },
  { title: "THÔNG BÁO", href: "/tin-tuc/thong-bao" },
  { title: "LỊCH CÔNG TÁC", href: "https://lichtuan.apag.edu.vn/index.php?route=apag/calendar", external: true },
  { title: "THỜI KHÓA BIỂU", href: "/tin-tuc/thoi-khoa-bieu" },
  { title: "TUYÊN TRUYỀN PHỔ BIẾN PHÁP LUẬT", href: "/tin-tuc/tuyen-truyen-phap-luat" },
];

export function isNavDropdownItemActive(pathname: string, itemHref: string): boolean {
  if (!pathname || !itemHref) return false;
  if (pathname === itemHref) return true;
  if (itemHref === "/tin-tuc/tin-tuc" && (pathname === "/tin-tuc" || pathname.startsWith("/tin-tuc/tin-tuc"))) {
    return !pathname.includes("thong-bao");
  }
  if (itemHref === "/tin-tuc/thong-bao" && pathname.includes("thong-bao")) {
    return true;
  }
  if (itemHref.startsWith("/") && pathname.startsWith(itemHref + "/")) {
    return true;
  }
  return false;
}
