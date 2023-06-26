<template>
	<div class="relative px-16">
		<div class="overflow-x-hidden" ref="emblaNode">
			<div class="flex w-full will-change-transform">
				<a
					:href="carouselItem.routeUrl"
					v-for="(carouselItem, index) in carouselItems"
					:key="index"
					class="flex h-[400px] w-1/4 shrink-0 grow-0"
				>
					<img
						class="block h-auto w-full select-none object-contain"
						:src="carouselItem.imageUrl"
						:alt="carouselItem.alt"
					/>
				</a>
			</div>
		</div>
		<button @click="emblaApi?.scrollPrev" class="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-600">
			<SvgIcon class="h-10 w-10 text-white" use="chevron_left"></SvgIcon>
		</button>
		<button @click="emblaApi?.scrollNext" class="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-600">
			<SvgIcon class="h-10 w-10 rotate-180 text-white" use="chevron_left"></SvgIcon>
		</button>
	</div>
</template>

<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';

const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true, align: 'start' }, [Autoplay()]);

const carouselItems = [
	{ imageUrl: 'https://dummyimage.com/1920x1280/e62260/fff', routeUrl: 'https://google.com.tw', alt: 'slide-1' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/22c9e6/fff', routeUrl: 'https://google.com.tw', alt: 'slide-2' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/e6cf22/ffffff', routeUrl: 'https://google.com.tw', alt: 'slide-3' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/22e687/ffffff', routeUrl: 'https://google.com.tw', alt: 'slide-4' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/e62260/fff', routeUrl: 'https://google.com.tw', alt: 'slide-5' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/22c9e6/fff', routeUrl: 'https://google.com.tw', alt: 'slide-6' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/e6cf22/ffffff', routeUrl: 'https://google.com.tw', alt: 'slide-7' },
	{ imageUrl: 'https://dummyimage.com/1920x1280/22e687/ffffff', routeUrl: 'https://google.com.tw', alt: 'slide-8' },
];
</script>

<style>
.embla {
	--slide-spacing: 1rem;
	--slide-size: 100%;
	--slide-height: 19rem;
	padding: 1.6rem;
}
.embla__viewport {
	overflow: hidden;
}
.embla__container {
	backface-visibility: hidden;
	display: flex;
	touch-action: pan-y;
	flex-direction: row;
	height: auto;
	margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
	flex: 0 0 var(--slide-size);
	min-width: 0;
	padding-left: 100px;
	padding-right: 100px;
	position: relative;
}
.embla__slide__img {
	display: block;
	height: var(--slide-height);
	width: 100%;
	object-fit: cover;
}
.embla__slide__number {
	width: 4.6rem;
	height: 4.6rem;
	z-index: 1;
	position: absolute;
	top: 0.6rem;
	right: 0.6rem;
	border-radius: 50%;
	background-color: rgba(var(--background-site-rgb-value), 0.85);
	line-height: 4.6rem;
	font-weight: 900;
	text-align: center;
	pointer-events: none;
}
.embla__slide__number > span {
	color: var(--brand-primary);
	background-image: linear-gradient(45deg, var(--brand-primary), var(--brand-secondary));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 1.6rem;
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.embla__dot,
.embla__button {
	-webkit-appearance: none;
	background-color: white;
	touch-action: manipulation;
	display: inline-flex;
	text-decoration: none;
	cursor: pointer;
	border: 0;
	padding: 0;
	margin: 0;
}
.embla__dots {
	z-index: 1;
	bottom: 1.2rem;
	position: absolute;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.embla__dot {
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	margin-right: 0.75rem;
	margin-left: 0.75rem;
}
.embla__dot:after {
	background: var(--background-site);
	border-radius: 0.2rem;
	width: 100%;
	height: 0.3rem;
	content: '';
}
.embla__dot--selected:after {
	background: linear-gradient(45deg, var(--brand-primary), var(--brand-secondary));
}
.embla__button {
	z-index: 1;
	color: var(--background-site);
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	width: 4rem;
	height: 4rem;
}
.embla__button--prev {
	left: 1.6rem;
}
.embla__button--next {
	right: 1.6rem;
}
.embla__button:disabled {
	opacity: 0.3;
}
.embla__button__svg {
	width: 65%;
	height: 65%;
}

.sandbox {
	width: 100%;
}
@media (min-width: 750px) {
	.sandbox {
		margin-left: auto;
		margin-right: auto;
		max-width: 67rem;
	}
}
.sandbox__carousel {
	position: relative;
	background-color: var(--background-code);
}
@media (max-width: 749px) {
	.sandbox__carousel {
		border-top: 0.1rem solid var(--detail-low-contrast);
		border-bottom: 0.1rem solid var(--detail-low-contrast);
	}
}
@media (min-width: 750px) {
	.sandbox__carousel {
		border-radius: 0.4rem;
		border: 0.1rem solid var(--detail-low-contrast);
	}
}
.sandbox__header {
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	padding: 4rem 2rem 2rem 2rem;
}
.sandbox__footer {
	display: flex;
	justify-content: center;
	padding: 2rem 2rem 4rem 2rem;
}
.sandbox__footer__link {
	display: flex;
	align-items: center;
	background-color: transparent;
	text-decoration: none;
	text-align: center;
	font-weight: 700;
	color: var(--text-low-contrast);
	font-size: 1.4rem;
}
.sandbox__footer__link__svg {
	display: block;
	width: 2rem;
	height: 2rem;
	margin-right: 1rem;
	fill: currentColor;
}
</style>
