<template>
	<div>
		<div class="flex flex-col items-center">
			<div class="mb-5 mt-8 text-[10px] ct_md:mb-8 ct_md:text-sm">PRODUCTS</div>
			<div class="text-3xl ct_md:mb-14 ct_md:text-[3.5rem]">{{ categoryInfo?.category.name.toUpperCase() }}</div>
		</div>

		<div class="flex flex-col border-b border-gray-400">
			<span class="mb-8 text-center ct_md:mb-0">{{ categoryInfo?.category.name.toUpperCase() }}</span>

			<div class="mb-10 px-8 ct_md:hidden">
				<ExpensionItem class="grow">
					<template #activator="{ isExpend }">
						<div class="relative border-b border-[#BFBFBF] p-2 text-[12px]">
							<span>{{ selectedSubCategoryName }}</span>
							<SvgIcon
								use="expand_more"
								class="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 transition"
								:class="{ '-rotate-180': isExpend }"
							></SvgIcon>
						</div>
					</template>
					<template #content>
						<ul>
							<li v-for="subCategory in subCategoriesInfo" :key="subCategory.id">
								<NuxtLink :to="subCategory.route" class="block border-b border-[#BFBFBF] p-2 text-center text-[12px]">
									{{ subCategory.name }}
								</NuxtLink>
							</li>
						</ul>
					</template>
				</ExpensionItem>
			</div>

			<div class="flex border-t border-[#BFBFBF] ct_md:hidden">
				<div class="w-[65%] grow border-r border-[#BFBFBF] pl-3 text-sm">
					<select v-model="selectedFilter" class="h-full w-full py-4 pl-10 pr-3 text-center">
						<option
							v-for="filter in filterOptions"
							:key="filter.id"
							:value="{ filter: filter, target: selectedProductTypes }"
						>
							{{ filter.name }}
						</option>
					</select>
				</div>

				<div class="w-[35%] grow pr-3 text-sm">
					<select name="pets" class="h-full w-full py-4 text-center">
						<option v-for="(option, index) in orderOptions" :key="index">{{ option }}</option>
					</select>
				</div>
			</div>

			<div class="mx-auto hidden w-full max-w-[1600px] justify-between px-2 ct_md:flex">
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

		<div class="mx-auto flex max-w-[1600px] pb-48 pt-12">
			<ul class="hidden w-[25vw] min-w-[210px] max-w-[320px] px-2 ct_md:block [&>li]:mb-12">
				<li>
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
							v-for="productType in productRes.types"
							:key="productType.id"
							class="my-2.5 border border-gray-300 text-center text-sm"
							:class="{ 'bg-[#BFBFBF] text-white': selectedProductTypes.has(productType.id) }"
						>
							<span role="button" @click="toggleSetItem(selectedProductTypes, productType.id)" class="block p-2">
								{{ productType.name }}
							</span>
						</li>
					</ul>
				</li>

				<li v-if="productRes?.series?.length">
					<span class="text-sm">シリーズで絞り込む</span>
					<ul>
						<li
							v-for="productSeries in productRes.series"
							:key="productSeries.id"
							class="my-2.5 border border-gray-300 text-center text-sm"
							:class="{ 'bg-[#BFBFBF] text-white': selectedProductSeries.has(productSeries.id) }"
						>
							<span role="button" @click="toggleSetItem(selectedProductSeries, productSeries.id)" class="block p-2">
								{{ productSeries.name }}
							</span>
						</li>
					</ul>
				</li>
			</ul>

			<div class="flex flex-col items-center">
				<div class="flex w-full px-2 ct_md:w-[75vw] ct_md:px-8 ct_lg:max-w-[1032px]">
					<div class="grid grid-cols-2 place-content-start gap-x-3 ct_lg:grid-cols-3">
						<ProductCard
							:product="product"
							v-for="product in productRes?.products"
							:key="`${product.id}_1`"
							class="mb-12"
						></ProductCard>
					</div>
				</div>

				<div v-if="productRes?.products.length" class="flex">
					<button
						class="relative flex w-60 items-center justify-center rounded-full bg-black px-4 py-2.5 hover:opacity-70"
					>
						<span class="absolute left-2.5 h-7 w-7 rounded-full bg-white"></span>
						<span class="triangle-icon"></span>
						<span class="font-bold text-white">もっと見る</span>
					</button>
				</div>
			</div>
		</div>

		<div v-if="categoryInfo?.category.name" class="flex justify-center pb-48">
			<ProductNavi :name="categoryInfo.category.name"></ProductNavi>
		</div>

		<div class="flex flex-col items-center pb-32">
			<div class="pb-14 text-xl font-bold">SERIES LINE UP</div>
			<div class="mx-4 grid max-w-[1280px] grid-cols-1 gap-x-4 sm:mx-8 md:grid-cols-2 lg:grid-cols-3">
				<SeriesLineUpCard class="mb-7 max-w-[412px]" v-for="n in 6"></SeriesLineUpCard>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { ProductSeires, ProductType, SimplifiedProduct } from '~/types';
import ExpensionItem from '~/components/ExpensionItem.vue';

definePageMeta({
	middleware: defineNuxtRouteMiddleware((to, from) => {
		if (Array.isArray(to.params.slug)) {
			if (to.params.slug.filter((param) => param !== '').length > 2) return navigateTo('/404', { replace: true });
		}
	}),
});

const appStore = useAppStore();
const route = useRoute();

interface ProductRes {
	products: SimplifiedProduct[];
	types: ProductType[];
	series: ProductSeires[];
}

const selectedProductTypes = ref<Set<string>>(new Set());
const selectedProductSeries = ref<Set<string>>(new Set());

const { data: productRes } = await useAsyncData<ProductRes>(
	'productRes',
	() =>
		$fetch('/api/product', {
			params: {
				type_ids: Array.from(selectedProductTypes.value),
				series_ids: Array.from(selectedProductSeries.value),
				...appStore.getCategoryIdObject(route.path),
			},
		}),
	{
		watch: [() => route.path, selectedProductTypes.value, selectedProductSeries.value],
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

const selectedSubCategoryName = computed(() => {
	return appStore.routeToCategoryMap.get(route.path)?.subCategory?.name || '全て';
});

const orderOptions = ['おすすめ順', '発売日の新しい順', '価格の安い順', '価格の高い順'];

const filterOptions = computed(() => {
	return productRes.value?.types;
});

const selectedFilter = ref<{ filter: ProductType; target: Set<string> }>();
watch(selectedFilter, (newVal) => {
	if (newVal) {
		newVal.target.clear();
		newVal.target.add(newVal.filter.id);
	}
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

.triangle-icon {
	content: '';
	display: block;
	position: absolute;
	top: 50%;
	left: 18px;
	transform: translateY(-50%);
	border-right: 6px solid transparent;
	border-top: 10px solid #000;
	border-left: 5px solid transparent;
}

select:focus {
	outline: none;
}
</style>
