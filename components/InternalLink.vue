<script setup lang="ts">
	defineProps<{
		link: string;
		text: string;
	}>();
</script>

<template>
		<NuxtLink
			:to="link"
			class="relative w-fit h-fit"
		>
			<div class="relative">
			<div
				class="absolute -inset-1 rounded-full bg-gradient-to-tl from-yellow-300 to-link opacity-75 blur"
			></div>
				<div
				class="relative block max-w-lg p-6 bg-white rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<div class="font-bold font-extra">
						{{ text }}
					</div>
				</div>
			</div>
		</NuxtLink>
</template>
