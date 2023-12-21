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
   <div class="flex flex-col m-auto 2xl:mx-auto mt-20 2xl:mt-40 w-fit md:grid md:grid-cols-2 grid-flow-col-dense md:gap-x-12 xl:gap-x-24 2xl:gap-x-52">
      <div class="m-auto w-fit mt-20">
         <h1 class="w-fit text-4xl text-header-text font-bold max-w-prose 2xl:w-prose ">Hi, we heard you wanted to join the Anoka-Ramsey Coding Club</h1>
         <h2 class="mt-4 w-fit text-2xl text-text">It just so happens we have a form for that</h2>
         <a href="/about">

         <div class="p-1.5 bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit rounded-2xl ml-16 mt-4">
         <button class="bg-white text-black text-2xl position left-6 right-6 w-fit max-w-fit p-3 rounded-xl font-bold "> Learn More</button>
         </div></a>
      </div>

        <h1></h1>

       
    
   </div>
</template>
