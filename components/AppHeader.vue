<template>
	<div
		class="flex h-[var(--app-header-height)] w-screen justify-between duration-300"
		:class="isScrollPositionTop ? 'bg-transparent' : 'bg-white'"
	>
		<div class="flex">
			<button @click.stop="isDrawerShow = !isDrawerShow" class="block bg-black/20 px-4 py-2 text-white lg:hidden">
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
import { throttle } from 'lodash';
import { useEventListener } from '@vueuse/core';

const appStore = useAppStore();
const { isDrawerShow } = storeToRefs(appStore);

onMounted(() => {
	useEventListener(document, 'scroll', testFunc);
	isScrollPositionTop.value = document.body.getBoundingClientRect().y === 0;
});

const isScrollPositionTop = ref(true);
const testFunc = throttle(() => {
	document.body.getBoundingClientRect().y === 0
		? (isScrollPositionTop.value = true)
		: (isScrollPositionTop.value = false);

	console.log(isScrollPositionTop.value);
}, 200);
</script>

<style scoped></style>
