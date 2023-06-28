<template>
	<div class="grid grid-cols-3 place-content-stretch !gap-10">
		<div v-for="(navItem, index) in navItems" :key="index">
			<a href="#" class="hover:opacity-70" draggable="false">
				<div class="relative">
					<img class="mb-2 block h-auto w-full select-none object-contain" draggable="false" :src="navItem.image_url" />
					<span
						class="absolute right-0 top-1/2 flex w-[60%] -translate-y-1/2 items-center justify-start bg-red-200 bg-white/70 py-1 pl-5 pr-1 text-sm"
					>
						{{ navItem.flag }}
					</span>
				</div>

				<div>
					<div class="py-5 text-center font-bold">{{ navItem.title }}</div>
					<div v-html="navItem.contents"></div>
				</div>
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
const navItems = [
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		title: 'ヘッドホン・イヤホンナビ',
		flag: 'Headphone Earphone Navi',
		contents:
			'<p>スマートフォンとともに日々の暮らしに欠かせないヘッドホン・イヤホン。あなたが好きな音楽や動画をより快適に聴くために、何を基準に選べばいいか？ たくさんのヒントをご用意しました。お気に入りの1台にきっと出会えます。</p><p>オーディオテクニカのヘッドホン・イヤホン:お気に入りの1台にきっと出会えます。</p>',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		title: 'ヘッドホン・イヤホンナビ',
		flag: 'Headphone Earphone Navi',
		contents:
			'<p>スマートフォンとともに日々の暮らしに欠かせないヘッドホン・イヤホン。あなたが好きな音楽や動画をより快適に聴くために、何を基準に選べばいいか？ たくさんのヒントをご用意しました。お気に入りの1台にきっと出会えます。</p><p>オーディオテクニカのヘッドホン・イヤホン:お気に入りの1台にきっと出会えます。</p>',
	},
	{
		image_url: 'https://dummyimage.com/750X475/26e3fc/fff',
		title: 'ヘッドホン・イヤホンナビ',
		flag: 'Headphone Earphone Navi',
		contents:
			'<p>スマートフォンとともに日々の暮らしに欠かせないヘッドホン・イヤホン。あなたが好きな音楽や動画をより快適に聴くために、何を基準に選べばいいか？ たくさんのヒントをご用意しました。お気に入りの1台にきっと出会えます。</p><p>オーディオテクニカのヘッドホン・イヤホン:お気に入りの1台にきっと出会えます。</p>',
	},
];
</script>
