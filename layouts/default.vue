<template>
	<div class="flex h-screen flex-col">
		<AppHeader class="fixed shrink-0" />
		<main class="grow pt-[var(--app-header-height)]">
			<slot></slot>
		</main>
		<AppFooter class="shrink-0" />
	</div>
</template>
