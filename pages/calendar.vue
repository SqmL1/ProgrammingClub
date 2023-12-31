<script setup lang="ts">
import eventsJson from '../events.json';

for (const eventie in eventsJson) {
  console.log(eventie);
}
const events = reactive(eventsJson);

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

console.log(month);
console.log(year);

const monthWord = months[month];
console.log(monthWord)

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
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js'
    }
  ]
})
</script>

<template>
  <ul>
    <li v-for="event in events[year][monthWord]" :key="event">
      <!-- Month -->
      <span v-for="item in event" :key="item">{{item}}</span>
    </li>
  </ul>
</template>

<style scoped>

</style>
