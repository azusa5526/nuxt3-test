<template>
	<div class="relative px-10">
		<div class="overflow-x-hidden" ref="emblaNode">
			<div class="flex w-full will-change-transform">
				<div v-for="(product, index) in products" :key="index" class="flex w-1/4 shrink-0 grow-0 flex-col px-2.5">
					<ProductCard :product="product"></ProductCard>
				</div>
			</div>
		</div>
		<button
			v-if="canScrollPrev"
			@click="emblaApi?.scrollPrev"
			class="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-600"
		>
			<SvgIcon class="h-10 w-10 text-white" use="chevron_left"></SvgIcon>
		</button>
		<button
			v-if="canScrollNext"
			@click="emblaApi?.scrollNext"
			class="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-600"
		>
			<SvgIcon class="h-10 w-10 rotate-180 text-white" use="chevron_left"></SvgIcon>
		</button>
	</div>
</template>

<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue';
import { SimplifiedProduct } from '~/types';
import ProductCard from './ProductCard.vue';

defineProps<{ products: SimplifiedProduct[] | null }>();

const [emblaNode, emblaApi] = emblaCarouselVue({ loop: false, containScroll: 'trimSnaps', align: 'start' });

const canScrollNext = ref();
const canScrollPrev = ref();
const onScrollHandler = () => {
	canScrollNext.value = emblaApi.value?.canScrollNext();
	canScrollPrev.value = emblaApi.value?.canScrollPrev();
};

onMounted(() => {
	if (emblaApi) onScrollHandler();
});

watchEffect(() => {
	if (emblaApi.value) emblaApi.value.on('scroll', onScrollHandler);
});

const removeonScrollListener = () => {
	if (emblaApi.value) emblaApi.value.off('scroll', onScrollHandler);
};

onUnmounted(() => {
	removeonScrollListener();
});
</script>
