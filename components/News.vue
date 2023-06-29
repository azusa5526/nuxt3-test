<template>
	<div>
		<div class="mb-48 grid grid-cols-2 place-content-stretch gap-[90px]">
			<div v-for="(news, index) in newsItems" :key="index" class="flex">
				<a href="#" class="mr-5 shrink-0 hover:opacity-70" draggable="false">
					<img class="mb-2 block h-auto w-[220px] select-none object-contain" draggable="false" :src="news.image_url" />
				</a>

				<div class="flex flex-col">
					<div class="text-underline relative mb-2 w-fit">{{ news.category }}</div>
					<div class="mb-6 text-sm">{{ news.release_date }}</div>
					<a href="#" class="text-sm hover:opacity-70" draggable="false">{{ news.contents }}</a>
				</div>
			</div>
		</div>
		<div class="text-center">
			<a href="#" class="news-decorate relative text-lg">NEWS 一覧</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
const newsItems = [
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		category: '一般製品',
		release_date: '2023.06.16',
		contents:
			'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		category: '一般製品',
		release_date: '2023.06.16',
		contents:
			'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		category: '一般製品',
		release_date: '2023.06.16',
		contents:
			'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		category: '一般製品',
		release_date: '2023.06.16',
		contents:
			'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		category: '一般製品',
		release_date: '2023.06.16',
		contents:
			'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		category: '一般製品',
		release_date: '2023.06.16',
		contents:
			'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
	},
];
</script>

<style scoped>
.text-underline::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 1px;
	bottom: -4px;
	left: 50%;
	background-color: black;
	transform: translateX(-50%);
}

.news-decorate::before {
	content: '';
	position: absolute;
	width: 1px;
	height: 100px;
	top: -120px;
	left: 50%;
	background-color: black;
}

.news-decorate::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 1px;
	bottom: -4px;
	left: 50%;
	background-color: black;
	transform: translateX(-50%);
}
</style>
