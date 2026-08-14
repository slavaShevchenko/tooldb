import { blogPosts } from '~/data/blog'
import type { BlogPost } from '~/types/blog'

export const useBlog = () => {
  const getBlogPosts = (limit?: number): BlogPost[] => {
    const posts = blogPosts
      .filter(post => post.published)
      .sort((first, second) => Number(first.id) - Number(second.id))

    return limit ? posts.slice(0, limit) : posts
  }

  const getBlogPostBySlug = (slug: string): BlogPost => {
    const post = getBlogPosts().find(item => item.slug === slug)

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found',
      })
    }

    return post
  }

  const getAdjacentBlogPosts = (id: string) => {
    const postsById = getBlogPosts().sort((first, second) =>
      Number(first.id) - Number(second.id)
    )
    const currentPostIndex = postsById.findIndex(post => post.id === id)

    return {
      previousPost: postsById[currentPostIndex - 1],
      nextPost: postsById[currentPostIndex + 1],
    }
  }

  const getLatestBlogPosts = (limit = 5, excludedSlug?: string): BlogPost[] =>
    getBlogPosts()
      .filter(post => post.slug !== excludedSlug)
      .slice(0, limit)

  return {
    getBlogPosts,
    getBlogPostBySlug,
    getAdjacentBlogPosts,
    getLatestBlogPosts,
  }
}
