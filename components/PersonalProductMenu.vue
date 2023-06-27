<template>
	<li
		v-for="menuItem in menuItems"
		:key="menuItem.displayName"
		class="flex h-full w-[calc(100%/7)] max-w-[240px] flex-col items-center border-black text-black first:border-l first:border-r"
	>
		<p class="mb-2">{{ menuItem.displayName }}</p>
		<img class="w-[100px]" :src="menuItem.imageUrl" alt="" />

		<ul>
			<li
				class="text-underline-decorator py-2 text-center"
				v-for="(category, index) in menuItem.categories"
				:key="`${category.displayName}${index}`"
			>
				<a href="#"><span v-html="category.displayName"></span></a>
			</li>
		</ul>
	</li>
</template>

<script lang="ts" setup>
const menuItems = [
	{
		displayName: 'ONLINE LIMITED',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: '<p style="margin-bottom: 0.5rem">オンラインストア<br>限定モデル</p>', query: '' },
			{ displayName: 'ターンテーブル', query: '' },
			{ displayName: 'イヤホン', query: '' },
		],
	},
	{
		displayName: 'HEADPHONES',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
	{
		displayName: 'EARPHONES',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
	{
		displayName: 'MICROPHONES',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
			{ displayName: 'ワイヤード', query: '' },
		],
	},
	{
		displayName: 'ANALOG PRODUCTS',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
	{
		displayName: 'AV ACCESSORIES',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
	{
		displayName: 'CAR AUDIO ACCESSORIES',
		imageUrl: 'https://dummyimage.com/500x370/f57b25/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
];
</script>
