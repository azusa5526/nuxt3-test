<template>
	<div class="flex h-screen flex-col">
		<AppSidebar :isShow="isDrawerShow" class="w-[--app-sidebar-width] bg-white" />
		<AppHeader class="fixed shrink-0" />
		<main class="grow pt-[var(--app-header-height)]">
			<slot></slot>
		</main>
		<AppFooter class="shrink-0" />
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { isDrawerShow } = storeToRefs(appStore);
</script>
