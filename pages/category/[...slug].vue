<template>
	<div>
		<div>[...].vue</div>
		<div>{{ $route.path }}</div>
		<div class="flex">
			<div v-for="product in productsFetch.data" :key="product.id" class="m-3 bg-red-200 p-20">
				{{ product.name }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Category, IProduct } from '~/types';

const route = useRoute();
console.log('route', route);

const categoriesFetch = reactive(await useFetch<Category[]>('/api/category'));
console.log(categoriesFetch.data);

const categoryId = categoriesFetch.data?.find((category) => category.route === route.path)?.id;
console.log('category id', categoryId);

const productsFetch = reactive(await useFetch<IProduct[]>('/api/product', { params: { category_id: categoryId } }));
console.log('productsFetch data;', productsFetch.data);
</script>
