<template>
	<div class="bg-lime-600 p-4">
		<div>
			<div @click="toggle" class="mx-auto w-[1000px] cursor-pointer select-none text-center hover:bg-red-200">
				<div class="text-3xl">{{ $attrs.title }}</div>
				<div class="font-bold">{{ $attrs['sub-title'] }}</div>
			</div>
		</div>

		<div class="overflow-hidden duration-300" :style="contentStyle">
			<div ref="contentRef">
				<ContentSlot :use="$slots.default" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, type CSSProperties } from 'vue';

const contentRef = ref<HTMLElement | null>(null);
const contentHeight = ref(9999);
const isExpand = ref(true);
const isInit = ref(true);

const contentStyle = computed((): CSSProperties => {
	if (isExpand.value) {

		if (isInit.value) {
			return {
				maxHeight: '100%',
			};
		}

		return {
			transitionProperty: isInit.value ? 'none' : 'max-height',
			maxHeight: contentHeight.value + 'px',
		};
	}
	return {
		maxHeight: '0px',
	};
});

onMounted(() => {
	contentHeight.value = contentRef.value?.clientHeight ?? 0;
	window.setTimeout(() => {
		isInit.value = false;
	}, 60);
});

function toggle() {
	isExpand.value = !isExpand.value;
	console.log('isExpand', isExpand.value);
	console.log(contentRef.value?.clientHeight);
}
</script>
