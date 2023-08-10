<template>
	<div>
		<div @click="onActivatorClick" class="cursor-pointer select-none text-center">
			<slot name="activator" v-bind="{ isExpend }"></slot>
		</div>
		<div
			ref="contentRef"
			class="overflow-hidden transition-[max-height] duration-300"
			:style="{ maxHeight: `${maxHeight}` }"
		>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import { useResizeObserver } from '@vueuse/core';

const contentRef = ref<HTMLElement | null>(null);
const props = withDefaults(defineProps<{ modelValue?: boolean; parent?: string }>(), {
	modelValue: undefined,
	parent: undefined,
});
const maxHeight = ref(props.modelValue ? '100%' : '0px');
const emits = defineEmits<{
	(e: 'update:modelValue', val: boolean): void;
	(e: 'update:maxHeight', newValue: number, oldValue: number): void;
}>();
const isExpend = ref(props.modelValue);
const offsetHeight = ref(0);

onMounted(() => {
	if (contentRef.value && props.modelValue) {
		maxHeight.value = contentRef.value.scrollHeight + 'px';
	}
});

watch(
	() => props.modelValue,
	(newVal) => {
		if (typeof newVal === 'boolean') {
			isExpend.value = newVal;
			setMaxHeight();
		}
	}
);

function onActivatorClick() {
	if (typeof props.modelValue === 'boolean') {
		emits('update:modelValue', !isExpend.value);
	} else {
		isExpend.value = !isExpend.value;
		setMaxHeight();
	}
}

function setMaxHeight() {
	const oldMaxHeight = window.parseInt(maxHeight.value);
	const newMaxHeight = maxHeight.value === '0px' ? (contentRef.value?.scrollHeight || 0) + offsetHeight.value : 0;
	maxHeight.value = `${newMaxHeight}px`;
	emits('update:maxHeight', newMaxHeight, oldMaxHeight);
}

function refreshMaxHeight() {
	const newMaxHeight = (contentRef.value?.scrollHeight || 0) + offsetHeight.value;
	maxHeight.value = `${newMaxHeight}px`;
}

function addOffsetHeight(val: number) {
	offsetHeight.value += val;
	refreshMaxHeight();
}

defineExpose({ addOffsetHeight, parent: props.parent });
</script>
