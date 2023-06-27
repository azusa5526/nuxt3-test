<template>
	<li
		v-for="menuItem in menuItems"
		:key="menuItem.displayName"
		class="flex h-full w-[calc(100%/5)] max-w-[330px] flex-col items-center text-black"
	>
		<p>{{ menuItem.displayName }}</p>
		<a href="#" class="mx-6 mb-2 mt-5">
			<img class="w-full" :src="menuItem.imageUrl" alt="" />
		</a>

		<ul class="w-full">
			<li
				class="py-2 text-center"
				v-for="(category, index) in menuItem.categories"
				:key="`${category.displayName}${index}`"
			>
				<a href="#" v-html="category.displayName"></a>
			</li>
		</ul>
	</li>
</template>

<script lang="ts" setup>
const menuItems = [
	{
		displayName: 'プロオーディオ',
		imageUrl: 'https://dummyimage.com/280x107/f5276c/ffffff',
		categories: [
			{ displayName: '<p style="margin-bottom: 0.5rem">オンラインストア<br>限定モデル</p>', query: '' },
			{ displayName: 'ターンテーブル', query: '' },
			{ displayName: 'イヤホン', query: '' },
		],
	},
	{
		displayName: '業務用カラオケ',
		imageUrl: 'https://dummyimage.com/280x107/f5276c/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
	{
		displayName: '産業用クリーニング',
		imageUrl: 'https://dummyimage.com/280x107/f5276c/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{
				displayName: '<p class="py-4 my-2 border-t border-b border-black">クリーニング製品<br>オンラインストア</p>',
				query: '',
			},
		],
	},
	{
		displayName: 'OEM/ODM',
		imageUrl: 'https://dummyimage.com/280x107/f5276c/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
			{ displayName: 'ワイヤード', query: '' },
		],
	},
	{
		displayName: '半導体レーザー応用製品',
		imageUrl: 'https://dummyimage.com/280x107/f5276c/ffffff',
		categories: [
			{ displayName: 'ワイヤード', query: '' },
			{ displayName: 'ワイヤレス', query: '' },
			{ displayName: 'DJ/モニター', query: '' },
		],
	},
];
</script>
