<template>
	<div class="relative px-16">
		<div class="overflow-x-hidden" ref="emblaNode">
			<div class="flex w-full will-change-transform">
				<div v-for="product in products" :key="product.id" class="flex w-1/4 shrink-0 grow-0 flex-col px-2.5">
					<a href="#">
						<img
							class="block h-auto w-full select-none object-contain hover:opacity-70"
							:src="product.branches[0].image_url"
						/>
					</a>
					<div class="mt-7 min-h-[200px] shadow-[0px_-1px_0px_rgba(0,0,0,1)]">
						<p class="my-2 text-sm">
							{{ product.branches[0].release_at ? `${getFormattedData(product.branches[0].release_at)} 発売` : '-' }}
						</p>
						<p class="text-sm">{{ product.name }}</p>
						<p class="mb-2 text-lg">{{ product.branches[0].model }}</p>
						<p class="text-sm">{{ product.description }}</p>
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
import { SimplifiedProduct } from '~/types';
import { formatDateTime } from '@/utils/datetime';

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

function getFormattedData(datestring: string) {
	const date = formatDateTime(new Date(datestring));
	return `${date.YY}年${date.MM}月${date.DD}日`;
}

onUnmounted(() => {
	removeonScrollListener();
});
</script>
