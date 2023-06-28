<template>
	<div>
		<CarouselHome></CarouselHome>
		<div class="pb-12 pt-9 text-center">
			<a href="#" class="text-lg">製品に関する大切なお知らせ</a>
		</div>

		<div class="pb-12">
			<div class="my-10 text-center">おすすめアイテム</div>
			<CarouselProduct :carousel-products="productRecommand" class="mx-auto max-w-[1300px]"></CarouselProduct>
		</div>

		<div class="pb-12">
			<div class="my-10 text-center">オンラインストア限定</div>
			<CarouselProduct
				:carousel-products="productOnlineStoreOnly"
				class="mx-auto max-w-[1300px] pb-12"
			></CarouselProduct>
		</div>

		<div class="mx-auto max-w-[1400px] px-5 py-24">
			<div class="my-10 text-center">ナビコンテンツ</div>
			<NavContents></NavContents>
		</div>

		<div class="mx-auto max-w-[80vw] py-24">
			<div class="my-10 text-center">トピックス</div>
			<Topics></Topics>
		</div>

		<a href="#">
			<div class="relative py-16">
				<div>
					良い音で、
					<br class="block lg:hidden" />
					大人はもっと楽しくなる。
				</div>
				<div>
					WIRED EARPHONES/ HEADPHONES
					<br class="block lg:hidden" />
					PREMIUM LINEUP
				</div>
				<div>
					自分の価値観や美意識にこだわりをもって暮らす方々の
					<br class="block lg:hidden" />
					良い音の楽しみ方を公開中！
				</div>

				<div>MORE</div>

				<!-- <img
					class="absolute w-full select-none object-contain"
					draggable="false"
					src="https://dummyimage.com/1920X494/26e3fc/fff"
				/> -->
			</div>
		</a>
	</div>
</template>

<script lang="ts" setup>
const productRecommand = [
	{
		image_url: 'https://dummyimage.com/300X300/e52260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50,000',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['#f5185b'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3391,
			},
			{
				codes: ['#eef518', '#18f532'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3392,
			},
			{
				codes: ['#f70c56', '#0ceff7', '#e3f70c'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3395,
			},
			{
				codes: ['#ffffff'],
				image_url: 'https://dummyimage.com/300X300/e52260/fff',
				product_branch_id: 3393,
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
				codes: ['#0ceff7'],
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
				codes: ['#66cdaa'],
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
	},
];
const productOnlineStoreOnly = [
	{
		image_url: 'https://dummyimage.com/300X300/e62260/fff',
		page: 'ATH-GDL3_NAR',
		price: '50',
		product_id: 50,
		name: 'ゲーミングヘッドセット',
		model_number: 'ATH-GDL3 NAR',
		colors: [
			{
				codes: ['#0ceff7'],
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
				codes: ['#66cdaa'],
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
	},
];
</script>
