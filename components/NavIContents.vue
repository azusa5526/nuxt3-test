<template>
	<div class="grid grid-cols-3 place-content-stretch gap-10">
		<div v-for="(navContent, index) in naviContents.data" :key="index">
			<NuxtLink :to="navContent.route" class="hover:opacity-80" draggable="false">
				<span class="relative">
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
				</span>

				<span>
					<span class="block py-5 text-center font-bold">{{ navContent.title_jp }}</span>
					<span class="break-all text-sm" v-html="navContent.content"></span>
				</span>
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { INaviContent } from '~/types';

const naviContents = reactive(await useFetch<INaviContent[]>('/api/navi-contents'));
</script>
