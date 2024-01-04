<script setup lang="ts">
useSeoMeta({
   title: 'Join the AR Coding Club',
   description: 'Join the club for programmers of all levels at Anoka-Ramsey Community College',
   ogTitle: 'Join the AR Programming Club',
   ogDescription: 'Join the coding club for programmers of all levels at Anoka-Ramsey Community College',
   ogImage: '/logo-bold.svg',
   twitterTitle: 'Join the AR Programming Club',
   twitterDescription: 'Join the club for programmers of all levels at Anoka-Ramsey Community College',
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
      <div class="m-auto w-fit ">
       <div class="flex flex-col space-x-16">
         <h1 class="w-fit text-4xl text-header-text font-bold max-w-prose 2xl:w-prose ml-16 ">Hi, we heard you wanted to join the Anoka-Ramsey Programming Club</h1>
         <p class="mt-4 text-lg">Anoka Ramsey Programming Club encourages students of all backgrounds and experiences levels to
            join and start building the necessary skills to land a job and thrive in their careers. All you have
            to do is fill out this application and connect with our members.
         </p>
         <p class="font-bold text-lg lg:text-lg mt-2 w-fit">Campus Independent.</p>
       </div>

       

         <!--Learn more button-->
      <NuxtLink to="/about">
         <div class="p-1.5 bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit rounded-full ml-16 mt-4 font-">
         <button class="bg-white text-black text-2xl position left-6 right-6 w-fit max-w-fit p-3 rounded-full font-bold font-mono "> Learn More</button>
         </div>
      </NuxtLink>
      </div>

        <h1></h1>



   </div>
</template>
