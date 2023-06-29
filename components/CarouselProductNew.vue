<template>
	<div class="relative px-16">
		<div class="overflow-x-hidden" ref="emblaNode">
			<div class="flex w-full will-change-transform">
				<div
					v-for="(carouselProduct, index) in carouselProducts"
					:key="index"
					class="flex w-1/4 shrink-0 grow-0 flex-col px-2.5"
				>
					<a href="#">
						<img
							class="block h-auto w-full select-none object-contain hover:opacity-70"
							:src="carouselProduct.image_url"
						/>
					</a>
					<div class="mt-7 min-h-[200px] shadow-[0px_-1px_0px_rgba(0,0,0,1)]">
						<p class="my-2 text-sm">{{ carouselProduct.release_date }}</p>
						<p class="text-sm">{{ carouselProduct.name }}</p>
						<p class="mb-2 text-lg">{{ carouselProduct.model_number }}</p>
						<p class="text-sm">{{ carouselProduct.description }}</p>
					</div>
				</div>
			</div>
		</div>
		<button
			v-if="canScrollPrev"
			@click="emblaApi?.scrollPrev"
			class="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-600"
		>
			<SvgIcon class="h-12 w-12 text-white" use="chevron_left"></SvgIcon>
		</button>
		<button
			v-if="canScrollNext"
			@click="emblaApi?.scrollNext"
			class="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-600"
		>
			<SvgIcon class="h-12 w-12 rotate-180 text-white" use="chevron_left"></SvgIcon>
		</button>
	</div>
</template>

<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue';

interface ProductNew {
	image_url: string;
	page: string;
	description: string;
	release_date: string;
	product_id: number;
	name: string;
	model_number: string;
}

defineProps<{ carouselProducts: ProductNew[] }>();

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
