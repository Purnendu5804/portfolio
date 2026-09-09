export interface BookItem {
  id: string;
  title: string;
  author: string;
  yearRead?: string;
  takeaway: string; // Two-line note on what was taken from the book
  status: string; // "placeholder — replace with real book"
}

export const booksData: BookItem[] = [
  {
    id: 'book-1',
    title: 'placeholder — replace with real book',
    author: 'Author Name — placeholder',
    yearRead: '2026',
    takeaway: 'Placeholder note line 1: Key mental model or system design philosophy.\nPlaceholder note line 2: Practical insight applied to building distributed applications.',
    status: 'placeholder — replace with real book',
  },
  {
    id: 'book-2',
    title: 'placeholder — replace with real book',
    author: 'Author Name — placeholder',
    yearRead: '2026',
    takeaway: 'Placeholder note line 1: Understanding failure modes and defensive engineering.\nPlaceholder note line 2: Designing simpler abstractions that scale reliably.',
    status: 'placeholder — replace with real book',
  },
  {
    id: 'book-3',
    title: 'placeholder — replace with real book',
    author: 'Author Name — placeholder',
    yearRead: '2025',
    takeaway: 'Placeholder note line 1: Perspective on focused work and craft excellence.\nPlaceholder note line 2: Cultivating curiosity and rigorous problem-solving habits.',
    status: 'placeholder — replace with real book',
  },
];
