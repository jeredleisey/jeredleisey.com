<script setup lang="ts">
enum links {
  '' = 'Home',
  'projects' = 'Projects',
  'about' = 'Info',
  'contact' = 'Contact',
}
</script>

<template>
  <div class="flex h-screen relative z-10 bg-[#e6e6e6]">
    <div class="m-8 flex-1 border border-gray-700">
      <div class="font-neue-montreal site-header">
        <div class="text-3xl xl:text-6xl font-light">Jered Leisey</div>
        <div class="text-sm mt-1 font-normal">Designer & Developer</div>
        <nav class="mt-12">
          <ul class="flex flex-col font-semibold">
            <li v-for="(link, i) in links">
              <NuxtLink
                :to="'/' + i"
                class="hover:text-gray-400 transition-all"
              >
                {{ link }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="content font-neue-montreal">
        <div>Space aficionado.</div>
        <div>Zealous open sourceror.</div>
        <div>Watching data come to life</div>
        <div>is why I write code.</div>
        <div>My mission is to take part</div>
        <div>in our proliferation into space.</div>
        <div>Ad astra.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-header {
  position: fixed;
  left: calc(max(20px, 4vmin) * 2);
  top: calc(max(20px, 4vmin) * 2);
}
.content {
  position: absolute;
  right: calc(max(20px, 4vmin) * 2);
  bottom: calc(max(20px, 4vmin) * 2);
}
</style>
