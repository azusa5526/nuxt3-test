<template>
	<ul>
		<li v-for="n in 10" :key="n" class="py-12">{{ n }}</li>
	</ul>
</template>

<script lang="ts" setup></script>
