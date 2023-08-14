<template>
	<div>
		<div class="mb-48 grid grid-cols-1 place-content-stretch gap-14 md:grid-cols-2 md:gap-[90px]">
			<div v-for="news in newsFetch.data" :key="news.id" class="flex">
				<a
					href="#"
					class="mr-2 h-[106px] w-[160px] shrink-0 border border-gray-300 hover:opacity-70 md:mr-5 md:h-[145px] md:w-[217px]"
					draggable="false"
				>
					<img class="block h-full w-full select-none object-cover" draggable="false" :src="news.image_url" />
				</a>

				<div class="flex shrink flex-col">
					<div class="text-underline relative mb-2 w-fit break-all">{{ news.category_id }}</div>
					<div class="mb-6 text-sm">{{ getFormattedData(news.create_time) }}</div>
					<a href="#" class="text-sm hover:opacity-70" draggable="false">{{ news.content }}</a>
				</div>
			</div>
		</div>
		<div class="text-center">
			<a href="#" class="news-decorate relative text-lg">NEWS 一覧</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { News } from '~/types';
import { formatDateTime } from '@/utils/datetime';

const newsFetch = reactive(await useFetch<News[]>('/api/news'));

function getFormattedData(datestring: string) {
	const date = formatDateTime(new Date(datestring));
	return `${date.YY}.${date.MM}.${date.DD}`;
}
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
