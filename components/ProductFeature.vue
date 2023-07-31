<template>
	<div>
		<span>ProductFeature.vue</span>
		<ContentRenderer :value="testMarkdown">
			<h1>{{ testMarkdown.value }}</h1>
		</ContentRenderer>
	</div>
</template>

<script lang="ts" setup>
const testMarkdown = { value: '# Azure 代理程式集區' };
</script>
