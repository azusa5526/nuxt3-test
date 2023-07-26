<template>
	<div class="flex h-screen flex-col">
		<AppSidebar class="z-50 block w-[--app-sidebar-width] bg-white lg:hidden" />
		<AppHeader class="fixed z-40 shrink-0" />
		<main class="mb-12 grow" :class="{ 'pt-[var(--app-header-height)]': !isHome }">
			<slot></slot>
		</main>
		<AppFooter class="shrink-0" />
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import type { Category, INaviContent } from '~/types';

const route = useRoute();
const isHome = computed(() => route.name === 'home');
const appStore = useAppStore();

const { data: castegories } = await useFetch<Category[]>('/api/category');
if (castegories.value) appStore.personalCategories = castegories.value;

const { data: naviContents } = await useFetch<INaviContent[]>('/api/navi-contents');
if (naviContents.value) appStore.naviContents = naviContents.value;
</script>
