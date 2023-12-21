<script setup lang="ts">
useSeoMeta({
   title: 'Join the AR Coding Club',
   description: 'Join the coding club for programmers of all levels at Anoka-Ramsey Community College',
   ogTitle: 'Join the AR Coding Club',
   ogDescription: 'Join the coding club for programmers of all levels at Anoka-Ramsey Community College',
   ogImage: '/logo-bold.svg',
   twitterTitle: 'Join the AR Coding Club',
   twitterDescription: 'Join the coding club for programmers of all levels at Anoka-Ramsey Community College',
   twitterImage: '/logo-bold.svg',
   ogLocale: 'en-US'
})

useHead({
   htmlAttrs: {
      lang: 'en'
   },
   link: [
      {
         rel: 'icon',
         type: 'image/png',
         href: '/favicon.png'
      }
   ]
})
</script>

<template>
   <div class="h-full m-auto">
      <div class="m-auto w-fit mt-20">
         <h1 class="w-fit text-4xl text-header-text font-bold max-w-prose">Hi, we heard you wanted to join the Anoka-Ramsey Coding Club</h1>
         <h2 class="mt-4 w-fit text-2xl text-text">It just so happens we have a form for that</h2>
      </div>
   </div>
</template>
