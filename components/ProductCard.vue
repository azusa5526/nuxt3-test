<template>
	<div>
		<NuxtLink :to="`/product/${product.model}`" class="product-img-container block aspect-square">
			<img
				class="block h-auto w-full select-none object-contain duration-150 hover:opacity-70"
				:src="selectedProductBranch.image_url"
			/>
		</NuxtLink>
		<div class="mt-4 flex flex-col items-center">
			<p class="product-card-name mb-4 text-sm">{{ product.name }}</p>
			<p class="mb-2">{{ product.model }}</p>

			<ul class="mb-2 flex" v-if="product.branches.length > 1">
				<li
					v-for="branch in product.branches"
					:key="branch.id"
					@click="
						selectedProductBranch = branch;
						hasBeenSelected = true;
					"
					class="mx-1.5 grid h-6 w-6 rotate-[-60deg] overflow-hidden rounded-full border border-black/25 hover:opacity-70"
				>
					<div
						v-for="colorCode in branch.color"
						:class="{ selected: branch.id === selectedProductBranch.id && hasBeenSelected }"
						:style="{ backgroundColor: `#${colorCode}` }"
					></div>
				</li>
			</ul>

			<p class="mb-2">￥{{ selectedProductBranch.price }} (税込)</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { SimplifiedProduct, SimplifiedBranch } from '~/types';
import { getContrastYIQ } from '@/utils/index';

const props = defineProps<{ product: SimplifiedProduct }>();
const product = computed(() => props.product);

const selectedProductBranch = ref<SimplifiedBranch>(product.value.branches[0]);
const hasBeenSelected = ref(false);
const selectedIconColor = computed(() => {
	return getContrastYIQ(`#${selectedProductBranch.value.color}`);
});
</script>

<style lang="scss" scoped>
.selected {
	position: relative;

	&::after {
		content: '✓';
		rotate: 60deg;
		position: absolute;
		width: 22px;
		height: 22px;
		top: 0;
		left: 0;
		font-weight: bold;
		text-align: center;
		color: v-bind(selectedIconColor);
	}
}
</style>
