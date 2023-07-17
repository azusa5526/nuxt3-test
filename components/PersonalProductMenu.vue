<template>
	<li
		v-for="category in categoriesFetch.data"
		:key="category.id"
		class="flex h-full w-[calc(100%/7)] max-w-[240px] flex-col items-center border-black text-black first:border-l first:border-r"
	>
		<p class="mb-2 font-bold">{{ category.name.toUpperCase() }}</p>
		<a :href="category.route">
			<img class="w-[100px]" :src="category.image_url" alt="" />
		</a>

		<ul>
			<li
				class="text-underline-decorator py-2 text-center"
				v-for="subCategory in category.sub_categories"
				:key="subCategory.id"
			>
				<a :href="subCategory.route" class="text-sm"><span v-html="subCategory.name"></span></a>
			</li>
		</ul>
	</li>
</template>

<script lang="ts" setup>
import { Category } from '~/types';

const categoriesFetch = reactive(await useFetch<Category[]>('/api/category'));
</script>
