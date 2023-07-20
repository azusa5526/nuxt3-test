<template>
	<div>
		<div class="flex flex-col items-center">
			<div class="mb-4 mt-2 text-sm">PRODUCTS</div>
			<div class="mb-7 text-[3rem]">{{ categoryInfo?.category.name.toUpperCase() }}</div>
		</div>

		<div class="flex flex-col bg-yellow-200">
			<span class="text-center">{{ categoryInfo?.category.name.toUpperCase() }}</span>

			<div class="flex justify-between border-b border-gray-400">
				<div class="flex">
					<div class="mr-28">
						<span class="mr-8">FILTERS</span>
						<span>32</span>
					</div>

					<div>RESET</div>
				</div>

				<div class="flex">
					<span>並び順 おすすめ順</span>
				</div>
			</div>
		</div>

		<div class="mx-auto flex max-w-[1600px] pt-12">
			<div class="w-[25vw] min-w-[210px] max-w-[300px] px-2">
				<span class="text-sm">{{ categoryInfo?.category.name.toUpperCase() }}</span>
				<ul>
					<li
						v-for="subCategory in subCategoriesInfo"
						:key="subCategory.id"
						class="my-2.5 border border-gray-300 text-center text-sm"
						:class="{ 'bg-gray-300 text-white': route.path === subCategory.route }"
					>
						<a :href="subCategory.route" class="block p-2">{{ subCategory.name }}</a>
					</li>
				</ul>
			</div>

			<div class="flex w-[75vw] max-w-[1032px] px-8">
				<div class="grid grid-cols-3 place-content-start gap-0">
					<div v-for="product in products" :key="product.id" class="testtest m-3 bg-red-200 p-20">
						{{ product.name }}
					</div>
					<div v-for="product in products" :key="`${product.id}-2`" class="testtest m-3 bg-red-200 p-20">
						{{ product.name }}
					</div>
					<div v-for="product in products" :key="`${product.id}-3`" class="testtest m-3 bg-red-200 p-20">
						{{ product.name }}
					</div>
				</div>
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

const categoryInfo = computed(() => {
	return appStore.getCategoryInfo(route.path);
});

const subCategoriesInfo = computed(() => {
	return appStore.personalCategories.find(
		(personalCategory) => personalCategory.id === appStore.getCategoryInfo(route.path)?.category.id
	)?.sub_categories;
});
</script>
