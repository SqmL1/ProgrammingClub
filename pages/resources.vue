<script setup lang="ts">
useSeoMeta({
   title: 'Coding resources for college students | Anoka-Ramsey Programming Club',
   description: 'We have listed coding resources that are available for college students, resources like tutorials, documentation, coding camps, and free or discounted services and products!',
   ogTitle: 'Coding resources for college students | Anoka-Ramsey Programming Club',
   ogDescription: 'We have listed coding resources that are available for college students, resources like tutorials, documentation, coding camps, and free or discounted services and products!',
   ogImage: '/logo-bold.svg',
   twitterTitle: 'Coding resources for college students | Anoka-Ramsey Programming Club',
   twitterDescription: 'We have listed coding resources that are available for college students, resources like tutorials, documentation, coding camps, and free or discounted services and products!',
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
   <div>
      <div>
         <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Collaborate!</span> We Provide Resources.</h1>
         <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">We believe that our club will provide resources and opputunities to help eachother grow!</p>
      </div> 

      <div class="justify-between py-5">
         <div class="text-center">
            <p class="font-sans text-4xl">These are some resources</p>
         </div>

         <div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-between py-6">
               <div>
                  <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CS50</h5>
                     <p class="font-normal text-gray-700 dark:text-gray-400">CS50 is a great free course to learn the fundementals of programming. Not to mention its a free Harvard course!</p>
                  </a>
               </div>

               <div> 
                  <a href="https://neetcode.io/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NeetCode</h5>
                     <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </a>
               </div>
               <div>
                  <a href="https://leetcode.com/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LeetCode</h5>
                     <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </a>
               </div>

               <div> 
                  <a href="https://www.codecademy.com/?utm_id=t_kwd-78958985904710:loc-4104:ag_1263339270701571:cp_370028884:n_o:d_c&msclkid=184fbb407e10102397b8decbd8864c12&utm_source=bing&utm_medium=cpc&utm_campaign=US_Brand_Exact&utm_term=codecademy&utm_content=Codecademy" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CodeAcademy</h5>
                     <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </a>
               </div>
               <div>
                  <a href="https://www.edx.org/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">edX</h5>
                     <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </a>
               </div>

               <div> 
                  <a href="https://github.com/" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GitHub</h5>
                     <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </a>
               </div>
         </div>
      </div>
   </div>
</template>

<style scoped>

</style>