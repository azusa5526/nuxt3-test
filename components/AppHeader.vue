<template>
	<div
		class="group flex h-[var(--app-header-height)] w-full justify-between text-white duration-300 hover:bg-white hover:text-black hover:shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]"
		:class="[
			isHome && isScrollPositionTop ? 'bg-transparent text-white' : 'bg-white !text-black',
			isScrollPositionTop ? '' : 'shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]',
		]"
	>
		<div class="flex items-center">
			<button @click.stop="isDrawerShow = !isDrawerShow" class="block h-full px-4 py-2 lg:hidden">
				<SvgIcon
					use="menu"
					class="h-6 w-6 text-white transition-all group-hover:text-black"
					:class="isHome && isScrollPositionTop ? 'text-white' : '!text-black'"
				></SvgIcon>
			</button>
			<NuxtLink class="ml-5 hover:opacity-70 md:mr-20" :to="{ name: 'home' }">
				<h1 class="flex items-center text-xl font-bold">
					<PiniaIcon class="!m-0 !mb-2 h-12 w-12"></PiniaIcon>
					audio-Technica
				</h1>
			</NuxtLink>

			<ul class="hidden h-full items-center lg:flex">
				<li
					@mouseover="hoveredHeaderItem = headerItem"
					@mouseleave="hoveredHeaderItem = undefined"
					class="text-underline-decorator mx-5 flex h-full cursor-pointer items-center whitespace-nowrap"
					v-for="headerItem in headerItems"
					:key="headerItem.displayName"
				>
					<NuxtLink v-if="headerItem.routeName" :to="{ name: headerItem.routeName }" class="text-sm font-bold">
						{{ headerItem.displayName }}
					</NuxtLink>
					<span v-else class="text-sm font-bold">{{ headerItem.displayName }}</span>

					<template v-if="headerItem.menuComponent">
						<Transition name="slide-fade" mode="out-in">
							<ul
								v-show="hoveredHeaderItem && hoveredHeaderItem.displayName === headerItem.displayName"
								class="absolute left-0 top-0 -z-10 flex h-[510px] w-full cursor-default justify-center bg-white p-5 pt-[var(--app-header-height)] shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]"
							>
								<component :is="headerItem.menuComponent"></component>
							</ul>
						</Transition>
					</template>
				</li>
			</ul>
		</div>

		<div class="mr-3 flex items-center lg:mr-7 [&>button:hover]:opacity-40 [&>button]:p-2.5">
			<button class="hidden lg:block"><SvgIcon use="account_circle" class="h-6 w-6"></SvgIcon></button>
			<button><SvgIcon use="search" class="h-6 w-6"></SvgIcon></button>
			<button><SvgIcon use="shopping_cart" class="h-6 w-6"></SvgIcon></button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import { throttle } from 'lodash';
import { useEventListener } from '@vueuse/core';
import type { Component } from 'vue';
import PersonalProductMenu from '@/components/PersonalProductMenu.vue';
import CorporateProductMenu from '@/components/CorporateProductMenu.vue';

const route = useRoute();
const isHome = computed(() => route.name === 'home');
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

const headerItems = [
	{ displayName: '個人向け製品', menuComponent: PersonalProductMenu },
	{ displayName: 'サポート', routeName: 'support' },
	{ displayName: '法人向け製品', menuComponent: CorporateProductMenu },
	{ displayName: 'ニュース', routeName: 'news' },
	{ displayName: '企業情報', routeName: 'corp' },
	{ displayName: 'Always Listening' },
];

type HeaderItem = {
	displayName: string;
	routeName?: string;
	menuComponent?: Component;
};

const hoveredHeaderItem = ref<HeaderItem | undefined>();
// const hoveredHeaderItem = ref<HeaderItem | undefined>(headerItems[0]);

function test() {
	console.log('leave');
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
	transform: translateY(-70px);
	opacity: 0;
}
</style>

<style lang="scss" scoped>
// .text-underline-decorator {
// 	:first-child {
// 		position: relative;

// 		&::after {
// 			content: '';
// 			width: 100%;
// 			height: 1px;
// 			background-color: black;
// 			position: absolute;
// 			bottom: 0;
// 			left: 0;
// 			transition-duration: 200ms;
// 			opacity: 0;
// 			transform: translateY(8px);
// 		}
// 	}

// 	&:hover {
// 		span::after {
// 			transform: translateY(4px);
// 			opacity: 1;
// 		}
// 	}
// }
</style>
