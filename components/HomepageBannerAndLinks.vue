<script setup lang="ts">
enum links {
  '' = 'Home',
  'projects' = 'Projects',
  'blog' = 'Blog',
  'info' = 'Info',
  'contact' = 'Contact',
}

const route = useRoute();
</script>

<template>
  <div
    :class="route.path === '/contact' ? 'text-white' : ''"
    class="font-neue-montreal site-header z-10"
  >
    <div class="text-3xl xl:text-6xl font-light">Jered Leisey</div>
    <div class="text-sm mt-1 font-normal">Designer & Developer</div>
    <nav class="mt-12">
      <ul class="flex flex-col font-semibold">
        <li v-for="(link, i) in links">
          <NuxtLink :to="'/' + i" class="hover:text-gray-400 transition-all">
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.site-header {
  position: fixed;
  left: calc(max(20px, 4vmin) * 2);
  top: calc(max(20px, 4vmin) * 2);
}
</style>
