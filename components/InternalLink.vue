<script setup lang="ts">
defineProps<{
   link: string;
   text: string;
}>();
</script>

<template>
   <div class="w-fit relative rounded-2xl">
      <NuxtLink :to="link" class="relative w-fit rounded-2xl h-fit bg-white hover:bg-gray-100">
         <div
             class="absolute -inset-1 bg-gradient-to-tl rounded-full from-yellow-300 to-link opacity-75 blur"
         ></div>
         <div class="relative p-1.5 w-fit rounded-full bg-inherit">
            <p class="text-black text-lg md:text-2xl p-3 rounded-full font-bold font-mono bg-inherit">{{text}}</p>
         </div>
      </NuxtLink>
   </div>
</template>
