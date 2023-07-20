<template>
	<div>
		<div>[...].vue</div>
		<div>{{ $route.path }}</div>
		<div class="flex">
			<div v-for="product in products" :key="product.id" class="testtest m-3 bg-red-200 p-20">
				{{ product.name }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { SimplifiedProduct } from '~/types';

definePageMeta({
	middleware: defineNuxtRouteMiddleware((to, from) => {
		if (Array.isArray(to.params.slug)) {
			if (to.params.slug.filter((param) => param !== '').length > 2) return navigateTo('/404', { replace: true });
		}
	}),
});

const appStore = useAppStore();
const route = useRoute();

const { data: products } = await useFetch<SimplifiedProduct[]>('/api/product', {
	params: appStore.getCategoryIdObject(route.path),
	watch: [toRef(route.path)],
});
</script>
