<template>
	<div v-if="naviContent" class="min-h-[480px] w-[1030px]">
		<div class="mb-8 text-6xl font-bold">{{ naviContent.title_eng }}</div>
		<div class="flex">
			<div class="w-2/5 max-w-[385px] shrink-0">{{ naviContent.content }}</div>
			<div class="relative w-3/5">
				<img
					:src="naviContent.image_url"
					class="absolute left-[50px] block h-auto w-3/4 object-contain"
					style="object-position: center center"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
const appStore = useAppStore();
const props = defineProps<{ name: string }>();

const nameRouteMap = new Map([
	['headphone', '/headphone/navi/'],
	['earphone', '/headphone/navi/'],
	['microphone', '/microphone/navi/'],
	['cartridge', '/cartridge/navi/'],
]);

const naviContent = computed(() => {
	const targetRoute = nameRouteMap.get(props.name);
	if (targetRoute) {
		return appStore.naviContents.find((naviConent) => naviConent.route === targetRoute);
	} else {
		return null;
	}
});
</script>
