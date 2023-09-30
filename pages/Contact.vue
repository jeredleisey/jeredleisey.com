<script setup lang="ts">
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>

<template>
  <section class="flex relative bg-slate-500 z-10">
    <main
      class="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-[#1c1c1c] border-[#2e2e2e]"
    >
      <div class="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
        <div class="mb-6">
          <h1 class="mt-8 mb-2 text-2xl lg:text-3xl text-white">
            Get in touch
          </h1>
          <!-- <h2 class="text-sm text-gray-500">
            Whether you are looking to hire me or just say hi, I can't wait to
            hear from you!
          </h2> -->
        </div>

        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-100">
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
          <label for="message" class="leading-7 text-sm text-gray-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-gray-100 rounded border border-gray-300 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-gray-100 bg-yellow-700 border-0 py-2 px-6 transition-all focus:outline-none hover:bg-yellow-800 active:bg-yellow-900 rounded text-lg"
        >
          Send
        </button>
      </div>
    </main>
    <aside
      class="flex-1 basis-1/4 h-screen border-l shadow-xl border-[#696060]"
    >
      <div class="h-screen">
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
    </aside>
  </section>
</template>
