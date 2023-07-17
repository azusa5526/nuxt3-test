<template>
	<div>
		<!-- <div>category.vue</div>
		<div>C category - {{ route.params.category }}</div>
		<div>C sub_category - {{ route.params.sub_category }}</div> -->
		<div v-for="product in products" :key="product.id">
			<pre>{{ product }}</pre>
		</div>
		<NuxtPage></NuxtPage>
	</div>
</template>

<script lang="ts" setup>
import { Category, IProduct } from '~/types';

const route = useRoute();
const categoryId = ref<string>();
const products = ref<IProduct[]>();

if (!route.params.sub_category) {
	const categoiresFetch = reactive(await useFetch<Category[]>('/api/category'));
	categoryId.value = categoiresFetch.data?.find((category) => category.route === route.path)?.id;

	const productsFetch = reactive(
		await useFetch<IProduct[]>('/api/product', { params: { category_id: categoryId.value } })
	);
	if (productsFetch.data) products.value = productsFetch.data;
}
</script>
