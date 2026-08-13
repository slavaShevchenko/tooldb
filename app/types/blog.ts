export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  image?: string
  published: boolean
  publishedAt: string
  updatedAt: string
  content: string[]
}

export type BlogPostData = Omit<BlogPost, 'id'>
