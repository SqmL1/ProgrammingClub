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
   }
})
</script>

<template>
   <div>
      <div class="lg:mt-20 md:mt-14 mt-7">
         <h1 class="mb-4 text-3xl font-extrabold dark:text-white md:text-5xl lg:text-6xl text-center text-header-text"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Collaborate!</span> We Provide Resources.</h1>
         <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">We provide resources and opportunities to help you grow as a developer. Here are some.</p>
      </div>

      <div class="justify-between py-5">

         <div class="m-auto w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 justify-stretch">
            <ResourceCard link="https://ohshitgit.com" name="Oh Shit Git!?" description="For when you fuck up in git and need to undo it" />
            <ResourceCard link="https://education.github.com" name="Github Education" description="Github Education provides free domain names, hosting, courses, and more to students" />
            <ResourceCard link="https://pll.harvard.edu/course/cs50-introduction-computer-science" name="CS50" description="CS50 is a great free course to learn the fundamentals of programming. Not to mention its a free Harvard course" />
            <ResourceCard link="https://neetcode.io" name="NeetCode" description="NeetCode is a structured way to learn algorithms and data structures if you dont know where to start"/>
            <ResourceCard link="https://leetcode.com" name="LeetCode" description="LeetCode helps prepare you for technical interviews. A Leetcode problem a day keeps unemployment away" />
            <ResourceCard link="https://www.codecademy.com" name="Codecademy" description="Codecademy is a course that teaches specific languages rather than the fundamentals"/>
            <ResourceCard link="https://www.edx.org" name="edX" description="EdX is a website that contains a multitude of courses to learn programming from"/>
            <ResourceCard link="https://cloud.oracle.com" name="Oracle Cloud Free Tier" description="Oracle Cloud offers free ARM Linux VMs for hosting as well as other free services. Credit/Debit card required for signup." />
            <ResourceCard link="https://developer.mozilla.org/en-US/" name="MDN Web Docs" description="Documentation useful for all web developers (or backend javascript developers)" />
            <ResourceCard link="https://devdocs.io" name="Dev Docs" description="Documentation for nearly every developer and system admin" />
            <ResourceCard link="https://css-tricks.com/" name="CSS Tricks" description="A website based around providing powerful tricks on CSS and cheatsheets (like Flexbox and Grid)" />

         </div>
      </div>
   </div>
</template>

<style scoped>

</style>
