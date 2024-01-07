<script setup lang="ts">
import eventsJson from '../events.json';

let year = new Date().getFullYear();
let month = new Date().getMonth();

const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]

if (year < 2024) {
  year = 2024;
  month = 0;
}

const monthWord = months[month];

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
   ],
})


</script>

<template>
   <div>
      <div class="flex flex-col mx-5 m-auto md:mx-auto lg:mx-0 lg:m-auto 2xl:mx-auto mt-20 2xl:mt-40 w-fit md:grid md:grid-cols-2 grid-flow-col-dense md:gap-x-12 xl:gap-x-24 2xl:gap-x-52">
         <div class="lg:m-auto mx-5 lg:mx-0 m-auto">
            <h1 class="font-bold text-4xl text-header-text 2xl:w-prose max-w-lg">Anoka-Ramsey Programming Club Events</h1>
            <div class="lg:ml-24 m-auto grid grid-cols-2 gap-x-1 content-center justify-items-center">
               <div>
                  <div class="mb-4">
                     <h2 class="m-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit">Meetings</h2>
                     <p>Every other week</p>
                  </div>
                  <div class="m-auto">
                     <!-- Insert times here -->

                  </div>
               </div>

               <div>
                  <h2 class="max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit">Summary</h2>
                  <!-- Do some fancy javascript here -->
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
