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
			<CarouselProduct :carousel-products="productOnlineStoreOnly" class="mx-auto max-w-[1300px]"></CarouselProduct>
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
			<CarouselProductNew :carousel-products="productNew" class="mx-auto max-w-[1300px]"></CarouselProductNew>
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
			<div class="flex">
				<SvgIcon v-for="n in 5" :key="n" use="account_circle" class="mx-6 mb-7 h-9 w-9 hover:opacity-70" />
			</div>
			<img class="mb-4 block h-auto w-44 hover:opacity-70" src="https://dummyimage.com/768X173/e52260/fff" alt="" />
		</div>
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
const productNew = [
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
	{
		image_url: 'https://dummyimage.com/300X300/fff/000',
		page: 'ATH-WB2022',
		description: '60周年記念モデル | 心震わす感動を、ワイヤレスと有線で。前人未踏のハイエンドデジタル接続ヘッドホン。',
		release_date: '2023年01月20日',
		product_id: 50,
		name: 'ワイヤレスヘッドホン',
		model_number: 'ATH-WB2022',
	},
];
</script>
