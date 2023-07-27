<template>
	<div v-if="naviContent" class="min-h-[480px] w-3/4 md:w-1/2 lg:w-[1030px]">
		<div class="mb-8 text-6xl font-bold">{{ naviContent.title_eng }}</div>
		<div class="flex flex-col lg:flex-row lg:gap-x-6">
			<div class="mb-4 w-full shrink-0 lg:mb-0 lg:w-2/5 lg:max-w-[385px]">{{ naviContent.content }}</div>
			<div class="relative lg:w-3/5">
				<img
					:src="naviContent.image_url"
					class="block h-auto w-full object-contain lg:w-3/4"
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
