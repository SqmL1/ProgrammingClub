<script setup lang="ts">
	defineProps<{
		name: string;
		description: string;
		link: string;
	}>();
</script>

<template>
	<div>
		<a
			:href="link"
			class="h-full block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
		>
			<h5
				class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-extra"
			>
				{{ name }}
			</h5>
			<p class="font-normal text-gray-700 dark:text-gray-400 font-content">
				{{ description }}
			</p>
		</a>
	</div>
</template>

<style scoped></style>
