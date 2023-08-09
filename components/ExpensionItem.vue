<template>
	<div>
		<div @click="onActivatorClick" class="cursor-pointer select-none text-center">
			<slot name="activator"></slot>
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
const contentRef = ref<HTMLElement | null>(null);
const props = withDefaults(defineProps<{ modelValue?: boolean }>(), {
	modelValue: undefined,
});
const maxHeight = ref(props.modelValue ? '100%' : '0px');
const emits = defineEmits<{ (e: 'update:modelValue', val: boolean): void }>();
const isExpend = ref(props.modelValue);

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
	maxHeight.value = maxHeight.value === '0px' ? contentRef.value?.scrollHeight + 'px' : '0px';
}
</script>
