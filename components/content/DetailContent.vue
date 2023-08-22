<template>
	<div class="w-full">
		<div
			@click="toggle"
			class="mx-auto max-w-[1090px] cursor-pointer select-none px-5 pb-6 pt-6 text-center font-bold ct_md:pt-[44px]"
		>
			<div class="relative" :class="$attrs['sub-title'] ? 'mb-4 ct_md:mb-7' : 'ct_md:mb-5'">
				<div class="grow text-xl ct_md:text-4xl">{{ $attrs.title }}</div>
				<SvgIcon
					class="absolute -top-1 right-0 h-10 w-10 justify-self-end transition-all duration-300 ct_md:right-6 ct_md:h-12 ct_md:w-12"
					:class="{ '-rotate-180': isExpend }"
					use="expand_more"
				></SvgIcon>
			</div>
			<div class="text-xs ct_md:text-base">{{ $attrs['sub-title'] }}</div>
		</div>
		<div
			ref="contentRef"
			class="overflow-hidden transition-[max-height] duration-300"
			:class="{ 'ct_md:mb-8': isExpend }"
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
