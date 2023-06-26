<template>
	<div
		class="flex h-[var(--app-header-height)] w-screen justify-between text-white duration-300 hover:bg-white hover:text-black hover:shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]"
		:class="
			isScrollPositionTop ? 'bg-transparent text-white' : 'bg-white !text-black shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]'
		"
	>
		<div class="flex items-center">
			<button
				@click.stop="isDrawerShow = !isDrawerShow"
				class="block h-full bg-black/20 px-4 py-2 text-white lg:hidden"
			>
				Toggle
			</button>
			<h1 class="ml-5 mr-20 flex items-center text-xl font-bold">
				<PiniaIcon class="!m-0 !mb-2 h-12 w-12"></PiniaIcon>
				audio-Technica
			</h1>
			<ul class="flex h-full items-center">
				<li
					@mouseover="hoveredHeaderItem = headerItem"
					class="mx-5 flex h-full cursor-pointer items-center whitespace-nowrap"
					v-for="headerItem in headerItems"
					:key="headerItem.displayName"
				>
					{{ headerItem.displayName }}

					<template v-if="headerItem.menuComponent">
						<Transition name="slide-fade" mode="out-in">
							<ul
								@mouseleave="hoveredHeaderItem = undefined"
								v-show="hoveredHeaderItem && hoveredHeaderItem.displayName === headerItem.displayName"
								class="absolute left-0 top-0 -z-10 h-[420px] w-full bg-white p-5 pt-[var(--app-header-height)] shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]"
							>
								{{
									headerItem.menuComponent
								}}
								<component :is="headerItem.menuComponent"></component>
							</ul>
						</Transition>
					</template>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import { throttle } from 'lodash';
import { useEventListener } from '@vueuse/core';

const appStore = useAppStore();
const { isDrawerShow } = storeToRefs(appStore);

onMounted(() => {
	useEventListener(document, 'scroll', isTopHandler);
	isScrollPositionTop.value = document.body.getBoundingClientRect().y === 0;
});

const isScrollPositionTop = ref(true);
const isTopHandler = throttle(() => {
	document.body.getBoundingClientRect().y === 0
		? (isScrollPositionTop.value = true)
		: (isScrollPositionTop.value = false);
}, 200);

const CorporateProductMenu = resolveComponent('CorporateProductMenu');
const PersonalProductMenu = resolveComponent('PersonalProductMenu');

const headerItems = [
	{ displayName: '個人向け製品 A', menuComponent: 'PersonalProductMenu' },
	{ displayName: '個人向け製品 B' },
	{ displayName: '個人向け製品 C', menuComponent: 'CorporateProductMenu' },
	{ displayName: '個人向け製品 D' },
	{ displayName: '個人向け製品 E' },
	{ displayName: '個人向け製品 F' },
];

type HeaderItem = {
	displayName: string;
	menuComponent?: string;
};

const hoveredHeaderItem = ref<HeaderItem | undefined>();

function test() {
	console.log('test');
}
</script>

<style scoped>
.slide-fade-enter-active {
	transition: all 0.3s ease;
	transition-delay: 100ms;
}
.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-100px);
	opacity: 0;
}
</style>
