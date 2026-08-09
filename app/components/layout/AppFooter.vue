<template>
  <footer class="footer">
    <BaseContainer top-line>
      <div class="layout">
        <div class="brand">
          <AppLogo />

          <p class="description">
            {{ footerBrand.description }}
          </p>
        </div>

        <nav
          class="navigation"
          aria-label="Footer navigation"
        >
          <section
            v-for="group in footerLinkGroups"
            :key="group.title"
            class="group"
          >
            <h2 class="group-title">
              {{ group.title }}
            </h2>

            <ul class="links">
              <li
                v-for="link in group.links"
                :key="link.label"
              >
                <NuxtLink
                  :to="link.to"
                  class="link"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </section>
        </nav>
      </div>
    </BaseContainer>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from '~/components/app/AppLogo.vue'
import { footerBrand, footerLinkGroups } from '~/data/footer'
</script>

<style scoped lang="scss">
.footer {
  padding: var(--space-4) 0;
}

.layout {
  display: flex;
  justify-content: space-between;
  gap: var(--space-6);
}

.brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  align-items: flex-start;
}

.description {
  max-width: 300px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);
}

.group-title {
  margin-bottom: var(--space-1);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
}

.links {
  display: flex;
  flex-direction: column;
  gap: var(--space-0-75);
  margin: 0;
  padding: 0;
  list-style: none;
}

.link {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: var(--transition-fast);
}

.link:hover {
  color: var(--color-primary);
}

@media (max-width: 767px) {
  .layout {
    flex-direction: column;
    gap: var(--space-3);
  }

  .navigation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 479px) {
  .navigation {
    grid-template-columns: 1fr;
  }
}
</style>
