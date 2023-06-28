<template>
	<div class="relative px-10">
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
					<div class="mt-5 flex min-h-[200px] flex-col items-center">
						<p class="mb-4">{{ carouselProduct.name }}</p>
						<p class="mb-3 text-lg">{{ carouselProduct.model_number }}</p>

						<ul class="mb-2 flex" v-if="carouselProduct.colors?.length">
							<li
								v-for="color in carouselProduct.colors"
								class="mx-1.5 grid h-6 w-6 rotate-[-60deg] overflow-hidden rounded-full border border-black/25 hover:opacity-70"
							>
								<div v-for="code in color.codes" :style="{ backgroundColor: code }"></div>
							</li>
						</ul>

						<p class="my-2">￥{{ carouselProduct.price }} (税込)</p>
					</div>
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

interface CarouselProduct {
	image_url: string;
	page: string;
	price: string;
	product_id: number;
	name: string;
	model_number: string;
	colors?: {
		codes: string[];
		image_url: string;
		product_branch_id: number;
	}[];
}

defineProps<{ carouselProducts: CarouselProduct[] }>();

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
	if (emblaApi.value) emblaApi.value.on('select', onScrollHandler);
});

const removeonScrollListener = () => {
	if (emblaApi.value) emblaApi.value.off('select', onScrollHandler);
};

onUnmounted(() => {
	removeonScrollListener();
});
</script>
