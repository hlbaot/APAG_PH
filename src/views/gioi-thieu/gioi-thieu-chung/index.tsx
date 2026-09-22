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
  ChevronRight,
  Clock,
  MessageSquare,
  Check,
  Send,
} from "lucide-react";
import "@/scss/gioi-thieu/gioi-thieu-chung/gioi-thieu-chung.scss";
import SidebarMenu from "@/components/sidebar-menu";
import { introMenuItems } from "@/data/navigation";


const popularNews = [
  { id: 1, title: "Ban Giám đốc Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng", href: "/gioi-thieu/ban-giam-doc-phan-hieu" },
  { id: 2, title: "Giới thiệu chung về Phân hiệu Học viện tại TP. Đà Nẵng", href: "/gioi-thieu/gioi-thieu-chung" },
  { id: 3, title: "Cơ cấu tổ chức các đơn vị thuộc và trực thuộc Phân hiệu Đà Nẵng", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { id: 4, title: "Những chặng đường phát triển và dấu ấn lịch sử của Phân hiệu", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
  { id: 5, title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
];

const relatedNews = [
  {
    id: 1,
    title: "Phân hiệu Đà Nẵng nâng cao năng lực bồi dưỡng cán bộ miền Trung",
    time: "28/08/2026 10:52",
    image: "/trangChu/slide/20260828105210-897744165165165165165-03a85ffb4d.png",
    excerpt: "Phân hiệu tiếp tục hiện đại hóa cơ sở vật chất và đổi mới phương pháp giảng dạy đáp ứng chuyển đổi số.",
    href: "/tin-tuc/tin-tuc",
  },
  {
    id: 2,
    title: "Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng trong giai đoạn phát triển mới",
    time: "20/08/2026 14:00",
    image: "/trangChu/slide/a9-f769102539.png",
    excerpt: "Tăng cường liên kết đào tạo, nghiên cứu thực tiễn với các cơ quan Đảng và chính quyền các tỉnh miền Trung - Tây Nguyên.",
    href: "/tin-tuc/tin-tuc",
  },
];

export default function GioiThieuChungPage() {
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

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
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* CỘT TRÁI (SIDEBAR) */}
          <aside className="col-span-4 xl:col-span-3 max-[480px]:col-span-12 flex flex-col gap-6">
            {/* Box 1: Khối Menu "GIỚI THIỆU" */}
            <SidebarMenu title="GIỚI THIỆU" items={introMenuItems} />


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
            <div className="bg-[#f0f2f5] px-3 py-2 rounded-xs flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-5">
              <Link href="/" className="bg-[#1E2A5E] text-white p-1 rounded-xs hover:bg-[#DA251C] transition-colors inline-flex items-center justify-center" aria-label="Trang chủ">
                <Home className="w-3.5 h-3.5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/gioi-thieu/gioi-thieu-chung" className="font-bold text-[#DA251C] hover:underline uppercase">
                GIỚI THIỆU
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium truncate">Giới thiệu chung</span>
            </div>

            <h1 className="text-[clamp(16px,1.1rem+0.5vw,22px)] font-bold text-[#1E2A5E] leading-snug mb-4">
              Giới thiệu chung về Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>20/08/2026 - Phân hiệu Đà Nẵng</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 select-none">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isPlayingAudio ? "bg-red-100 text-[#DA251C]" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  title="Nghe đọc bài viết"
                >
                  {isPlayingAudio ? (<><VolumeX className="w-3.5 h-3.5" /><span>Đang đọc...</span></>) : (<><Volume2 className="w-3.5 h-3.5" /><span>Nghe đọc</span></>)}
                </button>
                <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5">
                  <span className="text-[11px] text-gray-500 font-medium">Cỡ chữ:</span>
                  <button type="button" onClick={() => setFontSize("normal")} className={`px-1.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer ${fontSize === "normal" ? "bg-[#1E2A5E] text-white" : "text-gray-700 hover:bg-gray-200"}`}>A</button>
                  <button type="button" onClick={() => setFontSize("large")} className={`px-1.5 py-0.5 rounded text-sm font-bold transition-colors cursor-pointer ${fontSize === "large" ? "bg-[#1E2A5E] text-white" : "text-gray-700 hover:bg-gray-200"}`}>A+</button>
                </div>
                <button type="button" onClick={handlePrint} className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-gray-100 rounded transition-colors cursor-pointer" title="In trang này">
                  <Printer className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => setIsBookmarked(!isBookmarked)} className={`p-1.5 rounded transition-colors cursor-pointer ${isBookmarked ? "text-[#DA251C] bg-red-50" : "text-gray-600 hover:text-[#DA251C] hover:bg-gray-100"}`} title={isBookmarked ? "Đã lưu" : "Lưu"}>
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            {/* Ảnh khuôn viên Phân hiệu */}
            <div className={`transition-all duration-200 ${fontSize === "large" ? "text-lg" : "text-base"}`}>
              <div className="w-full relative aspect-[16/10] bg-white border border-gray-200 rounded overflow-hidden shadow-xs mb-6">
                <Image
                  src="/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png"
                  alt="Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
              <p className="text-center text-xs sm:text-sm text-gray-500 italic mb-6">
                Khuôn viên Phân hiệu Học viện Hành chính và Quản trị công tại số 749 đường Trần Hưng Đạo, phường Điện Bàn Đông, TP. Đà Nẵng
              </p>

              <div className="space-y-5 text-gray-800 leading-relaxed text-justify">
                <p className="font-semibold text-[#1E2A5E] bg-blue-50/60 p-4 border-l-4 border-[#1E2A5E] rounded-r">
                  Phân hiệu Học viện Hành chính và Quản trị công tại TP. Đà Nẵng là đơn vị trực thuộc Học viện Hành chính và Quản trị công (Bộ Nội vụ), thực hiện nhiệm vụ đào tạo nguồn nhân lực trình độ đại học, sau đại học và bồi dưỡng nâng cao chất lượng đội ngũ cán bộ, công chức, viên chức cho các tỉnh, thành phố khu vực miền Trung và Tây Nguyên.
                </p>

                <h2 className="text-lg sm:text-xl font-bold text-[#DA251C] border-b pb-2 uppercase pt-2">
                  1. Chức năng và Nhiệm vụ
                </h2>
                <p>
                  <strong>Chức năng:</strong> Đại diện cho Học viện Hành chính và Quản trị công tổ chức triển khai các hoạt động đào tạo đại học chính quy, liên thông, văn bằng 2; đào tạo trình độ thạc sĩ các chuyên ngành Quản lý công, Luật hiến pháp và luật hành chính; tổ chức các chương trình bồi dưỡng ngạch công chức và chức danh lãnh đạo, quản lý; tiến hành nghiên cứu khoa học phục vụ phát triển kinh tế - xã hội địa phương.
                </p>
                <p>
                  <strong>Địa bàn trọng điểm:</strong> Đảm nhiệm công tác bồi dưỡng và hợp tác đào tạo với các Tỉnh ủy, Thành ủy, UBND các tỉnh, thành phố từ Quảng Bình, Quảng Trị, Thừa Thiên Huế, Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa và các tỉnh Tây Nguyên.
                </p>

                <h2 className="text-lg sm:text-xl font-bold text-[#DA251C] border-b pb-2 uppercase pt-2">
                  2. Giá trị cốt lõi & Phương châm hành động
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-bold text-sm text-[#1E2A5E] mb-1">Chất lượng & Kỷ cương</h4>
                    <p className="text-xs text-gray-600">Đảm bảo chuẩn đầu ra, nghiêm túc trong học tập và rèn luyện đạo đức công vụ.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-bold text-sm text-[#1E2A5E] mb-1">Thực tiễn & Đổi mới</h4>
                    <p className="text-xs text-gray-600">Nội dung bài giảng gắn liền với bài toán quản trị đô thị và cải cách hành chính miền Trung.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-bold text-sm text-[#1E2A5E] mb-1">Đồng hành cùng Địa phương</h4>
                    <p className="text-xs text-gray-600">Hỗ trợ các tỉnh, thành phố nâng cao chỉ số cải cách hành chính (PAR INDEX) và PCI.</p>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#DA251C] border-b pb-2 uppercase pt-2">
                  3. Cơ sở vật chất & Trụ sở Phân hiệu
                </h2>
                <p>
                  Phân hiệu tọa lạc tại <strong>số 749 đường Trần Hưng Đạo, phường Điện Bàn Đông, TP. Đà Nẵng</strong>, được trang bị hệ thống giảng đường khang trang, phòng học thông minh, thư viện số, hội trường đa năng cùng khu ký túc xá tiện nghi phục vụ tốt nhất nhu cầu học tập, sinh hoạt của học viên và sinh viên.
                </p>
              </div>

              {/* Tương tác chia sẻ */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <Share2 className="w-4 h-4 text-[#1E2A5E]" />
                  <span>Chia sẻ bài viết:</span>
                  <button type="button" onClick={handleCopyLink} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold cursor-pointer">
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Link2 className="w-3.5 h-3.5" />}
                    <span>{copied ? "Đã chép link!" : "Sao chép liên kết"}</span>
                  </button>
                </div>
              </div>

              {/* Bình luận */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-base font-bold text-[#1E2A5E] flex items-center gap-2 mb-4">
                  <MessageSquare className="w-4 h-4 text-[#DA251C]" />
                  Ý kiến bạn đọc
                </h3>
                <form onSubmit={handleSubmitComment} className="flex flex-col gap-3">
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Viết ý kiến phản hồi của bạn về bài viết..."
                    className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded focus:border-[#DA251C] focus:outline-none"
                  />
                  <div className="flex justify-end">
                    <button type="submit" disabled={isSubmittingComment || !comment.trim()} className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E2A5E] text-white text-xs font-bold rounded hover:bg-[#DA251C] transition-colors disabled:opacity-50 cursor-pointer">
                      <Send className="w-3.5 h-3.5" />
                      {isSubmittingComment ? "Đang gửi..." : "Gửi ý kiến"}
                    </button>
                  </div>
                </form>
                {commentList.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {commentList.map((c, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded border border-gray-100 text-xs text-gray-700">
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tin liên quan */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-base font-bold text-[#1E2A5E] uppercase border-l-3 border-[#DA251C] pl-2.5 mb-4">
                  Xem thêm
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedNews.map((item) => (
                    <Link key={item.id} href={item.href} className="flex gap-3 group p-2 hover:bg-gray-50 rounded transition-colors border border-gray-100">
                      <div className="w-24 h-16 relative shrink-0 rounded overflow-hidden bg-gray-100">
                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="text-xs font-bold text-[#1E2A5E] group-hover:text-[#DA251C] transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-gray-400 block">{item.time}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
