<template>
  <BaseContainer>
    <LayoutSection
      title="About ToolDB"
      description="A curated catalog of digital tools to help you find the right software for your needs."
    >
      <div class="about-page">
        <section>
          <h2>What is ToolDB</h2>
          <p>
            ToolDB is a curated catalog of digital tools designed to help
            professionals, teams and businesses discover, compare and choose
            the right software. We research each tool thoroughly so you can
            make informed decisions without spending hours reading scattered
            reviews and feature lists.
          </p>
        </section>

        <section>
          <h2>Why we built it</h2>
          <p>
            Choosing software is hard. There are thousands of tools across
            dozens of categories, each with different pricing models, feature
            sets and integration options. We created ToolDB to cut through
            the noise and provide clear, structured information that helps
            you find what actually works for your situation.
          </p>
        </section>

        <section>
          <h2>How we evaluate tools</h2>
          <p>
            Every tool in our catalog goes through a structured evaluation
            process. We analyze features, pricing structures, platform
            availability, integration capabilities and real user feedback.
            Our goal is to present accurate, unbiased information that
            reflects how each tool performs in practice, not just what
            marketing pages claim.
          </p>
        </section>

        <section>
          <h2>Our editorial standards</h2>
          <p>
            We maintain strict editorial independence. Affiliate relationships
            do not influence which tools we include, how we describe them or
            what we recommend. If a tool does not meet our quality standards,
            it will not appear in our catalog regardless of whether we have
            a partnership with the provider. Transparency about our business
            model is important to us, and you can read more on our
            <NuxtLink :to="routes.affiliateDisclosure()">
              affiliate disclosure page
            </NuxtLink>.
          </p>
        </section>

        <section>
          <h2>Growing the catalog</h2>
          <p>
            ToolDB is actively growing. We regularly add new tools, update
            existing entries when features or pricing change, and expand
            into new categories based on what our users need. If there is
            a tool you think should be included or information that needs
            updating, we welcome your feedback.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Have questions, suggestions or want to recommend a tool? Visit
            our
            <NuxtLink :to="routes.contact()">
              contact page
            </NuxtLink>
            to get in touch.
          </p>
        </section>

        <section class="about-author">
          <h2>About the author</h2>
          <div class="about-author__card">
            <img
              src="/images/author/slava.webp"
              alt="Slava Shevchenko"
              class="about-author__avatar"
              width="100"
              height="100"
            >
            <div class="about-author__info">
              <h3 class="about-author__name">
                Slava Shevchenko
              </h3>
              <p class="about-author__role">
                Frontend Developer & Creator of ToolDB
              </p>
              <p class="about-author__bio">
                Frontend developer with 10+ years of experience building web applications
                and evaluating digital tools daily. I created ToolDB because I was tired
                of spending hours comparing software across dozens of tabs. Every tool
                in this catalog has been personally researched or used in real projects.
              </p>
              <div class="about-author__links">
                <a
                  href="https://www.linkedin.com/in/slava-shevchenko90210/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/slavaShevchenko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <p class="about-page__updated">
          Last updated: August 9, 2026
        </p>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import { appSeo, aboutSeo } from '~/seo'

definePageMeta({
  breadcrumb: 'About',
})

useSeo({
  title: aboutSeo.title,
  description: aboutSeo.description,
  canonical: `${appSeo.siteUrl}${routes.about()}`,
})

useAuthorJsonLd()
</script>

<style scoped lang="scss">
.container {
  padding-top: var(--space-2);
}

.about-page {
  padding-top: var(--space-2);
}

section {
  margin-bottom: var(--space-3);
}

h2 {
  margin-bottom: var(--space-0-5);

  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

p {
  margin: 0;

  color: var(--color-text-secondary);
  line-height: 1.7;
}

a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.about-page__updated {
  font-size: var(--font-size-sm);
}


.about-author__card {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);
  background: var(--color-surface-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
}

.about-author__avatar {
  width: 100px;
  height: 100px;
  border-radius: var(--radius-lg);
  object-fit: cover;
  flex-shrink: 0;
}

.about-author__name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-0-25);
}

.about-author__role {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-1);
}

.about-author__bio {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  margin-bottom: var(--space-1);
}

.about-author__links {
  display: flex;
  gap: var(--space-1);
}

.about-author__links a {
  font-size: var(--font-size-sm);
}

@media (max-width: 767px) {
  .about-author__card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-author__links {
    justify-content: center;
  }
}
</style>