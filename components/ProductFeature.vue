<template>
	<div>
		<span>ProductFeature.vue</span>
		<ContentDoc path="/prod/ATH-M50x/feature" />
	</div>
</template>

<script lang="ts" setup>
const contentQuery = await queryContent().find();
console.log(contentQuery);
</script>
