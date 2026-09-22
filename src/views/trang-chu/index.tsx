"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import "@/scss/trang-chu/trang-chu.scss";
import {
  heroSlidesData,
  activityNewsData,
  daoTaoData,
  nghienCuuKhoaHocData,
  hopTacQuocTeData,
  rightSidebarData,
  congTacDangDoanTheData,
} from "@/data/trang-chu";

const assets = {
  admission: "/trangChu/ThongTinTuyenSinh-599f70999b.png",
  foundation: "/trangChu/baovenentang-8fe67785db.png",
};

function BookWaveIcon({
  width = 23,
  className = "",
  fill = "currentColor",
}: {
  width?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 3050 1450"
      fill={fill}
      aria-hidden="true"
    >
      <g fill={fill}>
        <path d="M1441 1383 c-96 -106 -250 -221 -361 -268 -19 -9 -46 -22 -60 -29 -14 -8 -52 -21 -85 -31 -33 -10 -76 -22 -95 -28 -21 -7 -199 -13 -435 -16 l-400 -6 -3 -79 c-2 -57 1 -82 10 -87 7 -5 152 -9 323 -9 308 0 541 16 587 41 11 6 44 17 75 25 127 33 332 151 447 256 28 26 57 48 63 48 7 0 37 -21 67 -47 77 -68 99 -83 203 -145 146 -86 311 -144 473 -164 138 -17 738 -19 775 -2 23 10 25 16 25 79 0 43 -5 71 -12 76 -7 4 -197 11 -423 14 l-410 6 -95 30 c-120 38 -256 104 -335 164 -22 16 -51 37 -65 47 -13 9 -60 52 -102 95 -52 51 -86 77 -101 77 -14 0 -38 -17 -66 -47z" />
        <path d="M1431 960 c-68 -78 -231 -199 -336 -250 -44 -22 -123 -54 -175 -71 l-95 -32 -390 -4 c-214 -2 -400 -6 -412 -8 -21 -5 -23 -11 -23 -80 0 -48 4 -77 13 -82 6 -4 179 -6 382 -5 377 3 509 13 572 45 15 8 43 18 61 22 84 18 322 158 427 252 31 27 53 39 64 36 9 -4 41 -28 71 -54 53 -45 151 -113 221 -153 87 -50 259 -113 344 -127 33 -5 66 -11 72 -14 7 -2 189 -5 403 -5 292 -1 395 1 405 10 10 9 15 32 15 75 0 54 -3 63 -22 73 -16 8 -154 13 -428 15 l-405 4 -95 32 c-136 46 -283 124 -378 198 -36 29 -151 143 -160 159 -4 8 -24 17 -43 20 -32 4 -38 0 -88 -56z" />
        <path d="M1397 519 c-49 -49 -107 -102 -129 -117 -103 -69 -124 -82 -138 -88 -8 -3 -37 -17 -65 -30 -187 -88 -260 -99 -695 -99 -190 0 -351 -4 -357 -8 -9 -5 -13 -33 -13 -78 l0 -69 418 0 c444 0 467 2 613 52 36 13 72 28 80 34 8 6 29 16 47 22 18 6 46 20 61 32 16 11 32 20 36 20 10 0 92 59 171 122 39 32 77 58 85 58 8 0 42 -23 74 -51 154 -132 378 -244 557 -280 54 -11 866 -13 894 -2 10 4 14 22 14 62 0 87 14 84 -395 86 -375 2 -463 10 -580 51 -121 43 -289 134 -362 197 -39 34 -138 132 -155 155 -34 42 -65 29 -161 -69z" />
      </g>
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="trang-chu-section-heading">
      <BookWaveIcon width={25} className="trang-chu-section-svg" fill="#9ca3af" />
      <h2>{children}</h2>
    </div>
  );
}

const featuredMarqueeNews = [
  {
    title: "Học viện Hành chính và Quản trị công: Đổi mới công tác khảo thí, hướng tới đánh giá thực chất và quản trị bằng dữ liệu",
    href: "/tin-tuc/tin-tuc",
  },
  {
    title: 'Hội thảo khoa học góp ý dự thảo "Sổ tay công tác dành cho cán bộ, công chức chính quyền xã, phường, đặc khu"',
    href: "/tin-tuc/tin-tuc",
  },
];

const marqueeList = [
  ...featuredMarqueeNews,
  ...featuredMarqueeNews,
  ...featuredMarqueeNews,
];

function GoldStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#f59e0b"
      className="trang-chu-ticker-star"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TrangChuPage() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((currentIndex) => (currentIndex + 1) % heroSlidesData.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeHero = heroSlidesData[heroIndex];

  return (
    <div className="trang-chu-page">
      <div className="trang-chu-shell">
        {/* Ticker bar — Chạy mượt liên tục từ phải qua trái không khựng */}
        <div className="trang-chu-ticker" aria-label="Tin nổi bật">
          <div className="trang-chu-ticker-track">
            <div className="trang-chu-ticker-group">
              {marqueeList.map((item, idx) => (
                <Link
                  key={`track1-${idx}`}
                  href={item.href}
                  className="trang-chu-ticker-item"
                >
                  <GoldStarIcon />
                  <span className="trang-chu-ticker-text">{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="trang-chu-ticker-group" aria-hidden="true">
              {marqueeList.map((item, idx) => (
                <Link
                  key={`track2-${idx}`}
                  href={item.href}
                  className="trang-chu-ticker-item"
                  tabIndex={-1}
                >
                  <GoldStarIcon />
                  <span className="trang-chu-ticker-text">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Khối 1: Slider tin nổi bật (ảnh lớn bên trái) + TIN HOẠT ĐỘNG bên phải ── */}
        <div className="trang-chu-top-grid">
          <section className="trang-chu-hero" aria-label="Tin nổi bật">
            <div className="trang-chu-hero-image">
              <Image
                key={activeHero.image}
                src={activeHero.image}
                alt={activeHero.alt}
                fill
                priority={heroIndex === 0}
                sizes="(max-width: 900px) 100vw, 66vw"
              />
              <button
                className="trang-chu-carousel-button left"
                aria-label="Tin trước"
                onClick={() =>
                  setHeroIndex((heroIndex - 1 + heroSlidesData.length) % heroSlidesData.length)
                }
              >
                <ChevronLeft size={19} />
              </button>
              <button
                className="trang-chu-carousel-button right"
                aria-label="Tin tiếp theo"
                onClick={() => setHeroIndex((heroIndex + 1) % heroSlidesData.length)}
              >
                <ChevronRight size={19} />
              </button>
              <div className="trang-chu-carousel-dots" aria-label="Chọn tin nổi bật">
                {heroSlidesData.map((slide, index) => (
                  <button
                    key={slide.image}
                    className={index === heroIndex ? "active" : ""}
                    aria-label={`Chuyển đến tin ${index + 1}`}
                    aria-current={index === heroIndex ? "true" : undefined}
                    onClick={() => setHeroIndex(index)}
                  />
                ))}
              </div>
            </div>
            <p className="trang-chu-hero-caption">{activeHero.title}</p>
          </section>

          <aside className="trang-chu-activity">
            <div className="trang-chu-activity-title">
              <BookWaveIcon width={27} className="trang-chu-activity-title-icon" fill="#ffffff" />
              <span>TIN HOẠT ĐỘNG</span>
            </div>
            <div className="trang-chu-activity-list">
              {activityNewsData.map((item, index) => (
                <Link href="/tin-tuc/tin-tuc" key={index} className="trang-chu-activity-item">
                  {item}
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* ── Khối 2: 2 banner ngang (hiển thị trọn vẹn không cắt góc) ── */}
        <div className="trang-chu-banner-row">
          <Link href="/tin-tuc/tuyen-truyen-phap-luat" className="block">
            <Image
              src={assets.foundation}
              alt="Cuộc thi chính luận bảo vệ nền tảng tư tưởng của Đảng"
              width={640}
              height={89}
              className="w-full h-auto object-contain hover:opacity-95 transition-opacity"
            />
          </Link>
          <Link href="/dao-tao&boi-duong/dao-tao-dai-hoc" className="block">
            <Image
              src={assets.admission}
              alt="Thông tin tuyển sinh, đào tạo bồi dưỡng"
              width={636}
              height={88}
              className="w-full h-auto object-contain hover:opacity-95 transition-opacity"
            />
          </Link>
        </div>

        {/* ── Khối 3: ĐÀO TẠO (2 cột: ĐH, ThS) ── */}
        <div className="trang-chu-dao-tao-section">
          <SectionHeading>ĐÀO TẠO</SectionHeading>
          <div className="trang-chu-dao-tao-grid">
            {/* 1. Đào tạo đại học */}
            <section className="trang-chu-dao-tao-col">
              <div className="trang-chu-dao-tao-col-header">
                <Link href={daoTaoData.daiHoc.href}>
                  <h3>{daoTaoData.daiHoc.title}</h3>
                </Link>
                <div className="trang-chu-dao-tao-line" aria-hidden="true" />
              </div>

              {/* Tin tiêu điểm cố định ở trên */}
              <div className="trang-chu-dao-tao-lead">
                <div className="trang-chu-dao-tao-thumb">
                  <Image
                    src={daoTaoData.daiHoc.featured.image}
                    alt={daoTaoData.daiHoc.featured.title}
                    width={220}
                    height={135}
                  />
                </div>
                <Link
                  href={daoTaoData.daiHoc.featured.href}
                  className="trang-chu-dao-tao-lead-title"
                >
                  {daoTaoData.daiHoc.featured.title}
                </Link>
              </div>

              {/* Chỉ có danh sách tin tức bên dưới được scroll */}
              <div className="trang-chu-dao-tao-scroll-area">
                <ul className="trang-chu-dao-tao-bullets">
                  {daoTaoData.daiHoc.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="trang-chu-bullet-dot" aria-hidden="true">•</span>
                      <Link href={bullet.href} className="trang-chu-bullet-link">
                        {bullet.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 2. Đào tạo thạc sĩ */}
            <section className="trang-chu-dao-tao-col">
              <div className="trang-chu-dao-tao-col-header">
                <Link href={daoTaoData.thacSi.href}>
                  <h3>{daoTaoData.thacSi.title}</h3>
                </Link>
                <div className="trang-chu-dao-tao-line" aria-hidden="true" />
              </div>

              {/* Tin tiêu điểm cố định ở trên */}
              <div className="trang-chu-dao-tao-lead">
                <div className="trang-chu-dao-tao-thumb">
                  <Image
                    src={daoTaoData.thacSi.featured.image}
                    alt={daoTaoData.thacSi.featured.title}
                    width={220}
                    height={135}
                  />
                </div>
                <Link
                  href={daoTaoData.thacSi.featured.href}
                  className="trang-chu-dao-tao-lead-title"
                >
                  {daoTaoData.thacSi.featured.title}
                </Link>
              </div>

              {/* Chỉ có danh sách tin tức bên dưới được scroll */}
              <div className="trang-chu-dao-tao-scroll-area">
                <ul className="trang-chu-dao-tao-bullets">
                  {daoTaoData.thacSi.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="trang-chu-bullet-dot" aria-hidden="true">•</span>
                      <Link href={bullet.href} className="trang-chu-bullet-link">
                        {bullet.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* ── Khối 4: NGHIÊN CỨU KHOA HỌC & HỢP TÁC QUỐC TẾ + CỘT PHẢI (VIDEO + BANNER) ── */}
        <div className="trang-chu-scientific-row">
          {/* Cột trái (chính): 2 khối Nghiên cứu khoa học & Hợp tác quốc tế */}
          <div className="trang-chu-scientific-main">
            {/* 1. Mục NGHIÊN CỨU KHOA HỌC */}
            <section className="trang-chu-scientific-block">
              <div className="trang-chu-section-heading">
                <BookWaveIcon width={25} className="trang-chu-section-svg" fill="#9ca3af" />
                <h2>{nghienCuuKhoaHocData.title}</h2>
              </div>

              <div className="trang-chu-scientific-grid">
                {/* Cột trái tin nổi bật */}
                <article className="trang-chu-scientific-featured">
                  <Link href={nghienCuuKhoaHocData.featured.href} className="trang-chu-sci-img-link">
                    <Image
                      src={nghienCuuKhoaHocData.featured.image}
                      alt={nghienCuuKhoaHocData.featured.title}
                      width={540}
                      height={320}
                      className="trang-chu-sci-img"
                    />
                  </Link>
                  <Link href={nghienCuuKhoaHocData.featured.href} className="trang-chu-sci-title-link">
                    <h3>{nghienCuuKhoaHocData.featured.title}</h3>
                  </Link>
                  <div className="trang-chu-sci-meta">
                    <Clock3 size={13} className="trang-chu-sci-clock" />
                    <span>{nghienCuuKhoaHocData.featured.time}</span>
                  </div>
                  <p className="trang-chu-sci-summary">{nghienCuuKhoaHocData.featured.summary}</p>
                </article>

                {/* Cột phải 3 tin phụ + Xem thêm */}
                <div className="trang-chu-scientific-sub">
                  <div className="trang-chu-sci-sublist">
                    {nghienCuuKhoaHocData.subNews.map((item, idx) => (
                      <article key={idx} className="trang-chu-sci-subitem">
                        <Link href={item.href} className="trang-chu-sci-subthumb">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={160}
                            height={105}
                            className="trang-chu-sci-subimg"
                          />
                        </Link>
                        <Link href={item.href} className="trang-chu-sci-subtitle">
                          <h4>{item.title}</h4>
                        </Link>
                      </article>
                    ))}
                  </div>
                  <div className="trang-chu-sci-more-wrap">
                    <Link href={nghienCuuKhoaHocData.href} className="trang-chu-sci-more-link">
                      Xem thêm &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Mục HỢP TÁC QUỐC TẾ */}
            <section className="trang-chu-scientific-block">
              <div className="trang-chu-section-heading">
                <BookWaveIcon width={25} className="trang-chu-section-svg" fill="#9ca3af" />
                <h2>{hopTacQuocTeData.title}</h2>
              </div>

              <div className="trang-chu-scientific-grid">
                {/* Cột trái tin nổi bật */}
                <article className="trang-chu-scientific-featured">
                  <Link href={hopTacQuocTeData.featured.href} className="trang-chu-sci-img-link">
                    <Image
                      src={hopTacQuocTeData.featured.image}
                      alt={hopTacQuocTeData.featured.title}
                      width={540}
                      height={320}
                      className="trang-chu-sci-img"
                    />
                  </Link>
                  <Link href={hopTacQuocTeData.featured.href} className="trang-chu-sci-title-link">
                    <h3>{hopTacQuocTeData.featured.title}</h3>
                  </Link>
                  <div className="trang-chu-sci-meta">
                    <Clock3 size={13} className="trang-chu-sci-clock" />
                    <span>{hopTacQuocTeData.featured.time}</span>
                  </div>
                  <p className="trang-chu-sci-summary">{hopTacQuocTeData.featured.summary}</p>
                </article>

                {/* Cột phải 3 tin phụ + Xem thêm */}
                <div className="trang-chu-scientific-sub">
                  <div className="trang-chu-sci-sublist">
                    {hopTacQuocTeData.subNews.map((item, idx) => (
                      <article key={idx} className="trang-chu-sci-subitem">
                        <Link href={item.href} className="trang-chu-sci-subthumb">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={160}
                            height={105}
                            className="trang-chu-sci-subimg"
                          />
                        </Link>
                        <Link href={item.href} className="trang-chu-sci-subtitle">
                          <h4>{item.title}</h4>
                        </Link>
                      </article>
                    ))}
                  </div>
                  <div className="trang-chu-sci-more-wrap">
                    <Link href={hopTacQuocTeData.href} className="trang-chu-sci-more-link">
                      Xem thêm &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Cột phải: Video + Dải banner dọc */}
          <aside className="trang-chu-scientific-sidebar hide-on-mobile">
            <div className="trang-chu-sidebar-video-card">
              <div className="trang-chu-video-inner">
                <Image
                  src={rightSidebarData.video.thumb}
                  alt={rightSidebarData.video.title}
                  width={350}
                  height={195}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="trang-chu-sidebar-banners">
              {rightSidebarData.banners.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="trang-chu-sidebar-banner-item"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={350}
                    height={90}
                    className="w-full h-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* ── Khối 5: CÔNG TÁC ĐẢNG - ĐOÀN THỂ ── */}
        <section className="trang-chu-dang-section">
          <div className="trang-chu-section-heading">
            <BookWaveIcon width={25} className="trang-chu-section-svg" fill="#9ca3af" />
            <h2>{congTacDangDoanTheData.title}</h2>
          </div>

          {/* Tin nổi bật lớn: Cột trái ảnh lớn, cột phải tiêu đề & tóm tắt */}
          <div className="trang-chu-dang-featured">
            <Link href={congTacDangDoanTheData.featured.href} className="trang-chu-dang-featured-img">
              <Image
                src={congTacDangDoanTheData.featured.image}
                alt={congTacDangDoanTheData.featured.title}
                width={560}
                height={370}
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="trang-chu-dang-featured-info">
              <Link href={congTacDangDoanTheData.featured.href} className="trang-chu-dang-featured-title">
                <h3>{congTacDangDoanTheData.featured.title}</h3>
              </Link>
              <div className="trang-chu-sci-meta">
                <Clock3 size={13} className="trang-chu-sci-clock" />
                <span>{congTacDangDoanTheData.featured.time}</span>
              </div>
              <p className="trang-chu-dang-featured-summary">{congTacDangDoanTheData.featured.summary}</p>
            </div>
          </div>

          {/* 4 tin bên dưới dạng lưới 2 cột x 2 dòng */}
          <div className="trang-chu-dang-grid">
            {congTacDangDoanTheData.subNews.map((item, idx) => (
              <article key={idx} className="trang-chu-dang-item">
                <Link href={item.href} className="trang-chu-dang-thumb">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={115}
                    height={75}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <Link href={item.href} className="trang-chu-dang-item-title">
                  <h4>{item.title}</h4>
                </Link>
              </article>
            ))}
          </div>

          {/* Xem thêm >> */}
          <div className="trang-chu-sci-more-wrap">
            <Link href={congTacDangDoanTheData.href} className="trang-chu-sci-more-link">
              Xem thêm &gt;&gt;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

