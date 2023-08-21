<template>
	<div class="mb-7 flex">
		<a
			:href="iconItem.route"
			target="_blank"
			v-for="(iconItem, index) in iconItems"
			:key="index"
			class="mx-3 flex items-center md:mx-5"
		>
			<SvgIcon :use="iconItem.icon" class="h-10 w-10 items-center hover:opacity-70" :class="iconItem.class" />
		</a>
	</div>
	<a target="_blank" href="https://www.audio-technica.co.jp/CreatorCommunity/" class="mb-4">
		<img class="block h-auto w-44 hover:opacity-70" src="/images/pc/creator-community.png" alt="" />
	</a>
</template>

<script lang="ts" setup>
const iconItems = [
	{ icon: 'logo_facebook', route: 'http://www.facebook.com/audiotechnicajapan' },
	{ icon: 'logo_Instagram', class: '!h-8 !w-8', route: 'https://www.instagram.com/audiotechnicajp/' },
	{ icon: 'logo_twitter', route: 'https://twitter.com/audiotechnicajp' },
	{ icon: 'logo_line', route: 'https://lin.ee/ftssWv2' },
	{ icon: 'logo_youtube', route: 'http://www.youtube.com/user/audiotechnicajapan' },
];
</script>
