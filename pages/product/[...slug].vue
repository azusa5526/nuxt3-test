<template>
	<div class="flex flex-col">
		<ul class="breadcrumb mb-16 mt-2 flex gap-16 pl-14 text-sm">
			<li>
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="category?.route ?? '/'">{{ category?.name }}</NuxtLink>
			</li>
			<li>ATH-M50x</li>
		</ul>

		<div v-if="product && selectedBranch" class="mx-auto mb-14 flex w-full max-w-[1328px] justify-between">
			<div class="w-1/2">
				<div class="relative mb-10">
					<div class="overflow-x-hidden" ref="emblaNode">
						<div class="flex w-full will-change-transform">
							<div v-for="(imageUrl, index) in product.images" :key="index" class="flex w-full shrink-0 flex-col">
								<img :src="imageUrl" class="block h-auto w-full" draggable="false" />
							</div>
						</div>
					</div>
					<button
						@click="emblaApi?.scrollPrev"
						class="absolute left-0 top-1/2 -translate-y-1/2"
						:class="{ 'pointer-events-none opacity-30': !canScrollPrev }"
					>
						<SvgIcon class="h-14 w-14 py-2 pr-2 text-[#505659]" use="chevron_left"></SvgIcon>
					</button>
					<button
						@click="emblaApi?.scrollNext"
						class="absolute right-0 top-1/2 -translate-y-1/2"
						:class="{ 'pointer-events-none opacity-30': !canScrollNext }"
					>
						<SvgIcon class="h-14 w-14 rotate-180 py-2 pr-2 text-[#505659]" use="chevron_left"></SvgIcon>
					</button>
				</div>

				<div class="flex flex-wrap gap-2">
					<div
						@click="
							emblaApi?.scrollTo(index);
							selectedImageIndex = index;
						"
						v-for="(imageUrl, index) in product.images"
						:key="index"
						class="aspect-square w-[76px]"
						:class="{ 'border border-gray-300': selectedImageIndex === index }"
					>
						<img :src="imageUrl" class="block h-auto w-full" draggable="false" />
					</div>
				</div>
			</div>
			<div class="w-[45%]">
				<div class="mb-12">
					<p class="mb-6 text-sm">{{ product.name }}</p>
					<h2 class="mb-6 text-3xl">
						{{ selectedBranch.model }}
						<span class="ml-1 text-sm">オープン価格</span>
					</h2>
					<p class="mb-10 text-sm">{{ product.description }}</p>

					<ul class="mb-2 flex" v-if="product.branches.length > 1">
						<li
							v-for="branch in product.branches"
							:key="branch.id"
							@click="onColorBranchClick(branch)"
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
						@click="activateTab = ProductFeature"
						class="transition-all duration-300"
						:class="{ 'bg-[#585858] font-bold text-white': activateTab === ProductFeature }"
					>
						製品特長
					</button>
					<button
						@click="activateTab = ProductSpec"
						class="transition-all duration-300"
						:class="{ 'bg-[#585858] font-bold text-white': activateTab === ProductSpec }"
					>
						テクニカルデータ
					</button>
					<button
						@click="activateTab = ProductSupport"
						class="border-r transition-all duration-300"
						:class="{ 'bg-[#585858] font-bold text-white': activateTab === ProductSupport }"
					>
						サポート
					</button>
				</div>
			</div>

			<keep-alive v-if="product">
				<component :is="activateTab" :product="product"></component>
			</keep-alive>

			<div v-if="category?.name" class="flex justify-center pb-48">
				<ProductNavi :name="category.name"></ProductNavi>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';
import { Product, IProductBranch } from '~/types';
import { getContrastYIQ } from '@/utils/index';
import emblaCarouselVue from 'embla-carousel-vue';
import ProductFeature from '@/components/ProductFeature.vue';
import ProductSpec from '~/components/ProductSpec.vue';
import ProductSupport from '~/components/ProductSupport.vue';
import ProductNavi from '~/components/ProductNavi.vue';

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

const category = computed(() => {
	if (product.value) {
		return appStore.personalCategories.find((item) => item.id === product.value?.category_id);
	} else {
		return null;
	}
});

const activateTab = shallowRef<typeof ProductFeature>(ProductFeature);

const [emblaNode, emblaApi] = emblaCarouselVue({ loop: false, containScroll: 'trimSnaps', align: 'start' });
const selectedImageIndex = ref(0);

const canScrollNext = ref();
const canScrollPrev = ref();
const onScrollHandler = () => {
	canScrollNext.value = emblaApi.value?.canScrollNext();
	canScrollPrev.value = emblaApi.value?.canScrollPrev();
};

onMounted(() => {
	if (emblaApi) onScrollHandler();
});

watchEffect(() => {
	if (emblaApi.value) emblaApi.value.on('scroll', onScrollHandler);
});

const removeonScrollListener = () => {
	if (emblaApi.value) emblaApi.value.off('scroll', onScrollHandler);
};

onUnmounted(() => {
	removeonScrollListener();
});

function onColorBranchClick(branch: IProductBranch) {
	selectedBranch.value = branch;

	const targetImageIndex = product.value?.images?.findIndex((imageUrl) => imageUrl === branch.image_url) ?? -1;
	if (targetImageIndex !== -1) {
		emblaApi.value?.scrollTo(targetImageIndex);
		selectedImageIndex.value = targetImageIndex;
	}
}
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
