<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Contact Us"
      description="Have questions, feedback, or a tool suggestion for ToolDB? We'd love to hear from you."
    >
      <div class="contact__content">
        <p class="contact__intro">
          The best way to reach us is via email. Whether you want to suggest
          a new digital tool, report outdated information, or discuss a
          partnership, we'd love to hear from you.
        </p>

        <div class="contact__email-box">
          <p class="contact__text">
            Email us directly at:<br>
            <a href="mailto:cata90210@gmail.com" class="contact__email-link">
              cata90210@gmail.com
            </a>
          </p>
        </div>

        <h2 class="contact__subtitle">
          What you can contact us about
        </h2>

        <ul class="contact__list">
          <li>
            <strong>🛠️ Suggest a Tool</strong>
            <p>
              Know a great SaaS, AI tool, or software we missed? Send us
              the name, website, and a brief description of why it belongs
              in our catalog. Every submission is reviewed before inclusion.
            </p>
          </li>

          <li>
            <strong>🚀 Paid Listings — €50 One-Time</strong>
            <p>
              Want to give your product more visibility? For a one-time
              payment of €50, you can get a lifetime listing in the ToolDB
              catalog and featured placement on our homepage.
            </p>
            <p>
              There are no recurring listing fees. All submissions are
              subject to editorial review and must meet our quality standards.
              Featured placement is promotional and does not guarantee
              specific traffic or business results.
            </p>
            <p>
              Interested? Email us with your product name, website, and
              a short description of your tool to get started.
            </p>
          </li>

          <li>
            <strong>🐛 Report an Issue</strong>
            <p>
              Found incorrect pricing, a broken link, or outdated features?
              Let us know so we can keep our directory accurate and useful.
            </p>
          </li>

          <li>
            <strong>🤝 Partnerships & Advertising</strong>
            <p>
              Interested in affiliate partnerships, sponsorships, or other
              advertising opportunities? We're open to mutually beneficial
              collaborations.
            </p>
          </li>

          <li>
            <strong>💬 General Feedback</strong>
            <p>
              Have ideas on how we can improve the user experience, add
              new categories, or enhance our tool comparisons? We'd love
              to hear your suggestions.
            </p>
          </li>
        </ul>

        <p class="contact__footer">
          We review every message and aim to respond as soon as possible.
          Thank you for helping us build a useful software directory.
        </p>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
definePageMeta({
  breadcrumb: 'Contact',
})

useSeo({
  title: 'Contact Us - ToolDB',
  description: 'Contact ToolDB to suggest software, report outdated information, purchase a featured listing for €50, or discuss partnerships and advertising.',
  canonical: 'https://tooldb.org/contact',
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

.section:deep() .content .title {
  font-size: var(--font-size-3xl);
}

.section:deep() .content .description {
  line-height: 1.8;
}

.contact__content {
  max-width: 800px;
}

.contact__intro {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-2);
}

.contact__email-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-2);
  margin: var(--space-2) 0;
  text-align: center;
}

.contact__text {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.contact__email-link {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
}

.contact__subtitle {
  font-size: var(--font-size-xl);
  margin-top: var(--space-3);
  margin-bottom: var(--space-1-5);
  color: var(--color-text);
}

.contact__list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-2);

  li {
    margin-bottom: var(--space-1-5);
    color: var(--color-text-secondary);
    line-height: 1.6;

    strong {
      color: var(--color-text);
      display: inline-block;
      margin-bottom: 0.25rem;
    }

    p {
      margin: 0 0 var(--space-0-5);
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
}

.contact__footer {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-top: var(--space-3);
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border);
  line-height: 1.6;
}
</style>