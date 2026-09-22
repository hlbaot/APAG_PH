"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  Volume2,
  VolumeX,
  Bookmark,
  Share2,
  Link2,
  Clock,
  MessageSquare,
  Check,
  Send,
  Download,
  FileText,
  Eye,
  Quote,
  User,
} from "lucide-react";
import { Article, CommentItem } from "@/types/article";
import SidebarMenu from "@/components/sidebar-menu";
import { newsMenuItems } from "@/data/navigation";

interface ArticleDetailProps {
  article: Article;
  sidebarTitle?: string;
}

const popularNews = [
  {
    id: 1,
    title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026",
    href: "/bai-viet/tap-huan-ky-nang-xay-dung-chinh-quyen-so-cap-xa",
  },
  {
    id: 2,
    title: "Hội thảo khoa học: “Chuyển đổi số trong quản trị công và cải cách thủ tục hành chính”",
    href: "/bai-viet/chuyen-doi-so-trong-quan-tri-cong-va-cai-cach-thu-tuc-hanh-chinh-2026",
  },
  {
    id: 3,
    title: "Tọa đàm quốc tế: “Nâng cao năng lực lãnh đạo đa văn hóa và hội nhập quốc tế cho cán bộ trẻ”",
    href: "/bai-viet/toa-dam-nang-cao-nang-luc-lanh-dao-toan-cau",
  },
  {
    id: 4,
    title: "Đổi mới công tác khảo thí và kiểm định chất lượng: Hướng tới đánh giá thực chất",
    href: "/bai-viet/doi-moi-phuong-phap-khao-thi-danh-gia-thuc-chat",
  },
  {
    id: 5,
    title: "Khai giảng lớp bồi dưỡng kỹ năng ứng dụng công nghệ và xây dựng chính quyền số",
    href: "/bai-viet/tap-huan-ky-nang-xay-dung-chinh-quyen-so-cap-xa",
  },
];

export default function ArticleDetail({
  article,
  sidebarTitle = "TIN TỨC",
}: ArticleDetailProps) {
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Comment state
  const [commentName, setCommentName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState<CommentItem[]>(article.comments || []);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);

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
    if (!commentName.trim() || !commentContent.trim()) return;

    setIsSubmittingComment(true);
    setTimeout(() => {
      const now = new Date();
      const dateStr = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")} ${now.getDate().toString().padStart(2, "0")}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getFullYear()}`;

      const newComment: CommentItem = {
        id: `c-user-${Date.now()}`,
        userName: commentName.trim(),
        content: commentContent.trim(),
        createdAt: dateStr,
      };

      setComments((prev) => [newComment, ...prev]);
      setCommentName("");
      setCommentContent("");
      setIsSubmittingComment(false);
      setCommentSuccess(true);
      setTimeout(() => setCommentSuccess(false), 4000);
    }, 400);
  };

  return (
    <div className="w-full bg-[#fdfdfd] py-5 sm:py-7">
      <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ── CỘT TRÁI (SIDEBAR) ── */}
          <aside className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
            {/* Box 1: Menu danh mục */}
            <SidebarMenu title={sidebarTitle} items={newsMenuItems} />

            {/* Box 2: Tin đọc nhiều */}
            <div className="bg-white border border-gray-200 rounded shadow-xs overflow-hidden">
              <div className="bg-[#1E2A5E] text-white px-4 py-3">
                <h3 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#DA251C]" />
                  TIN ĐỌC NHIỀU
                </h3>
              </div>
              <div className="divide-y divide-gray-100 p-2">
                {popularNews.map((news, idx) => (
                  <Link
                    key={news.id}
                    href={news.href}
                    className="flex items-start gap-2.5 py-2.5 px-2 rounded hover:bg-gray-50 group transition-colors"
                  >
                    <span className="w-5 h-5 rounded bg-gray-100 group-hover:bg-[#DA251C] text-gray-500 group-hover:text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      {idx + 1}
                    </span>
                    <p className="text-[13px] font-semibold text-gray-800 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-2">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* ── CỘT PHẢI (MAIN ARTICLE CONTENT) ── */}
          <main className="col-span-12 lg:col-span-8 xl:col-span-9 bg-white border border-gray-200 rounded shadow-xs p-4 sm:p-6 md:p-8 order-1 lg:order-2">
            {/* 1. BREADCRUMB */}
            <nav
              aria-label="Breadcrumb"
              className="bg-[#f0f2f5] px-3 py-2 rounded flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mb-5"
            >
              <Link
                href="/"
                className="bg-[#1E2A5E] text-white p-1 rounded hover:bg-[#DA251C] transition-colors inline-flex items-center justify-center shrink-0"
                aria-label="Trang chủ"
              >
                <Home className="w-3.5 h-3.5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href={`/${article.category.slug}`}
                className="font-bold text-[#DA251C] hover:underline uppercase shrink-0"
              >
                {article.category.name}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium truncate max-w-[200px] sm:max-w-md lg:max-w-lg">
                {article.title}
              </span>
            </nav>

            {/* 2. TIÊU ĐỀ BÀI VIẾT */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2A5E] leading-snug mb-4">
              {article.title}
            </h1>

            {/* 3. THANH META & CÔNG CỤ TƯƠNG TÁC */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              {/* Ngày đăng, tác giả, lượt xem */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{article.publishedAt}</span>
                </div>
                {article.authorName && (
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="font-semibold text-gray-700">
                      {article.authorName}
                    </span>
                  </div>
                )}
                {typeof article.views === "number" && (
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <Eye className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{article.views} lượt xem</span>
                  </div>
                )}
              </div>

              {/* Nhóm công cụ: Đọc audio, Cỡ chữ, In, Bookmark */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 select-none">
                {/* Nút nghe đọc bài viết */}
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
                      <span className="hidden sm:inline">Nghe đọc</span>
                    </>
                  )}
                </button>

                {/* Chọn cỡ chữ */}
                <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5">
                  <span className="text-[11px] text-gray-500 font-medium">Cỡ chữ:</span>
                  <button
                    type="button"
                    onClick={() => setFontSize("normal")}
                    className={`px-1.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                      fontSize === "normal"
                        ? "bg-[#1E2A5E] text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    A
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize("large")}
                    className={`px-1.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                      fontSize === "large"
                        ? "bg-[#1E2A5E] text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    A+
                  </button>
                </div>

                {/* Nút In */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-gray-100 rounded transition-colors cursor-pointer"
                  title="In bài viết"
                >
                  <Printer className="w-4 h-4" />
                </button>

                {/* Nút Bookmark */}
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

            {/* 4. NỘI DUNG CHÍNH (BODY CONTENT) */}
            <div
              className={`transition-all duration-200 ${
                fontSize === "large" ? "text-[17px] sm:text-[18px]" : "text-[15px] sm:text-[15.5px]"
              }`}
            >
              {/* Đoạn Sapo mở đầu */}
              {article.sapo && (
                <div className="font-semibold text-[#1E2A5E] bg-blue-50/70 p-4 border-l-4 border-[#1E2A5E] rounded-r text-justify leading-relaxed mb-6">
                  {article.sapo}
                </div>
              )}

              {/* Các phân đoạn bài viết (ContentSections) */}
              <div className="space-y-6 text-gray-800 leading-relaxed">
                {article.contentSections.map((section) => (
                  <div key={section.id} className="space-y-4">
                    {/* Tiêu đề mục con */}
                    {section.heading && (
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#DA251C] border-b border-gray-100 pb-1.5 pt-2">
                        {section.heading}
                      </h2>
                    )}

                    {/* Đoạn văn bản */}
                    {Array.isArray(section.body) ? (
                      section.body.map((p, pIdx) => (
                        <p key={pIdx} className="text-justify leading-relaxed">
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="text-justify leading-relaxed">{section.body}</p>
                    )}

                    {/* Trích dẫn phát biểu (Quote callout) */}
                    {section.quote && (
                      <div className="my-5 p-4 sm:p-5 bg-gradient-to-r from-red-50 to-orange-50/30 border-l-4 border-[#DA251C] rounded-r relative">
                        <Quote className="w-8 h-8 text-[#DA251C]/20 absolute top-2 right-3" />
                        <blockquote className="italic font-medium text-gray-800 text-[15px] sm:text-[16px] mb-2 leading-relaxed">
                          “{section.quote}”
                        </blockquote>
                        {section.quoteAuthor && (
                          <div className="text-right text-xs sm:text-sm font-bold text-[#1E2A5E]">
                            — {section.quoteAuthor}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Ảnh minh họa xen kẽ + Caption */}
                    {section.imageUrl && (
                      <figure className="my-6">
                        <div className="w-full relative aspect-[16/10] bg-gray-100 border border-gray-200 rounded overflow-hidden shadow-xs">
                          <Image
                            src={section.imageUrl}
                            alt={section.imageAlt || section.imageCaption || article.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 880px"
                          />
                        </div>
                        {section.imageCaption && (
                          <figcaption className="text-center text-xs sm:text-sm text-gray-600 italic mt-2.5 px-2">
                            {section.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ))}
              </div>

              {/* Khối Tệp đính kèm (Attachments) */}
              {article.attachments && article.attachments.length > 0 && (
                <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
                  <h3 className="text-sm font-bold text-[#1E2A5E] flex items-center gap-2 mb-3 uppercase tracking-wide">
                    <FileText className="w-4 h-4 text-[#DA251C]" />
                    Nội dung trong tệp đính kèm
                  </h3>
                  <div className="space-y-2">
                    {article.attachments.map((att) => (
                      <div
                        key={att.id}
                        className="flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded hover:border-[#DA251C] transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span className="w-7 h-7 rounded bg-red-100 text-[#DA251C] text-[10px] font-bold uppercase flex items-center justify-center shrink-0">
                            {att.fileType || "PDF"}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
                            {att.title}
                          </span>
                          {att.fileSize && (
                            <span className="text-[11px] text-gray-400 shrink-0">
                              ({att.fileSize})
                            </span>
                          )}
                        </div>
                        <a
                          href={att.fileUrl}
                          download
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1E2A5E] hover:bg-[#DA251C] text-white text-xs font-bold rounded transition-colors shrink-0 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Tải về</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tác giả ký cuối bài viết */}
              <div className="mt-6 text-right">
                <p className="font-bold text-[#1E2A5E] text-sm sm:text-base">
                  {article.authorName}
                </p>
                {article.authorRole && (
                  <p className="text-xs text-gray-500 italic">{article.authorRole}</p>
                )}
              </div>
            </div>

            {/* 5. KHỐI CHIA SẺ MẠNG XÃ HỘI */}
            <div className="mt-8 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-600 font-medium">
                <Share2 className="w-4 h-4 text-[#1E2A5E]" />
                <span>Chia sẻ bài viết:</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold cursor-pointer transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  ) : (
                    <Link2 className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? "Đã chép link!" : "Sao chép liên kết"}</span>
                </button>
              </div>
            </div>

            {/* 6. KHỐI BÌNH LUẬN / Ý KIẾN BẠN ĐỌC */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-base font-bold text-[#1E2A5E] flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-[#DA251C]" />
                Ý kiến bạn đọc ({comments.length})
              </h3>

              {/* Form gửi ý kiến */}
              <form onSubmit={handleSubmitComment} className="flex flex-col gap-3 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn *"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full text-xs sm:text-sm p-2.5 border border-gray-300 rounded focus:border-[#DA251C] focus:outline-none"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  placeholder="Viết ý kiến phản hồi của bạn về bài viết này..."
                  className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded focus:border-[#DA251C] focus:outline-none"
                />
                <div className="flex items-center justify-between">
                  {commentSuccess ? (
                    <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Gửi ý kiến thành công!
                    </span>
                  ) : (
                    <span className="text-[11px] text-gray-400 italic">
                      Ý kiến sẽ được hiển thị ngay sau khi gửi.
                    </span>
                  )}
                  <button
                    type="submit"
                    disabled={
                      isSubmittingComment ||
                      !commentName.trim() ||
                      !commentContent.trim()
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E2A5E] text-white text-xs font-bold rounded hover:bg-[#DA251C] transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSubmittingComment ? "Đang gửi..." : "Gửi ý kiến"}
                  </button>
                </div>
              </form>

              {/* Danh sách bình luận */}
              {comments.length > 0 && (
                <div className="space-y-3">
                  {comments.map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 bg-gray-50 rounded border border-gray-100 space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#1E2A5E]">{c.userName}</span>
                        <span className="text-gray-400">{c.createdAt}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {c.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 7. KHỐI BÀI VIẾT LIÊN QUAN (XEM THÊM) */}
            {article.relatedArticles && article.relatedArticles.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-base font-bold text-[#1E2A5E] uppercase border-l-4 border-[#DA251C] pl-2.5 mb-5">
                  Xem thêm
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {article.relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={rel.href || `/bai-viet/${rel.slug}`}
                      className="flex flex-col group p-2.5 hover:bg-gray-50 rounded transition-all border border-gray-100 hover:border-gray-200 shadow-2xs hover:shadow-xs"
                    >
                      <div className="w-full relative aspect-[16/10] rounded overflow-hidden bg-gray-100 mb-2.5">
                        <Image
                          src={rel.thumbnail}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#1E2A5E] group-hover:text-[#DA251C] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 pt-1">
                          <Clock className="w-3 h-3" />
                          <span>{rel.publishedAt}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
