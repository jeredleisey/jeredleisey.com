<script setup lang="ts">
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>

<template>
  <section class="text-gray-600 body-font fixed w-screen h-screen z-10">
    <div class="absolute inset-0 bg-gray-300">
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
    <div class="container px-5 mx-auto pt-20 md:pt-16 flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Get in touch
        </h2>
        <p class="leading-relaxed mb-5 text-gray-900">
          Whether you are looking to hire me or just say hi, I can't wait to
          hear from you!
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-gray-100 rounded border border-gray-300 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-gray-100 rounded border border-gray-300 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-gray-100 bg-zinc-500 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-600 active:bg-zinc-700 rounded text-lg"
        >
          Send
        </button>
        <p class="text-xs text-gray-900 mt-3">
          Don't worry, you're not signing up for anything.
        </p>
      </div>
    </div>
  </section>
</template>
