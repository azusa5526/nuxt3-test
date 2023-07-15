<template>
	<div class="grid grid-cols-3 place-content-stretch gap-10">
		<div v-for="(navContent, index) in naviContents.data" :key="index">
			<a :href="navContent.route" class="hover:opacity-80" draggable="false">
				<div class="relative">
					<img
						class="mb-2 block h-auto w-full select-none object-contain"
						draggable="false"
						:src="navContent.image_url"
					/>
					<span
						class="absolute right-0 top-1/2 flex w-[60%] -translate-y-1/2 items-center justify-start bg-red-200 bg-white/70 py-1 pl-5 pr-1 text-sm font-bold"
					>
						{{ navContent.title_eng }}
					</span>
				</div>

				<div>
					<div class="py-5 text-center font-bold">{{ navContent.title_jp }}</div>
					<div class="break-all text-sm" v-html="navContent.content"></div>
				</div>
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { INaviContent } from '~/types';

const naviContents = reactive(await useFetch<INaviContent[]>('/api/navi-contents'));
</script>
