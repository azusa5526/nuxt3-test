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

		<div class="mx-auto flex max-w-[1600px] pb-24 pt-12">
			<ul class="hidden w-[25vw] min-w-[210px] max-w-[320px] px-2 ct_md:block">
				<li class="mb-12">
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
				</li>

				<li v-if="productRes?.types?.length">
					<span class="text-sm">タイプで絞り込む</span>
					<ul>
						<li
							v-for="productType in productRes?.types"
							:key="productType.id"
							class="my-2.5 border border-gray-300 text-center text-sm"
							:class="{ 'bg-[#BFBFBF] text-white': selectedProductTypeSet.has(productType.id) }"
						>
							<span role="button" @click="toggleSetItem(selectedProductTypeSet, productType.id)" class="block p-2">
								{{ productType.name }}
							</span>
						</li>

						<button @click="testBool = !testBool">test toggle {{ testBool }}</button>
					</ul>
				</li>
			</ul>

			<div class="flex w-full px-4 ct_md:w-[75vw] ct_md:px-8 ct_lg:max-w-[1032px]">
				<div class="grid grid-cols-2 place-content-start gap-x-4 gap-y-12 ct_lg:grid-cols-3">
					<ProductCard
						:product="product"
						v-for="product in productRes?.products"
						:key="`${product.id}_1`"
					></ProductCard>
				</div>
			</div>
		</div>

		<div class="flex justify-center pb-24">
			<ProductNavi :name="$route.params.slug[0]"></ProductNavi>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { ProductType, SimplifiedProduct } from '~/types';

definePageMeta({
	middleware: defineNuxtRouteMiddleware((to, from) => {
		if (Array.isArray(to.params.slug)) {
			if (to.params.slug.filter((param) => param !== '').length > 2) return navigateTo('/404', { replace: true });
		}
	}),
});

const appStore = useAppStore();
const route = useRoute();

console.log('route', route);

interface ProductRes {
	products: SimplifiedProduct[];
	types: ProductType[];
}

const selectedProductTypeSet = ref<Set<string>>(new Set());
const testBool = ref(false);

const { data: productRes } = await useAsyncData<ProductRes>(
	'productRes',
	() =>
		$fetch('/api/product', {
			params: { type_ids: Array.from(selectedProductTypeSet.value), ...appStore.getCategoryIdObject(route.path) },
		}),
	{
		watch: [() => route.path, selectedProductTypeSet.value],
	}
);

function toggleSetItem(set: Set<string>, id: string) {
	set.has(id) ? set.delete(id) : set.add(id);
}

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
:deep(.product-img-container) {
	@media screen and (min-width: 320px) {
		margin: 0 12px;
	}
	@media screen and (min-width: 757px) {
		margin: 0 32px;
	}
	@media screen and (min-width: 1240px) {
		margin: 0 32px;
	}
}

:deep(.product-card-name) {
	margin-bottom: 2rem;
}
</style>
