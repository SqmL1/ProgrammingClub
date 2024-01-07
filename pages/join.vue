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
   <div class="h-5/6">
      <div class="flex flex-col mt-10 md:mt-20 w-fit lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-12 xl:gap-x-24 2xl:gap-x-52 lg:h-full">
         <div class="m-auto mt-0 w-fit md:ml-16 mx-5 md:mx-0">
            <div class="flex flex-col">
               <h1 class="w-fit text-4xl text-header-text font-bold max-w-prose 2xl:w-prose">Hi, we heard you wanted to join the Anoka-Ramsey Programming Club</h1>
               <p class="mt-4 text-lg">Anoka Ramsey Programming Club encourages students of all backgrounds and experiences levels to
                  join and start building the necessary skills to land a job and thrive in their careers. All you have
                  to do is fill out this application and connect with our members.
               </p>
               <p class="font-bold text-lg lg:text-lg mt-2 w-fit">Campus Independent.</p>
            </div>



            <!--Learn more button-->
            <NuxtLink to="/about" class="w-fit">
               <div class="relative rounded-2xl h-fit bg-white hover:bg-gray-100 mt-4 w-fit">
                  <div
                      class="absolute -inset-1 rounded-2xl bg-gradient-to-tl from-yellow-300 to-link opacity-50 blur z-0"
                  ></div>
                  <div class="relative p-1.5 w-fit rounded-full bg-inherit">
                     <p class="bg-white text-black text-2xl max-w-fit p-3 rounded-full font-bold font-mono w-fit bg-inherit">Learn More</p>
                  </div>
               </div>
            </NuxtLink>
         </div>
         <div class="mt-14 lg:mt-0 mx-auto">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfdNzcn-2BJ3I9P9hk7zRj3EZehlgQufi72b74V2TlOLTNRnQ/viewform?embedded=true" width="640" frameborder="0" marginheight="0" marginwidth="0" class="h-dvh w-5/6 sm:w-[640px] md:h-full">Loading…</iframe>
         </div>

      </div>
   </div>

</template>
