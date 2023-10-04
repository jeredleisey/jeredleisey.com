<script setup lang="ts">
const story = await useStoryblok('home', { version: 'draft' });
</script>

<template>
  <div class="h-screen relative z-10 bg-white">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
