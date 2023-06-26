<template>
	<div class="relative overflow-x-hidden" ref="emblaNode">
		<div class="flex will-change-transform">
			<a
				:href="carouselItem.routeUrl"
				v-for="(carouselItem, index) in carouselItems"
				:key="index"
				class="flex h-[800px] w-full shrink-0 grow-0"
			>
				<img
					class="block h-auto w-full select-none object-cover"
					:src="carouselItem.imageUrl"
					:alt="carouselItem.alt"
				/>
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';

const [emblaNode] = emblaCarouselVue({ loop: true, align: 'center' }, [Autoplay()]);

const carouselItems = [
	{ imageUrl: 'https://dummyimage.com/1920x1280/e62260/fff', routeUrl: 'https://google.com.tw', alt: 'slide-1' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/22c9e6/fff', routeUrl: 'https://google.com.tw', alt: 'slide-2' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/e6cf22/ffffff', routeUrl: 'https://google.com.tw', alt: 'slide-3' },
];
</script>
