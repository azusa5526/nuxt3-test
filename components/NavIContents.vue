<template>
	<div class="grid grid-cols-1 place-content-stretch gap-5 md:grid-cols-3 md:gap-10">
		<div v-for="(navContent, index) in appStore.naviContents" :key="index">
			<a :herf="navContent.route" class="flex items-center hover:opacity-80 md:block" draggable="false">
				<div class="relative mr-4 w-1/2 shrink-0 md:m-0 md:w-full">
					<img
						class="block h-auto w-full select-none object-contain md:mb-2"
						draggable="false"
						:src="navContent.image_url"
					/>
					<span
						class="absolute right-0 top-1/2 hidden w-[60%] -translate-y-1/2 items-center justify-start bg-red-200 bg-white/70 py-1 pl-5 pr-1 text-sm font-bold md:flex"
					>
						{{ navContent.title_eng }}
					</span>
				</div>

				<div>
					<span class="block py-5 text-center text-sm font-bold md:text-base">{{ navContent.title_jp }}</span>
					<span class="break-all text-[10px] md:text-sm" v-html="navContent.content"></span>
				</div>
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
const appStore = useAppStore();
</script>
