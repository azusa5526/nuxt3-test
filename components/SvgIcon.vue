<template>
	<svg aria-hidden="true">
		<use :href="symbolId" :fill="color" />
	</svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
	name: 'svg-icon',
	props: {
		prefix: {
			type: String,
			default: 'icon',
		},
		use: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: 'currentColor',
		},
	},
	setup(props) {
		const symbolId = computed(() => `#${props.prefix}-${props.use}`);
		return { symbolId };
	},
});
</script>
