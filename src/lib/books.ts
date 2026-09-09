import { Book, BookPreview } from '@/types/book';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const booksDirectory = path.join(process.cwd(), 'src/data/books');

export function getBookSlugs(): string[] {
  if (!fs.existsSync(booksDirectory)) {
    return [];
  }

  const files = fs.readdirSync(booksDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getBookBySlug(slug: string): Book | null {
  try {
    const fullPath = path.join(booksDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as Book['frontmatter'];
    if (!frontmatter.title) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading book ${slug}:`, error);
    return null;
  }
}

export function getAllBooks(): BookPreview[] {
  const slugs = getBookSlugs();

  const books = slugs
    .map((slug) => {
      const book = getBookBySlug(slug);
      if (!book) return null;

      return {
        slug: book.slug,
        frontmatter: book.frontmatter,
      };
    })
    .filter((book): book is BookPreview => book !== null)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

  return books;
}

export function getPublishedBooks(): BookPreview[] {
  return getAllBooks().filter((book) => book.frontmatter.isPublished);
}
