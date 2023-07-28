<template>
	<div class="flex flex-col">
		<ul class="breadcrumb mb-16 mt-2 flex gap-16 pl-14 text-sm">
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink :to="categoryRoute ?? '/'">ヘッドホン</NuxtLink></li>
			<li>ATH-M50x</li>
		</ul>

		<div v-if="product && selectedBranch" class="mx-auto mb-14 flex w-full max-w-[1328px] justify-between">
			<div class="w-1/2">
				<img :src="selectedBranch.image_url" class="block h-auto w-full" />
			</div>
			<div class="w-[45%]">
				<div class="mb-12">
					<p class="mb-6 text-sm">{{ product?.name }}</p>
					<h2 class="mb-6 text-3xl">
						{{ selectedBranch?.model }}
						<span class="ml-1 text-sm">オープン価格</span>
					</h2>
					<p class="mb-10 text-sm">{{ product.description }}</p>

					<ul class="mb-2 flex" v-if="product.branches.length > 1">
						<li
							v-for="branch in product.branches"
							:key="branch.id"
							@click="selectedBranch = branch"
							class="mr-2 grid h-[22px] w-[22px] rotate-[-60deg] overflow-hidden rounded-full border border-black/25 hover:opacity-70"
						>
							<div
								v-for="colorCode in branch.color"
								:class="{ selected: branch.id === selectedBranch.id }"
								:style="{ backgroundColor: `#${colorCode}` }"
							></div>
						</li>
					</ul>
				</div>

				<div class="flex flex-col bg-[#f7f7f7] p-7">
					<p class="mb-4 text-2xl">
						￥{{ selectedBranch.price }}
						<span class="text-base">（税込）</span>
					</p>
					<span class="mb-4">{{ stockStatus }}</span>
					<button class="mb-6 w-60 bg-black p-4 text-white hover:opacity-70">カートに追加（送料無料）</button>
					<span class="mb-7 text-sm">通常1～3営業日で発送</span>

					<div class="mb-5 flex max-w-[360px]">
						<img
							src="/images/pc/souryou.jpg"
							draggable="false"
							class="mr-5 block aspect-square h-[100px] w-[100px] border border-gray-300"
						/>
						<div class="text-sm">
							<span class="font-bold">【送料】</span>
							<br />
							<span>
								製品のご購入代金合計が8,000円(税込)以上の方は、送料無料
								<br />
								それ以外の場合は全国一律 660円(税込)
								<br />
								※部品・付属品のご購入は別途送料がかかります
							</span>
						</div>
					</div>

					<div class="flex items-center">
						<img src="/images/pc/Q.png" draggable="false" class="mr-2 h-6 w-6" />
						<a href="" class="text-sm underline">お買い物についてのFAQはこちら</a>
					</div>
				</div>
			</div>
		</div>

		<div>
			<div class="border-b border-gray-300">
				<div
					class="mx-auto grid max-w-[1092px] grid-cols-3 [&_button]:h-12 [&_button]:border-l [&_button]:border-t [&_button]:border-gray-300 [&_button]:text-sm"
				>
					<button
						@click="activateTab = 'feature'"
						:class="{ 'bg-[#585858] font-bold text-white': activateTab === 'feature' }"
					>
						製品特長
					</button>
					<button
						@click="activateTab = 'spec'"
						:class="{ 'bg-[#585858] font-bold text-white': activateTab === 'spec' }"
					>
						テクニカルデータ
					</button>
					<button
						@click="activateTab = 'support'"
						class="border-r"
						:class="{ 'bg-[#585858] font-bold text-white': activateTab === 'support' }"
					>
						サポート
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { Product, IProductBranch } from '~/types';
import { getContrastYIQ } from '@/utils/index';

definePageMeta({
	name: 'product',
});

const route = useRoute();
const appStore = useAppStore();

const { data: product } = await useAsyncData<Product>('product', () =>
	$fetch(`/api/product/model/${route.params.slug[0]}`)
);
console.log('product', product.value);

const selectedBranch = ref<IProductBranch>();
selectedBranch.value = product.value?.branches[0];

const stockStatus = computed(() => {
	const quantity = selectedBranch.value?.stock_quantity;
	if (!quantity) {
		return '在庫x';
	} else if (quantity < 5) {
		return '在庫△';
	} else {
		return '在庫○';
	}
});

const selectedIconColor = computed(() => {
	return selectedBranch.value ? getContrastYIQ(`#${selectedBranch.value.color}`) : 'black';
});

const categoryRoute = computed(() => {
	if (product.value) {
		const test = appStore.categoryIdToRouteMap.get(product.value?.category_id);
	}

	return product.value ? appStore.categoryIdToRouteMap.get(product.value?.category_id) : undefined;
});

const activateTab = ref<'feature' | 'spec' | 'support'>('feature');
</script>

<style lang="scss" scoped>
.selected {
	position: relative;

	&::after {
		content: '✓';
		rotate: 60deg;
		position: absolute;
		width: 20px;
		height: 20px;
		top: 0;
		left: 0;
		font-weight: bold;
		text-align: center;
		color: v-bind(selectedIconColor);
	}
}

.breadcrumb li:nth-child(-n + 2) {
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 48px;
		height: 1px;
		background-color: black;
		right: -56px;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
