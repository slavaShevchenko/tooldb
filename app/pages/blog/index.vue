<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Blog"
      description="Practical guides, comparisons and tips for choosing, evaluating and getting the most out of digital tools. Whether you're switching from an expensive platform, comparing options for your team, or just exploring what's out there — our articles help you make informed decisions faster. Updated regularly by our team."
    >
      <BlogList :posts="paginatedPosts" />

      <CommonPagination
        :current-page="currentPage"
        :total-pages="totalPages"
      />
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import { blogSeo } from '~/seo'
import { PAGINATION } from '~/constants/pagination'

const { getBlogPosts } = useBlog()
const allPosts = getBlogPosts()

const {
  items: paginatedPosts,
  currentPage,
  totalPages,
} = usePagination(allPosts, PAGINATION.blog)

const dynamicMetaDescription = useDynamicSeoDescription(paginatedPosts, {
  prefix: 'Latest articles: ',
  suffix: '. Practical guides, comparisons and tips for choosing digital tools.',
})

useBreadcrumbJsonLd([
  { name: 'Home', url: routes.home() },
  { name: 'Blog', url: routes.blog() },
])

useItemListJsonLd(
  paginatedPosts.value.map((post, index) => ({
    name: post.title,
    url: routes.blogPost(post.slug),
    position: (currentPage.value - 1) * PAGINATION.blog + index + 1,
  })),
  'ToolDB Blog'
)

useSeo({
  title: blogSeo.title,
  description: dynamicMetaDescription,
  canonical: `https://tooldb.org${routes.blog()}`,
  appendPageNumber: true,
})
</script>

<style scoped lang="scss">
.section {
  margin-top: var(--space-2);
}
.section:deep() .header {
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}
.section:deep() .content {
  flex: 0 0 75%;
}
.section:deep() .content .title {
  font-size: var(--font-size-3xl);
}
.section:deep() .content .description {
  line-height: 1.8;
}

@media (max-width: 991px) {
  .section:deep() .header {
    display: block;
  }
}
</style>