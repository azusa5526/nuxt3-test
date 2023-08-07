<template>
	<div v-if="product.technical_data" class="w-[900px] mx-auto mt-10 text-sm leading-6">
		<div v-if="product.technical_data?.spec.length">
			<div v-for="spec in product.technical_data.spec" class="py-8 border-b border-[#BFBFBF] px-20">
				<div v-for="item in spec.items">
					<div v-if="spec.title" class="my-3 title-dot">{{ spec.title }}</div>
					<div class="flex flex-wrap">
						<div class="w-2/5">{{ item.name }}</div>
						<div class="w-3/5">
							<div v-if="Array.isArray(item.value)">
								<div v-for="value in item.value">{{ value }}</div>
							</div>
							<div v-else>{{ item.value }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-if="product.technical_data.info" class="py-8 border-b border-[#BFBFBF] px-20">
			<div v-if="product.technical_data.info.accessories">
				<div class="my-3 title-dot">付属品</div>
				<div>{{ product.technical_data.info.accessories }}</div>
			</div>
			<div v-if="product.technical_data.info.sold_separately">
				<div class="my-3 title-dot">別売</div>
				<div>{{ product.technical_data.info.sold_separately }}</div>
			</div>
		</div>

		<div class="py-10 border-b border-[#BFBFBF] px-20">
			<div v-if="product.technical_data.notice">{{ product.technical_data.notice }}</div>
			<div v-else>（ 改良などのため予告なく変更することがあります。）</div>
		</div>

		<div class="grid grid-cols-1  md:grid-cols-3 [&>div]:p-3 text-center border-b border-[#BFBFBF] mb-[276px]">
			<div class="border-r border-[#BFBFBF]">
				<div class="mb-5">型番</div>
				<div v-for="branch in product.branches" :key="branch.id">{{ branch.model }}</div>
			</div>
			<div class="border-r border-[#BFBFBF]">
				<div class="mb-5">JANコード</div>
				<div v-for="branch in product.branches" :key="branch.id">{{ branch.jan_code }}</div>
			</div>
			<div>
				<div class="mb-5">発売日</div>
				<div v-for="branch in product.branches" :key="branch.id"> {{ branch.release_at ?
					getFormattedDate(branch.release_at) : '-' }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types';
import { formatDateTime } from '~/utils/datetime';
defineProps<{ product: Product }>()

function getFormattedDate(datestring: string) {
	const date = formatDateTime(new Date(datestring));
	return `${date.YY}年${date.MM}月${date.DD}日`;
}
</script>

<style lang="scss">
.title-dot::before {
	content: "";
	border-radius: 50%;
	background-color: #000;
	width: 1em;
	height: 1em;
	display: inline-block;
	vertical-align: middle;
	margin-right: 12px;
}
</style>
