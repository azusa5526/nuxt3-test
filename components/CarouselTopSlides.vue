<template>
	<div class="relative overflow-x-hidden" ref="emblaNode">
		<div class="flex will-change-transform">
			<a
				:href="slide.route"
				v-for="(slide, index) in topSlidesFetch.data"
				:key="index"
				class="relative flex h-[80vh] max-h-[800] min-h-[600px] w-full shrink-0 grow-0 hover:opacity-[85%]"
			>
				<img class="test block h-auto w-full select-none object-cover object-[0_32.3%]" :src="slide.image_url" />
				<div class="absolute bottom-1/4 left-1/2 w-[70%] -translate-x-1/2 text-white">
					<p class="my-4 text-2xl">{{ slide.title }}</p>
					<span v-html="slide.description"></span>
				</div>
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
import { ITopSlide } from '~/types';

const [emblaNode] = emblaCarouselVue({ loop: true, align: 'center' }, [Autoplay()]);
const topSlidesFetch = reactive(await useFetch<ITopSlide[]>('/api/slides'));
</script>
