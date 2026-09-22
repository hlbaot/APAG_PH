import ArticleDetail from "@/components/article-detail";
import { getArticleBySlug, mockArticles } from "@/data/articles";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug) || mockArticles[0];

  return {
    title: `${article.title} - Học viện Hành chính và Quản trị công`,
    description: article.sapo,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug) || mockArticles[0];

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
