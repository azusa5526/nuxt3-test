<template>
	<div class="bg-yellow-200">
		<h1>Hello index.vue</h1>
		<NuxtLink to="/about" class="text-blue-500">About link</NuxtLink>
		<div v-for="n in 10" :key="n" class="py-10">{{ n }}</div>
		<!-- <svg-icon use="account_circle" class="h-10 w-10 text-3xl"></svg-icon> -->
		<SvgIcon use="account_circle" class="h-10 w-10 text-red-400"></SvgIcon>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'home',
});
</script>
