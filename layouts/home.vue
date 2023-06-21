<template>
	<div class="flex h-screen flex-col">
		<AppSidebar class="block w-[--app-sidebar-width] bg-white xl:hidden" />
		<AppHeader class="fixed shrink-0" />
		<main class="grow">
			<slot></slot>
		</main>
		<AppFooter class="shrink-0" />
	</div>
</template>

<script lang="ts" setup></script>
