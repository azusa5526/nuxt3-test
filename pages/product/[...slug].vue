<template>
	<div>Product slug</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';

definePageMeta({
	name: 'product',
});

const appStore = useAppStore();
const route = useRoute();

console.log('route', route);
</script>
