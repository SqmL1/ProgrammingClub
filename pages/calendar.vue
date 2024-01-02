<script setup lang="ts">

useSeoMeta({
   description: 'A calendar of events for the Anoka-Ramsey Programming Club',
   ogTitle: 'Programming Club Calendar | Anoka Ramsey Programming Club',
   ogDescription: 'A calendar of events for the Anoka-Ramsey Programming Club',
   ogImage: '/logo-bold.svg',
   twitterTitle: 'Programming Club Calendar | Anoka Ramsey Programming Club',
   twitterDescription: 'A calendar of events for the Anoka-Ramsey Programming Club',
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
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
    onMounted(() => {
    initFlowbite();
})
</script>

<template>
   
   <div>
      <div inline-datepicker data-date="02/25/2022"></div>
   </div>

</template>

<style scoped>

</style>
