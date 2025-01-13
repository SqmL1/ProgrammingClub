<script setup lang="ts">
	defineProps<{
		link: string;
		text: string;
	}>();
</script>

<template>
		<NuxtLink
			:to="link"
			class="relative flex flex-shrink"
		>
			<div class="relative">
			<div
				class="absolute -inset-1 rounded-full bg-gradient-to-tl from-yellow-300 to-link opacity-75 blur"
			></div>
				<div
				class="relative block max-w-lg py-4 px-6 bg-white rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 w-fit"
				>
					<div class="font-bold font-extra w-fit">
						{{ text }}
					</div>
				</div>
			</div>
		</NuxtLink>
</template>
