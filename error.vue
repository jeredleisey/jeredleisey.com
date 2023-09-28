<script setup lang="ts">
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <SiteHeader />
  <div class="h-screen bg-carina bg-auto bg-center z-10 relative">
    <div
      class="text-white font-acumin-pro-condensed h-full flex flex-col justify-center items-center"
    >
      <span class="text-[16rem] font-extrabold">404</span>
      <span class="text-xl">Houston, we have a problem.</span>
      <div>
        <button
          class="px-4 py-2 mt-4 rounded bg-transparent border border-white"
          @click="handleError"
        >
          Execute Atmospheric Reentry
        </button>
      </div>
    </div>
  </div>
</template>
