<script setup lang="ts">
useSeoMeta({
   description: 'The coding club for programmers of all levels at Anoka-Ramsey Community College',
   ogTitle: 'Anoka-Ramsey Programming Club',
   ogDescription: 'The club for programmers of all levels at Anoka-Ramsey Community College',
   ogImage: '/logo-bold.svg',
   twitterTitle: 'Anoka-Ramsey Programming Club',
   twitterDescription: 'The club for programmers of all levels at Anoka-Ramsey Community College',
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
  <div class="flex flex-col m-auto 2xl:mx-auto mt-20 2xl:mt-40 w-fit md:grid md:grid-cols-2 grid-flow-col-dense md:gap-x-12 xl:gap-x-24 2xl:gap-x-52">
    <div class="w-fit text-lg flex flex-col mx-5 md:mx-0 md:ml-24">
      <h1 class="font-bold text-4xl text-header-text 2xl:w-prose max-w-lg">Anoka-Ramsey Programming Club (ARPC)</h1>
      <p class="max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit text-left">The official place to assist students in pursuing their tech careers through real programming skills, networking opportunities, and peer-to-peer collaboration at <a href="https://www.anokaramsey.edu" class="text-link underline-offset-1 underline">Anoka-Ramsey Community College.</a></p>
      <p class="font-bold text-lg lg:text-lg mt-2 w-fit">Campus Independent.</p>
      <!--Join Now button-->
       <InternalLink link="/join" text="Join Now!" class="mt-8"/>
      <!--Learn more Section-->
       <!-- Should we put all this on the same page? -->
      <InternalLink link="/about" text="Learn More" class="lg:mt-44"/>
      </div>

      <!-- On bigger displays this part splits into the right hand side -->
      <div class="w-fit text-lg flex flex-col space-y-8 mx-5 lg:m-none lg:mx-16">
      <!-- Here we'll do the cards in the design that are off to the right -->
        <!--Resources Text Block-->
        <!--Line 52 flex postioning didn't apply to the resources section used ml-16 as a temporary fix, change eventually-->

      <div class="relative w-fit p-1 rounded-2xl">
         <div
             class="absolute -inset-1 rounded-lg bg-gradient-to-tl from-yellow-300 to-link opacity-50 blur z-0"
         ></div>
         <div class="relative bg-bg-tertiary rounded-xl p-4 text-header-text-secondary align-middle hover:drop-shadow-xl hover:bg-cyan-900 shadow-cyan-900">
            <h2 class="font-bold m-auto w-fit font-xl">Resources</h2>
            <p class="text-text-secondary mt-2 m-auto w-fit max-w-md text-center">We provide resources to aid you with your journey along the computer science pathway, such as information on how to get free courses and services.</p>
         </div>
      </div>
        <!--Networking Text Block-->
      <div class="relative w-fit p-1 rounded-2xl">
         <div
             class="absolute -inset-1 rounded-lg bg-gradient-to-tl from-yellow-300 to-link opacity-50 blur z-0"
         ></div>
         <div class="relative bg-bg-tertiary rounded-xl p-4 text-header-text-secondary align-middle hover:drop-shadow-xl hover:bg-cyan-900 shadow-cyan-900">
            <h2 class="font-bold m-auto w-fit font-xl">Networking</h2>
            <p class="text-text-secondary mt-2 m-auto w-fit max-w-md text-center">In order to help you succeed in the land of computer science, ARPC provides an excellent opportunity to network with others on the CS path.</p>
         </div>
      </div>
        <!--Skills Text Block-->
      <div class="relative w-fit p-1 rounded-2xl">
         <div
             class="absolute -inset-1 rounded-lg bg-gradient-to-tl from-yellow-300 to-link opacity-50 blur z-0"
         ></div>
         <div class="relative bg-bg-tertiary rounded-xl p-4 text-header-text-secondary align-middle hover:drop-shadow-xl hover:bg-cyan-900 shadow-cyan-900">
            <h2 class="font-bold m-auto w-fit font-xl">Skills</h2>
            <p class="text-text-secondary mt-2 m-auto w-fit max-w-md text-center">Not only do we provide resources to sharpen your skills in CS, we (and our members) are resources to hone your skills like specific languages, backend development, and frontend development.</p>
         </div>
      </div>

    </div>
  </div>
</template>
