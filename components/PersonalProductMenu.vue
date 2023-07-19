<template>
	<li
		v-for="category in appStore.personalCategories"
		:key="category.id"
		class="flex h-full w-[calc(100%/7)] max-w-[240px] flex-col items-center border-black text-black first:border-l first:border-r"
	>
		<p class="mb-2 font-bold">{{ category.name.toUpperCase() }}</p>
		<NuxtLink :to="category.route">
			<img class="w-[100px]" :src="category.image_url" alt="" />
		</NuxtLink>

		<ul>
			<li
				class="text-underline-decorator py-2 text-center"
				v-for="subCategory in category.sub_categories"
				:key="subCategory.id"
			>
				<NuxtLink :href="subCategory.route" class="text-sm"><span v-html="subCategory.name"></span></NuxtLink>
			</li>
		</ul>
	</li>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import type { Category } from '~/types';

const appStore = useAppStore();
const categoriesFetch = reactive(await useFetch<Category[]>('/api/category'));
if (categoriesFetch.data) appStore.personalCategories = categoriesFetch.data;
</script>
