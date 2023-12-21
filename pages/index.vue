<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col m-auto 2xl:mx-auto mt-20 2xl:mt-40 w-fit md:grid md:grid-cols-2 grid-flow-col-dense md:gap-x-12 xl:gap-x-24 2xl:gap-x-52">
    <div class="w-fit text-lg">
      <h1 class="font-bold text-4xl text-header-text 2xl:w-prose max-w-lg ml-16">Anoka-Ramsey Coding Club (ARCC)</h1>
      <p class="max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit ml-16 text-left ">The official place to assist students in pursuing their tech careers through real programming skills, networking opportunities, and peer-to-peer collaboration at <a href="https://www.anokaramsey.edu" class="text-link underline-offset-1 underline">Anoka-Ramsey Community College.</a></p>
      <p class="font-bold text-lg lg:text-lg mt-2 w-fit ml-16">Campus Independent.</p>
      <!--Join Now button-->
      <div class="p-1.5 bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit rounded-2xl ml-16 mt-4">
        <button class="bg-white text-black text-2xl position left-6 right-6 w-fit max-w-fit p-3 rounded-xl font-bold "> Join Now!</button>
      </div>
      <!--Learn more Section-->
      <p class="font-bold font-mono ml-16 mt-32">Learm more</p>
      <div class="bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit rounded-full p-1 ml-16">
        <button class="text-3xl font-bold bg-white p-3 px-4 py-2 rounded-full"> > </button>
      </div>
      
    </div>
    <div class="w-fit text-lg flex flex-col space-y-8">
      <!-- Here we'll do the cards in the design that are off to the right -->
        <!--Resources Text Block-->
      <div class="bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit p-1 rounded-2xl">
      <div class="bg-bg-tertiary rounded-xl p-4 text-header-text-secondary align-middle">
        <h2 class="font-bold m-auto w-fit font-xl">Resources</h2>
        <p class="text-text-secondary mt-2 m-auto w-fit max-w-md text-center">We provide resources to aid you with your journey along the computer science pathway, such as information on how to get free courses and services.</p>
      </div>
    </div>
        <!--Networking Text Block-->
      <div class="bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit p-1 rounded-2xl" >
      <div class="bg-bg-tertiary rounded-xl p-4 text-header-text-secondary align-middle">
        <h2 class="font-bold m-auto w-fit font-xl">Networking</h2>
        <p class="text-text-secondary mt-2 m-auto w-fit max-w-md text-center">In order to help you succeed in the land of computer science, ARCC provides an excellent opportunity to network with others on the CS path.</p>
      </div>
    </div>
        <!--Skills Text Block-->
      <div class="bg-gradient-to-tl to-blue-400 from-yellow-300 w-fit p-1 rounded-2xl">
      <div class="bg-bg-tertiary rounded-xl p-4 text-header-text-secondary align-middle">
        <h2 class="font-bold m-auto w-fit font-xl">Skills</h2>
        <p class="text-text-secondary mt-2 m-auto w-fit max-w-md text-center">Not only do we provide resources to sharpen your skills in CS, we (and our members) are resources to hone your skills like specific languages, backend development, and frontend development.</p>
      </div>
    </div>
      
    </div>
  </div>
</template>
