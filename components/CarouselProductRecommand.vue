<template>
	<div class="relative px-16">
		<div class="overflow-x-hidden" ref="emblaNode">
			<div class="flex w-full will-change-transform">
				<div
					v-for="(carouselItem, index) in carouselItems"
					:key="index"
					class="flex w-1/4 shrink-0 grow-0 flex-col px-2.5"
				>
					<a href="#">
						<img class="block h-auto w-full select-none object-contain" :src="carouselItem.image_url" />
					</a>
					<div class="mt-5 flex min-h-[200px] flex-col items-center bg-slate-400">
						<p class="mb-4">{{ carouselItem.name }}</p>
						<p class="mb-2">{{ carouselItem.model_number }}</p>

						<ul class="mb-2 flex" v-if="carouselItem.colors.length">
							<li v-for="color in carouselItem.colors" class="flex h-6 w-6 rounded-[50%]" :style="testStyle()"></li>
						</ul>

						<p class="my-2">￥{{ carouselItem.price }} (税込)</p>
					</div>
				</div>
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
	{
		image_url: 'https://dummyimage.com/300X300/e62260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50,000',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['f5185b'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
			{
				codes: ['66cdaa', '18e2f5'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
		],
	},
	{
		image_url: 'https://dummyimage.com/300X300/e62260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['66cdaa'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
		],
	},
	{
		image_url: 'https://dummyimage.com/300X300/e62260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['66cdaa'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
		],
	},
	{
		image_url: 'https://dummyimage.com/300X300/e62260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['66cdaa'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
		],
	},
	{
		image_url: 'https://dummyimage.com/300X300/e62260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['66cdaa'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
		],
	},
];

onMounted(() => {
	window.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'd') {
			console.log(testStyle());
		}
	});
});

function testStyle() {
	const codes = ['#8bd12a', '#f2cf00', '#36c', '#f24949'];
	let str = '';

	codes.forEach((code, index, array) => {
		if (index === 0) {
			str = str + `${code} ${(1 / array.length) * 100}%, `;
			console.log('ZERO', str);
		} else if (index + 1 === array.length) {
			str = str + `${code} 0`;
			console.log('E', str);
		} else {
			str = str + `${code} 0, ${code} ${((index + 1) / array.length) * 100}%, `;
			console.log('M', str);
		}
	});
	console.log(`background: linear-gradient(120deg, ${str})`);
	return `background: linear-gradient(120deg, ${str})`;
}
</script>
