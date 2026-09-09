import { BlogComponents } from '@/components/blog/BlogComponents';
import Container from '@/components/common/Container';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/Meta';
import { getBookBySlug, getBookSlugs } from '@/lib/books';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

interface BookPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getBookSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book || !book.frontmatter.isPublished) {
    return { title: 'Book Not Found' };
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${book.frontmatter.title} - Books`,
    description: book.frontmatter.takeaway,
  };
}

export default async function BookDetailPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book || !book.frontmatter.isPublished) {
    notFound();
  }

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div>
          <Button variant="ghost" asChild>
            <Link href="/books" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Books</span>
            </Link>
          </Button>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">{book.frontmatter.title}</h1>
          <p className="text-muted-foreground">{book.frontmatter.author}</p>
          <p className="mx-auto max-w-2xl">{book.frontmatter.takeaway}</p>
        </div>

        <Separator />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={book.content} components={BlogComponents} />
        </div>
      </div>
    </Container>
  );
}
