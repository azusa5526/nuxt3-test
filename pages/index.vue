<template>
	<div>
		<CarouselHome></CarouselHome>
		<div class="pb-12 pt-9 text-center">
			<button class="bg-red-500">test</button>
			<a href="#" class="text-lg">製品に関する大切なお知らせ</a>
		</div>

		<div class="pb-12">
			<div class="my-10 text-center">おすすめアイテム</div>
			<CarouselProduct :products="recommendProductFetch.data" class="mx-auto max-w-[1300px]"></CarouselProduct>
		</div>

		<div class="pb-12">
			<div class="my-10 text-center">オンラインストア限定</div>
			<CarouselProduct :products="onlineLimitedProductFetch.data" class="mx-auto max-w-[1300px]"></CarouselProduct>
		</div>

		<div class="mx-auto max-w-[1400px] px-5 py-24">
			<div class="my-10 text-center">ナビコンテンツ</div>
			<NavContents></NavContents>
		</div>

		<div class="mx-auto max-w-[80vw] py-24">
			<div class="my-10 text-center">トピックス</div>
			<Topics></Topics>
		</div>

		<a href="#" draggable="false">
			<div class="relative bg-[url('https://dummyimage.com/1920X494/26e3fc/fff')] bg-cover bg-center py-16">
				<div class="ml-[13%] text-white">
					<div class="mb-6 text-2xl">
						良い音で、
						<br class="block lg:hidden" />
						大人はもっと楽しくなる。
					</div>
					<div class="mb-6">
						WIRED EARPHONES/ HEADPHONES
						<br class="block lg:hidden" />
						PREMIUM LINEUP
					</div>
					<div class="mb-10">
						自分の価値観や美意識にこだわりをもって暮らす方々の
						<br />
						良い音の楽しみ方を公開中！
					</div>

					<div class="text-sm">MORE</div>
				</div>
			</div>
		</a>

		<div class="bg-gray-200 py-24">
			<div class="my-10 text-center">新製品</div>
			<CarouselProductNew :products="newItemProductFetch.data" class="mx-auto max-w-[1300px]"></CarouselProductNew>
		</div>

		<div class="mx-auto max-w-[1260px] py-24">
			<div class="my-24 text-center">ニュース</div>
			<News></News>
		</div>

		<div class="relative mx-auto flex w-[65vw] max-w-[1020px] py-24">
			<div class="absolute left-1/2 top-[36px] h-24 w-24 -translate-x-1/2 bg-white px-4">
				<PiniaIcon class="h-full w-full"></PiniaIcon>
			</div>

			<a href="#" class="w-full border border-black pb-10 pt-12 text-center text-2xl">製品に関する大切なお知らせ ></a>
		</div>

		<div class="mx-auto flex max-w-[1260px] flex-col items-center py-24">
			<div class="my-4">Connect with Audio-Technica</div>
			<div class="mb-7 flex">
				<a href="#" v-for="n in 5" :key="n" class="mx-6">
					<SvgIcon use="account_circle" class="h-9 w-9 hover:opacity-70" />
				</a>
			</div>
			<a href="#" class="mb-4">
				<img class="block h-auto w-44 hover:opacity-70" src="https://dummyimage.com/768X173/e52260/fff" alt="" />
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { SimplifiedProduct } from '~/types';

definePageMeta({
	name: 'home',
});

const recommendProductFetch = reactive(
	await useFetch<SimplifiedProduct[]>('/api/product/promote', {
		params: { type: 'recommend' },
	})
);

const onlineLimitedProductFetch = reactive(
	await useFetch<SimplifiedProduct[]>('/api/product/promote', {
		params: { type: 'online_limited' },
	})
);

const newItemProductFetch = reactive(
	await useFetch<SimplifiedProduct[]>('/api/product/promote', {
		params: { type: 'new_item' },
	})
);
</script>
