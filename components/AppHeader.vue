<template>
	<div class="flex h-[var(--app-header-height)] w-screen justify-between bg-green-400">
		<div class="flex">
			<button @click.stop="isDrawerShow = !isDrawerShow" class="block bg-black/20 px-4 py-2 text-white xl:hidden">
				Toggle
			</button>
			<h1>Title</h1>
		</div>

		<PiniaIcon class="!m-0 !mr-4 h-12 w-12"></PiniaIcon>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { isDrawerShow } = storeToRefs(appStore);
</script>

<style scoped></style>
