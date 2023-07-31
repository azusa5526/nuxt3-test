<template>
	<div>
		<ContentDoc class="feature-content" path="/prod/ATH-M50x/feature" />
	</div>
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
	h1 {
		font-size: 36px;
		font-weight: bold;
	}

	h4 {
		font-weight: bold;
	}

	p {
		max-width: 812px;
	}
}
</style>
