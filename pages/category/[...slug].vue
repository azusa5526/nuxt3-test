<template>
	<div>
		<div class="flex flex-col items-center">
			<div class="text-md mb-1 mt-3">PRODUCTS</div>
			<div class="mb-7 text-[3.5rem]">{{ categoryInfo?.category.name.toUpperCase() }}</div>
		</div>

		<div class="flex flex-col border-b border-gray-400">
			<span class="text-center">{{ categoryInfo?.category.name.toUpperCase() }}</span>

			<div class="mx-auto flex w-full max-w-[1600px] justify-between px-2">
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
			<div class="hidden w-[25vw] min-w-[210px] max-w-[320px] px-2 md:block">
				<span class="text-sm">{{ categoryInfo?.category.name.toUpperCase() }}</span>
				<ul>
					<li
						v-for="subCategory in subCategoriesInfo"
						:key="subCategory.id"
						class="my-2.5 border border-gray-300 text-center text-sm"
						:class="{ 'bg-[#BFBFBF] text-white': route.path === subCategory.route }"
					>
						<NuxtLink :to="subCategory.route" class="block p-2">{{ subCategory.name }}</NuxtLink>
					</li>
				</ul>
			</div>

			<div class="flex w-full px-4 md:w-[75vw] md:px-8 lg:max-w-[1032px]">
				<div class="grid grid-cols-2 place-content-start gap-0 md:grid-cols-3">
					<ProductCard :product="product" v-for="product in products" :key="`${product.id}_1`"></ProductCard>
					<ProductCard :product="product" v-for="product in products" :key="`${product.id}_2`"></ProductCard>
					<ProductCard :product="product" v-for="product in products" :key="`${product.id}_3`"></ProductCard>
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

<style scoped lang="scss">
:deep(a > img) {
	@media screen and (min-width: 1205px) {
		padding: 0 2rem;
	}
}

:deep(.product-card-name) {
	margin-bottom: 2rem;
}
</style>
