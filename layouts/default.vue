<template>
  <div class="flex flex-col h-screen">
    <AppHeader class="shrink-0 fixed" />
    <main class="pt-[var(--app-header-height)]">
      <slot></slot>
    </main>
    <AppFooter class="shrink-0" />
  </div>
</template>