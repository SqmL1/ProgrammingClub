<script setup lang="ts">
const props = defineProps<{
   name: string;
   border?: boolean
}>();
</script>

<template>
   <div class="relative">
      <div
          class="absolute -inset-1 rounded-2xl bg-gradient-to-tl from-yellow-300 to-link opacity-75 blur"
          :class="{
            'hidden': !border
          }"
      ></div>
      <div class="relative block max-w-lg p-6 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700" :class="{
         'border border-gray-200 dark:border-gray-700 shadow': !border
      }">

         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-extra">{{name}}</h5>
         <div class="font-normal text-gray-700 dark:text-gray-400 font-content"><slot /></div>
      </div>
   </div>
</template>
