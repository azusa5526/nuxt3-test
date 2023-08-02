<template>
	<div class="w-full">
		<div @click="toggle" class="mx-auto max-w-[1090px] cursor-pointer select-none pb-6 pt-10 text-center font-bold">
			<div class="relative" :class="$attrs['sub-title'] ? 'mb-7' : 'mb-5'">
				<div class="grow text-4xl">{{ $attrs.title }}</div>
				<SvgIcon
					class="absolute -top-1 right-6 h-12 w-12 justify-self-end transition-all duration-300"
					:class="{ '-rotate-180': isExpend }"
					use="expand_more"
				></SvgIcon>
			</div>
			<div>{{ $attrs['sub-title'] }}</div>
		</div>
		<div
			ref="contentRef"
			class="overflow-hidden transition-[max-height] duration-300"
			:class="{ 'mb-8': isExpend }"
			:style="{ maxHeight: `${maxHeight}` }"
		>
			<ContentSlot :use="$slots.default" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const contentRef = ref<HTMLElement | null>(null);
const maxHeight = ref('100%');

onMounted(() => {
	if (contentRef.value) {
		maxHeight.value = contentRef.value.scrollHeight + 'px';
	}
});

const isExpend = ref(true);
async function toggle() {
	isExpend.value = !isExpend.value;
	maxHeight.value = maxHeight.value === '0px' ? contentRef.value?.scrollHeight + 'px' : '0px';
}
</script>
