<template>
  <BaseContainer>
    <LayoutSection
      heading-tag="h1"
      title="Terms of Service"
      description="The rules for accessing and using ToolDB."
    >
      <div class="terms-page">
        <section>
          <h2>Overview</h2>
          <p>
            These Terms of Service govern your access to and use of ToolDB.
            By using the website, you agree to these terms. If you do not
            agree, please do not use ToolDB.
          </p>
        </section>

        <section>
          <h2>Use of ToolDB</h2>
          <p>
            ToolDB provides information about digital tools for discovery,
            comparison and research. You may use the website for lawful,
            personal or business evaluation purposes.
          </p>
        </section>

        <section>
          <h2>Information accuracy</h2>
          <p>
            We aim to keep tool information useful and current, but listings,
            pricing, ratings, descriptions and availability may change. ToolDB
            does not guarantee that all information is complete, accurate or
            suitable for your specific needs. You should verify important
            information directly with the relevant provider before making
            purchasing or business decisions.
          </p>
        </section>

        <section>
          <h2>Paid Listings and Featured Placement</h2>
          <p>
            The standard offer is a one-time payment of €50 for companies
            requesting a lifetime listing in the ToolDB catalog and featured
            placement on the homepage.
          </p>
          <p>
            All submissions are subject to editorial review. Payment does
            not guarantee acceptance. ToolDB may reject a submission if
            the product does not meet our quality standards, contains
            misleading claims, is unavailable, or raises legal, security
            or other legitimate concerns.
          </p>
          <p>
            A lifetime listing means that no recurring listing fee is
            required. It does not mean that a listing can never be removed.
            ToolDB may update, suspend or remove a listing if the product
            becomes unavailable, materially misrepresents its features,
            violates applicable law, or no longer meets our editorial
            standards.
          </p>
          <p>
            Featured placement is promotional. The €50 fee does not guarantee
            a permanent homepage position, a specific position in organic
            search results, a particular number of visitors, sales,
            conversions or other business results.
          </p>
          <p>
            Paid placements may be labeled as sponsored or featured content.
            Payment does not entitle a provider to a positive review,
            a particular editorial rating, or control over ToolDB's
            independent editorial assessments.
          </p>
        </section>

        <section>
          <h2>Payment and Refunds</h2>
          <p>
            Payment arrangements for paid listings are handled manually
            through communication with ToolDB. The applicable price and
            payment instructions will be confirmed before payment is made.
          </p>
          <p>
            A listing will be published after the product has passed
            editorial review, been approved by ToolDB, and the agreed
            payment has been received. ToolDB may request additional
            information before making a decision.
          </p>
          <p>
            If a submission is rejected before publication, any payment
            already received for that submission will be refunded.
            If a listing has already been published, contact us if you
            believe you are entitled to a refund. Refunds and any
            applicable cancellation rights are subject to the agreement
            with the customer and applicable law.
          </p>
          <p>
            Nothing in these terms excludes or limits any mandatory
            consumer rights that apply under applicable law.
          </p>
        </section>

        <section>
          <h2>Affiliate Links and Third-Party Websites</h2>
          <p>
            ToolDB may link to third-party websites, products or services.
            Some links may be affiliate links, through which ToolDB may
            earn a commission if you make a qualifying purchase, at no
            additional cost to you unless otherwise disclosed.
          </p>
          <p>
            We are not responsible for third-party content, policies,
            pricing, availability, products or actions. Your interactions
            with third-party providers are governed by their own terms
            and policies.
          </p>
          <p>
            For more information, see our
            <NuxtLink :to="routes.affiliateDisclosure()">
              Affiliate Disclosure
            </NuxtLink>.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            ToolDB's design, text, structure and original content are owned
            by ToolDB or its licensors. You may not copy, reproduce, scrape,
            redistribute or commercially reuse substantial parts of the
            website without permission, except where permitted by applicable
            law.
          </p>
          <p>
            By submitting product descriptions, logos, images or other
            materials for a listing, you confirm that you have the necessary
            rights or permissions to provide those materials and grant ToolDB
            a non-exclusive, royalty-free license to use, reproduce, display
            and adapt them as reasonably necessary to review, publish,
            promote and maintain the listing.
          </p>
          <p>
            You remain responsible for the accuracy of the materials you
            submit and must promptly notify us if you no longer have the
            right to authorize their use.
          </p>
        </section>

        <section>
          <h2>Acceptable Use</h2>
          <p>
            You agree not to misuse ToolDB, interfere with the website,
            attempt unauthorized access, introduce malware, scrape at abusive
            scale, submit fraudulent or misleading information, infringe
            third-party rights, or use the website in a way that violates
            applicable law or harms other users.
          </p>
        </section>

        <section>
          <h2>No Professional Advice</h2>
          <p>
            ToolDB is provided for general informational purposes only.
            It does not provide legal, financial, technical, security or
            procurement advice. You are responsible for evaluating tools
            before relying on or purchasing them.
          </p>
        </section>

        <section>
          <h2>Disclaimer of Warranties</h2>
          <p>
            ToolDB is provided on an "as is" and "as available" basis.
            To the extent allowed by law, we disclaim warranties of
            merchantability, fitness for a particular purpose and
            non-infringement.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the extent allowed by law, ToolDB will not be liable for
            indirect, incidental, consequential, special or punitive damages,
            or for lost profits, data, goodwill or business opportunities
            arising from your use of the website.
          </p>
          <p>
            Nothing in these terms excludes or limits liability where
            such exclusion or limitation is prohibited by applicable law.
          </p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>
            Our collection and use of personal information are described
            in our
            <NuxtLink :to="routes.privacyPolicy()">
              Privacy Policy
            </NuxtLink>.
            By using ToolDB, you acknowledge that you have had the
            opportunity to read that policy.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms as ToolDB evolves. When we make
            material changes, we will update the date below. Changes
            apply from the date they are published, subject to any
            requirements imposed by applicable law.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about these Terms of Service, paid
            listings or other matters, please visit our
            <NuxtLink :to="routes.contact()">
              contact page
            </NuxtLink>.
          </p>
        </section>

        <p class="terms-page__updated">
          Last updated: October 22, 2026
        </p>
      </div>
    </LayoutSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { routes } from '~/constants/routes'
import { appSeo, termsSeo } from '~/seo'

definePageMeta({
  breadcrumb: 'Terms of Service',
})

useSeo({
  title: termsSeo.title,
  description: termsSeo.description,
  canonical: `${appSeo.siteUrl}${routes.termsOfService()}`,
})
</script>

<style scoped lang="scss">
.container {
  padding-top: var(--space-2);
}

.terms-page {
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

p + p {
  margin-top: var(--space-1);
}

a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.terms-page__updated {
  font-size: var(--font-size-sm);
}
</style>