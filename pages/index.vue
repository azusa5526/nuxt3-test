<template>
	<div class="bg-yellow-200">
		<h1>Hello index.vue</h1>
		<NuxtLink to="/about" class="text-blue-500">About link</NuxtLink>
		<div v-for="n in 10" :key="n" class="py-10">{{ n }}</div>
	</div>
</template>

<script lang="ts" setup></script>
