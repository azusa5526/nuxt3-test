<template>
	<div class="mx-auto mt-14 w-full max-w-[1090px] ct_md:mt-20">
		<div
			class="mx-auto mb-20 flex max-w-[500px] flex-col items-center border-b border-[#BFBFBF] px-4 pb-14 ct_md:max-w-none ct_md:flex-row ct_md:items-start"
		>
			<div class="ct_md:mr-10">
				<div class="mb-7 text-center text-lg ct_md:text-start">取扱説明書</div>
				<div
					role="button"
					class="flex select-none items-center justify-center text-xs font-bold ct_md:justify-start ct_md:text-sm"
					@click="toggle"
				>
					ご注意
					<span class="mx-1">|</span>
					ダウンロードされる方は必ずお読みください
					<span>
						<SvgIcon
							use="expand_more"
							class="h-6 w-6 transition duration-300"
							:class="{ '-rotate-180': isExpend }"
						></SvgIcon>
					</span>
				</div>
				<ul
					class="mb-8 mt-2 overflow-hidden text-sm transition-[max-height] duration-300 [&>li]:mb-3"
					ref="contentRef"
					:style="{ maxHeight: `${maxHeight}` }"
				>
					<li>● 取扱説明書・仕様書・サービスマニュアルの内容を複製したり、書き換えたりすることはできません。</li>
					<li>
						●
						公開されている取扱説明書は、原則として発売された当初のものを掲載していますが、予告なく変更することがあります。
					</li>
					<li>● お手持ちの取扱説明書と異なる場合があります。</li>
					<li>● 取扱説明書は、株式会社オーディオテクニカの製品をご購入いただいたお客様のための説明書です。</li>
					<li>● 公開されている取扱説明書についてお問い合わせにお応えできない場合がありますのでご了承ください。</li>
				</ul>
			</div>

			<div
				role="button"
				class="mt-5 h-fit w-full max-w-[280px] border border-[#BFBFBF] py-3 text-center text-sm font-bold transition duration-300 hover:opacity-60 ct_md:max-w-[380px]"
			>
				取扱説明書(PDF)
			</div>
		</div>

		<div v-if="product.parts?.length" class="px-4 pb-14">
			<div class="mb-7 text-lg">部品注文</div>
			<table class="w-full text-sm">
				<tbody>
					<tr v-for="(parts, index) in product.parts" :key="index" class="h-24 border-t border-[#BFBFBF] last:border-b">
						<td>{{ parts.name }}</td>
						<td>￥{{ parts.price }} (税込)</td>
						<td>{{ parts.route }}</td>
						<td>{{ parts.note }}</td>
						<td>
							<div
								role="button"
								class="ml-auto w-fit border border-[#BFBFBF] px-2 py-2 text-center font-bold transition hover:opacity-60 ct_md:w-40"
							>
								カートに追加
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Product } from '~/types';

defineProps<{ product: Product }>();

const contentRef = ref<HTMLElement | null>(null);
const maxHeight = ref('100%');

onMounted(() => {
	if (contentRef.value) {
		maxHeight.value = contentRef.value.scrollHeight + 'px';
	}
});

const isExpend = ref(true);
async function toggle() {
	isExpend.value = !isExpend.value;
	maxHeight.value = maxHeight.value === '0px' ? contentRef.value?.scrollHeight + 'px' : '0px';
}
</script>
