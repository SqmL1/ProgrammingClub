<script setup lang="ts">
defineProps<{
   borderTop?: boolean;
   extraBorderTop?: boolean
   borderY: boolean
}>()
</script>

<template>
   <div class="border-white py-4 px-4 flex w-full"
   :class="{
      'border-y-2': borderY,
      'border-t-2': borderTop,
      'border-t-4': extraBorderTop
   }">
      <div>
         <div class="text-lg font-bold"><slot name="title"/></div>
         <div class="text-md">
            <slot name="subtitle"/>
         </div>
      </div>
      <slot name="button"></slot>
   </div>
</template>

<style scoped>

</style>
