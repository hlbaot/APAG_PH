// ─── Article & Related Data Types ─────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface ContentSection {
  id: string;
  order: number;
  heading?: string;
  body: string | string[]; // Có thể là chuỗi hoặc mảng các đoạn văn
  imageUrl?: string;
  imageCaption?: string;
  imageAlt?: string;
  quote?: string;
  quoteAuthor?: string;
}

export interface Attachment {
  id: string;
  title: string;
  fileUrl: string;
  fileSize?: string;
  fileType?: "pdf" | "docx" | "xlsx" | "zip" | string;
}

export interface CommentItem {
  id: string;
  userName: string;
  userEmail?: string;
  content: string;
  createdAt: string;
}

export interface RelatedArticle {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  categoryName?: string;
  excerpt?: string;
  href?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  sapo: string; // Đoạn tóm tắt mở đầu
  thumbnail: string;
  thumbnailAlt?: string;
  authorName: string;
  authorRole?: string; // Đơn vị công tác / Chức danh
  publishedAt: string;
  views?: number;
  category: Category;
  contentSections: ContentSection[];
  attachments?: Attachment[];
  comments?: CommentItem[];
  relatedArticles?: RelatedArticle[];
}
