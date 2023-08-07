<template>
	<ContentDoc class="feature-content" :path="`/prod/${product.model}/feature`">
		<template #not-found>
			<div class="w-full p-8 text-center text-lg">-- Feature not found --</div>
		</template>
	</ContentDoc>
</template>

<script lang="ts" setup>
import type { Product } from '~/types';
defineProps<{ product: Product }>()
</script>

<style lang="scss">
.feature-content {
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		padding-top: 2rem;
		padding-bottom: 2rem;
		margin: 0 auto;
		max-width: 760px;
	}

	img+img {
		margin-top: -1.75rem;
	}

	p {
		max-width: 812px;
		text-align: start;
		margin: 0 auto;
		font-size: 14px;
		line-height: 24px;
	}

	a:hover {
		opacity: 0.7;
		text-decoration: underline;
	}
}
</style>
