import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getPublishedBooks } from '@/lib/books';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/books'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function BooksPage() {
  const books = getPublishedBooks();

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Books
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Books I&apos;m reading — with one-line takeaways.
          </p>
        </div>
        <Separator />

        <div className="grid gap-4 md:grid-cols-2">
          {books.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`}>
              <Card className="h-full p-6 transition-colors hover:bg-muted/50">
                <h2 className="text-xl font-semibold">
                  {book.frontmatter.title}
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  {book.frontmatter.author}
                </p>
                <p className="mt-3 text-sm">{book.frontmatter.takeaway}</p>
              </Card>
            </Link>
          ))}
        </div>

        {books.length === 0 && (
          <p className="text-muted-foreground text-center">
            No books yet — check back later.
          </p>
        )}
      </div>
    </Container>
  );
}
