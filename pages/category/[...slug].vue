<template>
	<div>
		<div>[...].vue</div>
		<div>{{ $route.path }}</div>
		<div class="flex">
			<div v-for="product in products" :key="product.id" class="m-3 bg-red-200 p-20">
				{{ product.name }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { IProduct, Category } from '~/types';

definePageMeta({
	middleware: defineNuxtRouteMiddleware((to, from) => {
		if (Array.isArray(to.params.slug)) {
			if (to.params.slug.filter((param) => param !== '').length > 2) return navigateTo('/404', { replace: true });
		}
	}),
});

const appStore = useAppStore();
const route = useRoute();
const products = ref<IProduct[]>();

console.log('appStore', appStore.personalCategories.length);
const categoriesFetch = reactive(await useFetch<Category[]>('/api/category'));
if (categoriesFetch.data) appStore.personalCategories = categoriesFetch.data;
console.log('appStore', appStore.personalCategories.length);

const idObject = computed(() => {
	return appStore.routeToIdMap.get(route.path);
});
console.log('idObject', idObject.value);

watch(
	idObject,
	async (newVal) => {
		if (newVal) {
			console.log('watch get products');
			const res = await $fetch('/api/product', { params: idObject.value });
			if (res) products.value = res;
		}
	},
	{ immediate: true }
);

// onMounted(async () => {
// 	if (!products.value?.length) {
// 		console.log('onMounted get products');
// 		const res = await $fetch('/api/product', { params: idObject.value });
// 		if (res) products.value = res;
// 	}
// });
</script>
