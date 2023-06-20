<template>
	<div class="flex h-[var(--app-header-height)] w-screen bg-green-400">
		<button @click="isDrawerShow = !isDrawerShow" class="bg-black/20 px-4 py-2 text-white">Toggle</button>
		{{ isDrawerShow }}
		<h1>Title</h1>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { isDrawerShow } = storeToRefs(appStore);
</script>
