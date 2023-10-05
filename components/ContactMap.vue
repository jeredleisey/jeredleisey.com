<script setup lang="ts">
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>

<template>
  <div class="h-full">
    <iframe
      style="filter: grayscale(0.9) contrast(0.7) opacity(1) invert(100%)"
      marginheight="0"
      marginwidth="0"
      title="map"
      scrolling="no"
      loading="lazy"
      :src="
        'https://www.google.com/maps/embed/v1/view?zoom=12&center=38.9072%2C-77.0369&key=' +
        googleMapsApiKey
      "
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>
