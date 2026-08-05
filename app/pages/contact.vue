<template>
  <BaseContainer>
    <LayoutSection
      title="Contact"
      description="Questions, feedback, or corrections about ToolDB?"
    >
      <p class="contact__text">
        Email us at
        <a href="mailto:cata90210@gmail.com">
          cata90210@gmail.com
        </a>
      </p>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
definePageMeta({
  breadcrumb: 'Contact',
})

useSeo({
  title: 'Contact - ToolDB',
  description: 'Get in touch with ToolDB.',
  canonical: 'https://tooldb.org/contact',
})
</script>

<style scoped lang="scss">
.container {
  padding-top: var(--space-2);
}
.contact__text {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}
</style>
