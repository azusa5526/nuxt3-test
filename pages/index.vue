<template>
	<div class="bg-yellow-200">
		<img
			src="https://dummyimage.com/1920x1280/e62260/fff"
			class="max-h-[800px] min-h-[600px] w-full object-cover"
			alt=""
		/>
		<NuxtLink to="/about" class="text-blue-500">About link</NuxtLink>
		<div v-for="n in 10" :key="n" class="py-10">{{ n }}</div>
		<SvgIcon use="account_circle" class="h-10 w-10 text-red-400"></SvgIcon>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'home',
});
</script>
