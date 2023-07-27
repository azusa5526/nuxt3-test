<template>
	<div v-if="naviContent" class="min-h-[480px] w-full px-4 sm:w-3/4 sm:px-0 md:w-1/2 lg:w-[1030px]">
		<div class="mb-6 mt-32 text-6xl font-bold">{{ naviContent.title_eng }}</div>
		<div class="flex flex-col lg:flex-row lg:gap-x-8">
			<div
				class="order-2 mb-4 flex w-full shrink-0 flex-col leading-7 md:pt-1 lg:order-1 lg:mb-0 lg:w-2/5 lg:max-w-[385px]"
			>
				<span class="my-6">{{ naviContent.content }}</span>

				<button
					href="#"
					role="button"
					class="w-52 max-w-[220px] self-center whitespace-nowrap border border-black bg-black px-10 py-3 text-center text-xl text-[#a58c55] duration-300 hover:bg-white lg:hidden"
				>
					MORE ->>
				</button>
			</div>
			<div class="relative order-1 flex flex-col items-center lg:order-2 lg:w-3/5 lg:pr-10">
				<img
					:src="naviContent.image_url"
					class="block h-auto w-full object-contain"
					style="object-position: center center"
				/>
				<button
					href="#"
					role="button"
					class="hidden max-w-[220px] whitespace-nowrap border border-black bg-black px-10 py-3 text-center text-xl text-[#a58c55] duration-300 hover:bg-white sm:absolute sm:-bottom-5 sm:-right-3 lg:right-6 lg:block lg:px-16 lg:py-5 lg:text-2xl"
				>
					MORE ->>
				</button>
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
