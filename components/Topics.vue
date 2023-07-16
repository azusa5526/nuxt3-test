<template>
	<div>
		<div class="grid grid-cols-2">
			<div class="border-r border-black pr-20">
				<div v-if="topicsFetch.data?.length">
					<a href="#" class="hover:opacity-80" draggable="false">
						<div class="relative">
							<img
								class="block h-auto w-full select-none object-contain"
								draggable="false"
								:src="topicsFetch.data[0].image_url"
							/>
						</div>

						<div class="category-decorate relative my-3 text-center text-xs">{{ topicsFetch.data[0].category }}</div>
						<div class="py-5 text-center text-xl font-bold">{{ topicsFetch.data[0].title }}</div>
						<div class="break-all text-sm" v-html="topicsFetch.data[0].content"></div>
					</a>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-8 pl-20">
				<div v-for="(topic, index) in topicsFetch.data?.slice(1)" :key="index">
					<a href="#" class="hover:opacity-70" draggable="false">
						<div class="relative">
							<img class="block h-auto w-full select-none object-contain" draggable="false" :src="topic.image_url" />
						</div>

						<div class="category-decorate relative my-3 text-center text-xs">{{ topic.category }}</div>
						<div class="break-all text-left text-sm">{{ topic.title }}{{ topic.content }}</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Topic } from '~/types';

const topicsFetch = reactive(await useFetch<Topic[]>('/api/topics'));

const topics = [
	{
		image_url: 'https://dummyimage.com/720X540/34eb83/fff',
		category: 'CAMPAIGN',
		title: '【オリジナルフォンタブ：プレゼント】',
		contents:
			'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
	},
	{
		image_url: 'https://dummyimage.com/720X540/34eb83/fff',
		category: 'CAMPAIGN',
		title: '【オリジナルフォンタブ：プレゼント】',
		contents:
			'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
	},
	{
		image_url: 'https://dummyimage.com/720X540/34eb83/fff',
		category: 'CAMPAIGN',
		title: '【オリジナルフォンタブ：プレゼント】',
		contents:
			'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
	},
	{
		image_url: 'https://dummyimage.com/720X540/34eb83/fff',
		category: 'CAMPAIGN',
		title: '【オリジナルフォンタブ：プレゼント】',
		contents:
			'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
	},
	{
		image_url: 'https://dummyimage.com/720X540/34eb83/fff',
		category: 'CAMPAIGN',
		title: '【オリジナルフォンタブ：プレゼント】',
		contents:
			'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
	},
	{
		image_url: 'https://dummyimage.com/720X540/34eb83/fff',
		category: 'CAMPAIGN',
		title: '【オリジナルフォンタブ：プレゼント】',
		contents:
			'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
	},
];
</script>

<style>
.category-decorate::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 1px;
	bottom: -6px;
	left: 50%;
	background-color: black;
	transform: translateX(-50%);
}
</style>
