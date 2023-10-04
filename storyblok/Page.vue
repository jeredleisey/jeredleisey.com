<script setup lang="ts">
import { PageStoryblok } from '~/component-types-sb';

const props = defineProps<{ blok: PageStoryblok }>();
</script>

<template>
  <div v-editable="blok" class="pt-16 px-4">
    <StoryblokComponent
      v-for="blok in props.blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
