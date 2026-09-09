export interface BookItem {
  id: string;
  title: string;
  author: string;
  category: string;
  impact: string;
}

export const booksSectionInfo = {
  section: 'Books Read & Insights',
  bio: 'A curated list of books read while transitioning from high-stimulation digital media to active, reflective reading—building focus, literary stamina, and personal insight.',
};

export const booksData: BookItem[] = [
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Philosophical Fiction',
    impact: "A powerful story on purpose, following omens, and the pursuit of one's personal journey.",
  },
  {
    id: 'days-at-the-morisaki-bookshop',
    title: 'Days at the Morisaki Bookshop',
    author: 'Satoshi Yagisawa',
    category: 'Japanese Healing Fiction',
    impact: 'The catalyst for a love of reading; provided comfort, rest, and an introduction to gentle, self-paced literature.',
  },
  {
    id: 'tuesdays-with-morrie',
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom',
    category: 'Memoir / Life Lessons',
    impact: 'A soothing, conversational read on finite time, relationships, and mortality.',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Improvement / Productivity',
    impact: 'Practical insights on building sustainable systems, identity-based habits, and incremental progress.',
  },
  {
    id: 'relentless',
    title: 'Relentless',
    author: 'Tim S. Grover',
    category: 'Performance / Mindset',
    impact: 'An intense look into elite drive, mental toughness, and unrelenting commitment to execution.',
  },
  {
    id: 'white-nights',
    title: 'White Nights',
    author: 'Fyodor Dostoevsky',
    category: '19th-Century Classical Fiction',
    impact: 'An exploration of classic literature highlighting the contrast between modern prose and dense, melancholic internal monologues.',
  },
];
