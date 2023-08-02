<template>
	<ContentDoc class="feature-content" path="/prod/ATH-M50x/feature" />
</template>

<script lang="ts" setup>
// const contentQuery = await queryContent().find();
// console.log(contentQuery);
</script>

<style lang="scss">
.feature-content {
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		padding-top: 2rem;
		padding-bottom: 2rem;
		margin: 0 auto;
		max-width: 760px;
	}

	p {
		max-width: 812px;
		text-align: start;
		margin: 0 auto;

	}
}
</style>
