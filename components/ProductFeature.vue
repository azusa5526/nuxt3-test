<template>
	<ContentDoc class="feature-content" :path="`/prod/${product.model}/feature`">
		<template #not-found>
			<div class="w-full p-8 text-center text-lg">-- Feature not found --</div>
		</template>
	</ContentDoc>
</template>

<script lang="ts" setup>
import type { Product } from '~/types';
defineProps<{ product: Product }>();
</script>

<style lang="scss">
.feature-content {
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		padding: 2rem;
		margin: 0 auto;
		max-width: 820px;
		width: 100%;
		height: auto;
		display: block;
	}

	img + img {
		margin-top: -1.75rem;
	}

	p {
		max-width: 812px;
		text-align: start;
		margin: 0 auto;
		font-size: 14px;
		line-height: 24px;
		padding: 0 1.25rem;
	}

	a:hover {
		opacity: 0.7;
		text-decoration: underline;
	}
}
</style>
