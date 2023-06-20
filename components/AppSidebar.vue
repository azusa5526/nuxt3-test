<template>
	<div
		ref="target"
		class="fixed inset-0 z-20 flex h-screen duration-200"
		:class="{ '!translate-x-[calc(var(--app-sidebar-width)*-1)]': isShow }"
	>
		<div class="h-10 w-10 bg-red-400"></div>
		{{ x }} {{ y }} {{ isOutside }}
	</div>
</template>

<script lang="ts" setup>
import { useMouseInElement } from '@vueuse/core';

withDefaults(
	defineProps<{
		isShow?: boolean;
	}>(),
	{ isShow: false }
);

const target = ref(null);
const { x, y, isOutside } = useMouseInElement(target);

onMounted(() => {
	window.addEventListener('click', () => {
		console.log('window click', isOutside.value);
	});
});
</script>
