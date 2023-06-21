<template>
	<div
		ref="target"
		class="fixed inset-0 z-30 flex h-screen flex-col overflow-y-scroll duration-200"
		:class="isDrawerShow ? 'translate-x-0' : '!translate-x-[calc(var(--app-sidebar-width)*-1)]'"
	>
		<h2>Title</h2>
		<AppSidebarList></AppSidebarList>

		<Teleport to="body">
			<button
				class="fixed left-[calc(var(--app-sidebar-width)+10px)] top-4 z-50 block text-black/40 duration-200 lg:hidden"
				:class="
					isDrawerShow
						? 'translate-x-0 opacity-100'
						: 'pointer-events-none !translate-x-[calc(var(--app-sidebar-width)*-1)] opacity-0'
				"
			>
				<SvgIcon use="clear" class="h-8 w-8"></SvgIcon>
			</button>
			<div v-if="isDrawerShow" class="fixed inset-0 z-30 block bg-white/60 lg:hidden"></div>
		</Teleport>
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
