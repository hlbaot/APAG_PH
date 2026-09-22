"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  Volume2,
  VolumeX,
  Bookmark,
  Share2,
  Mail,
  Link2,
  ArrowLeft,
  ChevronRight,
  Clock,
  MessageSquare,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import "@/scss/gioi-thieu/ban-giam-doc-phan-hieu/ban-giam-doc-phan-hieu.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


// ─── Danh sách Tin đọc nhiều ──────────────────────────────────────────────
const popularNews = [
  {
    id: 1,
    title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng",
    href: "/gioi-thieu/ban-giam-doc-phan-hieu",
  },
  {
    id: 2,
    title: "Giới thiệu chung về Phân hiệu Học viện tại TP. Đà Nẵng",
    href: "/gioi-thieu/gioi-thieu-chung",
  },
  {
    id: 3,
    title: "Cơ cấu tổ chức các đơn vị thuộc và trực thuộc Phân hiệu Đà Nẵng",
    href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc",
  },
  {
    id: 4,
    title: "Những chặng đường phát triển và dấu ấn lịch sử của Phân hiệu",
    href: "/gioi-thieu/nhung-chang-duong-phat-trien",
  },
  {
    id: 5,
    title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026",
    href: "/dao-tao&boi-duong/dao-tao-dai-hoc",
  },
];

// ─── Tin liên quan (Xem thêm) ─────────────────────────────────────────────
const relatedNews = [
  {
    id: 1,
    title: "Phân hiệu Đà Nẵng tổ chức Hội nghị tổng kết năm học và phương hướng nhiệm vụ trọng tâm",
    time: "15/08/2026 09:30",
    image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
    excerpt: "Ban Giám đốc Phân hiệu chủ trì Hội nghị đánh giá toàn diện công tác đào tạo, bồi dưỡng và nghiên cứu khoa học phục vụ các tỉnh miền Trung - Tây Nguyên.",
    href: "/tin-tuc/tin-tuc",
  },
  {
    id: 2,
    title: "Ban Giám đốc Phân hiệu tiếp và làm việc với đoàn công tác Sở Nội vụ TP. Đà Nẵng",
    time: "02/08/2026 14:00",
    image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
    excerpt: "Hai bên đã trao đổi sâu về kế hoạch đào tạo bồi dưỡng nâng ngạch và chuẩn hóa năng lực công chức số đáp ứng yêu cầu chính quyền đô thị.",
    href: "/tin-tuc/tin-tuc",
  },
];

export default function BanGiamDocPhanHieuPage() {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // Xử lý in trang
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Xử lý copy link
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Xử lý gửi ý kiến
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setIsSubmittingComment(true);
    setTimeout(() => {
      setCommentList((prev) => [comment.trim(), ...prev]);
      setComment("");
      setIsSubmittingComment(false);
    }, 400);
  };

  return (
    <div className="w-full bg-[#fdfdfd] py-6 sm:py-8">
      <div className="w-full max-w-[1360px] mx-auto px-4">
        
        {/* ── BỐ CỤC CHÍNH 2 CỘT ── */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          
          {/* CỘT TRÁI (SIDEBAR) */}
          <aside className="col-span-4 xl:col-span-3 max-[480px]:col-span-12 flex flex-col gap-6">
            
            {/* Box 1: Khối Menu "GIỚI THIỆU" */}
            <SidebarMenu title="GIỚI THIỆU" items={introMenuItems} />


            {/* Box 2: Khối "TIN ĐỌC NHIỀU" */}
            <div className="bg-white border border-gray-200 rounded-xs shadow-2xs overflow-hidden">
              <div className="bg-[#1E2A5E] text-white px-4 py-3">
                <h3 className="text-[clamp(13px,0.75rem+0.2vw,15.5px)] font-bold uppercase tracking-wider">
                  TIN ĐỌC NHIỀU
                </h3>
              </div>
              <div className="divide-y divide-gray-100 p-2 sm:p-3">
                {popularNews.map((news) => (
                  <Link
                    key={news.id}
                    href={news.href}
                    className="flex items-start gap-2.5 py-2.5 px-2 rounded-xs hover:bg-gray-50 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A5E] group-hover:bg-[#DA251C] shrink-0 mt-2 transition-colors" />
                    <p className="text-[clamp(12px,0.7rem+0.15vw,13.5px)] font-semibold text-gray-800 group-hover:text-[#DA251C] transition-colors leading-snug">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

          {/* CỘT PHẢI (MAIN CONTENT) */}
          <main className="col-span-8 xl:col-span-9 max-[480px]:col-span-12 bg-white border border-gray-200 rounded-xs shadow-2xs p-4 sm:p-6 md:p-8">
            
            {/* 1. Thanh Breadcrumb */}
            <div className="bg-[#f0f2f5] px-3 py-2 rounded-xs flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-5">
              <Link
                href="/"
                className="bg-[#1E2A5E] text-white p-1 rounded-xs hover:bg-[#DA251C] transition-colors inline-flex items-center justify-center"
                aria-label="Trang chủ"
              >
                <Home className="w-3.5 h-3.5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/gioi-thieu/gioi-thieu-chung"
                className="font-bold text-[#DA251C] hover:underline uppercase"
              >
                GIỚI THIỆU
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium truncate">
                Ban Giám đốc Phân hiệu Đà Nẵng
              </span>
            </div>

            {/* 2. Tiêu đề bài viết */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2A5E] leading-snug mb-4">
              Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng
            </h1>

            {/* 3. Thanh công cụ */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Cập nhật ngày 20/08/2026 - Phân hiệu Đà Nẵng</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 select-none">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isPlayingAudio
                      ? "bg-red-100 text-[#DA251C]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  title="Nghe đọc bài viết"
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Đang đọc...</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe đọc</span>
                    </>
                  )}
                </button>

                <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5">
                  <span className="text-[11px] text-gray-500 font-medium">Chọn cỡ chữ:</span>
                  <button
                    type="button"
                    onClick={() => setFontSize("normal")}
                    className={`px-1.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                      fontSize === "normal" ? "bg-[#1E2A5E] text-white" : "text-gray-700 hover:bg-gray-200"
                    }`}
                    title="Cỡ chữ chuẩn"
                  >
                    A
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize("large")}
                    className={`px-1.5 py-0.5 rounded text-sm font-bold transition-colors cursor-pointer ${
                      fontSize === "large" ? "bg-[#1E2A5E] text-white" : "text-gray-700 hover:bg-gray-200"
                    }`}
                    title="Cỡ chữ lớn"
                  >
                    A+
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-gray-100 rounded transition-colors cursor-pointer"
                  title="In trang này"
                >
                  <Printer className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    isBookmarked
                      ? "text-[#DA251C] bg-red-50"
                      : "text-gray-600 hover:text-[#DA251C] hover:bg-gray-100"
                  }`}
                  title={isBookmarked ? "Đã lưu bài viết" : "Lưu bài viết"}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            {/* Thông báo cập nhật nội dung thật */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6 text-[13.5px] text-amber-900">
              <p className="font-bold flex items-center gap-1.5 text-amber-800 mb-1">
                <Sparkles className="w-4 h-4" /> Ghi chú nội dung quản trị:
              </p>
              <p>
                Dữ liệu dưới đây hiển thị khung phân công nhiệm vụ của Ban Giám đốc Phân hiệu tại TP. Đà Nẵng. <em>(Cần cập nhật danh sách ảnh đại diện và hồ sơ nhân sự thực tế từ đơn vị tổ chức cán bộ của Phân hiệu).</em>
              </p>
            </div>

            {/* 4. Nội dung bài viết: Cơ cấu Ban Giám đốc Phân hiệu */}
            <div className={`space-y-6 ${fontSize === "large" ? "text-lg" : "text-base"}`}>
              {/* Giám đốc Phân hiệu */}
              <div className="bg-white border-2 border-[#1E2A5E]/20 rounded-lg p-5 sm:p-6 shadow-xs hover:border-[#1E2A5E] transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                  <div>
                    <span className="text-[12px] font-bold text-[#DA251C] uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded">
                      Lãnh đạo phụ trách chung
                    </span>
                    <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1E2A5E] mt-1.5">
                      Giám đốc Phân hiệu Học viện tại TP. Đà Nẵng
                    </h2>
                  </div>
                </div>
                <div className="text-[14px] text-gray-700 space-y-2">
                  <p>
                    <strong>Nhiệm vụ, quyền hạn:</strong> Lãnh đạo, quản lý và điều hành toàn diện mọi hoạt động của Phân hiệu theo quy chế tổ chức và hoạt động của Học viện Hành chính và Quản trị công.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[13.5px]">
                    <li>Trực tiếp phụ trách công tác chiến lược phát triển, quy hoạch, kế hoạch dài hạn của Phân hiệu.</li>
                    <li>Phụ trách công tác tổ chức cán bộ, bảo vệ chính trị nội bộ, tài chính - tài sản công.</li>
                    <li>Chỉ đạo công tác đối ngoại và liên kết hợp tác với các Tỉnh ủy, UBND các tỉnh, thành phố khu vực miền Trung - Tây Nguyên.</li>
                  </ul>
                </div>
              </div>

              {/* Phó Giám đốc 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-xs hover:border-[#DA251C] transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                  <div>
                    <span className="text-[12px] font-bold text-[#1E2A5E] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                      Lãnh đạo phụ trách chuyên môn
                    </span>
                    <h2 className="text-[17px] sm:text-[19px] font-bold text-[#1E2A5E] mt-1.5">
                      Phó Giám đốc Phân hiệu (Phụ trách Đào tạo, Bồi dưỡng & Khoa học)
                    </h2>
                  </div>
                </div>
                <div className="text-[14px] text-gray-700 space-y-2">
                  <p>
                    <strong>Nhiệm vụ, quyền hạn:</strong> Giúp Giám đốc Phân hiệu chỉ đạo, điều hành các lĩnh vực công tác chuyên môn học thuật:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[13.5px]">
                    <li>Phụ trách công tác tuyển sinh và quản lý đào tạo đại học, đào tạo thạc sĩ tại Phân hiệu.</li>
                    <li>Chỉ đạo công tác tổ chức các lớp bồi dưỡng cán bộ, công chức, viên chức ngạch chuyên viên, chuyên viên chính và lãnh đạo quản lý.</li>
                    <li>Phụ trách hoạt động nghiên cứu khoa học, đề tài dự án và tổ chức các hội thảo, tọa đàm khoa học.</li>
                  </ul>
                </div>
              </div>

              {/* Phó Giám đốc 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-xs hover:border-[#DA251C] transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                  <div>
                    <span className="text-[12px] font-bold text-[#1E2A5E] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                      Lãnh đạo phụ trách cơ sở vật chất & công tác học viên
                    </span>
                    <h2 className="text-[17px] sm:text-[19px] font-bold text-[#1E2A5E] mt-1.5">
                      Phó Giám đốc Phân hiệu (Phụ trách Cơ sở vật chất & Hậu cần)
                    </h2>
                  </div>
                </div>
                <div className="text-[14px] text-gray-700 space-y-2">
                  <p>
                    <strong>Nhiệm vụ, quyền hạn:</strong> Giúp Giám đốc Phân hiệu quản trị hạ tầng, cơ sở vật chất và công tác chính trị học viên:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[13.5px]">
                    <li>Quản lý cơ sở vật chất, giảng đường, ký túc xá tại 749 đường Trần Hưng Đạo, Điện Bàn Đông, Đà Nẵng.</li>
                    <li>Phụ trách ứng dụng công nghệ thông tin, thư viện số và công tác an ninh trật tự, phòng cháy chữa cháy.</li>
                    <li>Phụ trách công tác quản lý người học, chế độ chính sách học viên và phối hợp với các đoàn thể quần chúng.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Thanh Điều Hướng & Chia sẻ cuối bài */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-4 bg-gray-50 border border-gray-200 rounded-xs mt-8 mb-8">
              <Link
                href="/gioi-thieu/gioi-thieu-chung"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E2A5E] hover:text-[#DA251C] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại Giới thiệu chung</span>
              </Link>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span className="font-semibold text-gray-700">Chia sẻ:</span>
                <a
                  href="mailto:?subject=Ban%20Giám%20đốc%20Phân%20hiệu%20Đà%20Nẵng&body=Xem%20thêm%20tại%20đây"
                  className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-white rounded transition-colors border border-transparent hover:border-gray-200 shadow-2xs"
                  title="Gửi qua Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-[#DA251C] bg-white border border-gray-200 rounded shadow-2xs hover:border-[#DA251C] transition-all cursor-pointer"
                  title="Sao chép đường dẫn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[11px] font-semibold text-emerald-600">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold">Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 6. Phần Ý KIẾN */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-[#1E2A5E]" />
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#1E2A5E]">
                  Ý KIẾN
                </h3>
              </div>

              <form onSubmit={handleSubmitComment} className="flex flex-col gap-2.5">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Chia sẻ ý kiến của bạn về bài viết này..."
                  rows={3}
                  className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-[#DA251C] focus:ring-1 focus:ring-[#DA251C] transition-all outline-none resize-y placeholder-gray-400"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!comment.trim() || isSubmittingComment}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E2A5E] hover:bg-[#DA251C] disabled:bg-gray-300 text-white text-xs sm:text-sm font-bold rounded transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmittingComment ? "Đang gửi..." : "Gửi ý kiến"}</span>
                  </button>
                </div>
              </form>

              {commentList.length > 0 && (
                <div className="mt-4 flex flex-col gap-2.5">
                  {commentList.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-800">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span className="font-bold text-gray-700">Bạn đọc</span>
                        <span>Vừa xong</span>
                      </div>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 7. Phần XEM THÊM */}
            <section className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-4 border-l-4 border-[#DA251C] pl-2.5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 uppercase">
                  Xem thêm
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {relatedNews.map((news) => (
                  <Link
                    key={news.id}
                    href={news.href}
                    className="grid grid-cols-12 gap-3.5 sm:gap-4 items-start group pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <div className="col-span-4 sm:col-span-3 relative aspect-[16/10] bg-gray-100 border border-gray-200 rounded overflow-hidden shrink-0">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="col-span-8 sm:col-span-9 flex flex-col">
                      <h4 className="text-[14.5px] sm:text-[16px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug mb-1">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1.5">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{news.time}</span>
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-gray-600 line-clamp-2 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
