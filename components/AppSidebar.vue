<template>
	<div
		ref="target"
		class="fixed inset-0 z-20 flex h-screen flex-col overflow-y-scroll duration-200"
		:class="isDrawerShow ? 'translate-x-0' : '!translate-x-[calc(var(--app-sidebar-width)*-1)]'"
	>
		<h2>Title</h2>
		<AppSidebarList></AppSidebarList>
	</div>
</template>

<script lang="ts" setup>
import { useMouseInElement } from '@vueuse/core';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { isDrawerShow } = storeToRefs(appStore);

const target = ref(null);
const { isOutside } = useMouseInElement(target);

onMounted(() => {
	window.addEventListener('click', blurSidebar);
});

onBeforeUnmount(() => {
	window.removeEventListener('click', blurSidebar);
});

function blurSidebar() {
	if (isOutside.value) isDrawerShow.value = false;
}
</script>
