export interface BookFrontmatter {
  title: string;
  author: string;
  takeaway: string;
  isPublished: boolean;
}

export interface Book {
  slug: string;
  frontmatter: BookFrontmatter;
  content: string;
}

export interface BookPreview {
  slug: string;
  frontmatter: BookFrontmatter;
}
