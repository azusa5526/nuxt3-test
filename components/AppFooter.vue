<template>
	<div class="w-100 flex flex-wrap bg-[#404040] px-16 pt-14 text-white">
		<div class="mr-24 flex !h-10 items-center">
			<PiniaIcon class="mx-0 h-10 w-10"></PiniaIcon>
			<span class="text-lg">audio-Technica</span>
		</div>

		<div class="mb-14 flex text-sm">
			<div v-for="footerItem in footerItems" :key="footerItem.category" class="mr-14 flex flex-col">
				<div class="mb-6">{{ footerItem.category }}</div>
				<ul>
					<li v-for="menuItem in footerItem.menuItems" :key="menuItem.name">
						<a href="#" class="leading-6 hover:opacity-70">{{ menuItem.name }}</a>
					</li>
				</ul>
			</div>
			<div class="mr-10 flex flex-col">
				<ul>
					<li v-for="infoItem in infoItems" :key="infoItem.name">
						<a href="#" class="leading-6 hover:opacity-70">{{ infoItem.name }}</a>
					</li>
				</ul>
			</div>
			<div class="flex">
				<a href="#" v-for="n in 5" :key="n" class="mx-2">
					<SvgIcon use="account_circle" class="h-9 w-9 hover:opacity-70" />
				</a>
			</div>
		</div>

		<div class="flex w-full justify-center p-5 text-sm">@ For practice use only.</div>
	</div>
</template>

<script lang="ts" setup>
const footerItems = [
	{
		category: '個人向け製品',
		menuItems: [
			{ name: 'オンラインストア限定', query: '' },
			{ name: 'ヘッドホン', query: '' },
			{ name: 'イヤホン', query: '' },
			{ name: 'マイクロホン', query: '' },
			{ name: 'アナログ', query: '' },
			{ name: 'AVアクセサリー', query: '' },
			{ name: '車載製品', query: '' },
			{ name: '部品/付属品', query: '' },
		],
	},
	{
		category: '法人向け製品',
		menuItems: [
			{ name: 'ソリューション・事例', query: '' },
			{ name: '設備音響製品', query: '' },
			{ name: 'カラオケ機器製品', query: '' },
			{ name: '産業用クリーニング製品', query: '' },
			{ name: 'OEM/ODM', query: '' },
			{ name: '半導体レーザー応用製品', query: '' },
		],
	},
	{
		category: 'サポート',
		menuItems: [
			{ name: 'ソリューション・事例', query: '' },
			{ name: '設備音響製品', query: '' },
			{ name: 'カラオケ機器製品', query: '' },
		],
	},
	{
		category: 'お問い合わせ',
		menuItems: [
			{ name: 'ソリューション・事例', query: '' },
			{ name: '設備音響製品', query: '' },
		],
	},
	{
		category: '企業情報',
		menuItems: [
			{ name: 'ソリューション・事例', query: '' },
			{ name: '設備音響製品', query: '' },
			{ name: 'カラオケ機器製品', query: '' },
			{ name: '産業用クリーニング製品', query: '' },
		],
	},
];

const infoItems = [
	{ name: 'ソリューション・事例', query: '' },
	{ name: '設備音響製品', query: '' },
	{ name: '設備音響製品', query: '' },
];
</script>
