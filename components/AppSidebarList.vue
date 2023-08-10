<template>
	<ul>
		<li
			v-for="(menu, index) in menuItems"
			:key="index"
			class="flex min-h-[76px] items-center overflow-y-auto border-b border-[#BFBFBF] text-sm"
		>
			<ExpensionItem v-if="menu.data" class="grow" ref="parentExpandItemRefs" :parent="`category_${menu.id}`">
				<template #activator="{ isExpend }">
					<div class="flex h-[76px] w-full items-center justify-between bg-blue-100 px-2">
						<div>{{ menu.displayName }}</div>
						<SvgIcon use="expand_more" class="h-6 w-6 transition" :class="{ '-rotate-180': isExpend }"></SvgIcon>
					</div>
				</template>
				<template #content>
					<ul ref="testRef" class="w-full border-t border-[#BFBFBF] bg-red-200 py-5">
						<li v-for="category in menu.data" :key="category.id">
							<ExpensionItem
								@update:max-height="
									(newValue, oldValue) => updateParentMaxHeight(`category_${menu.id}`, newValue, oldValue)
								"
								v-if="category.sub_categories"
								class="grow"
							>
								<template #activator="{ isExpend }">
									<div class="flex min-h-[68px] items-center justify-between px-2">
										<div class="flex items-center">
											<img
												v-if="category.image_url"
												:src="category.image_url"
												class="mr-2 h-auto w-16 object-contain"
											/>
											<div class="text-base">{{ category.name }}</div>
										</div>
										<SvgIcon use="expand_more" class="h-6 w-6" :class="{ '-rotate-180': isExpend }"></SvgIcon>
									</div>
								</template>

								<template #content>
									<ul class="w-full bg-yellow-200">
										<li v-for="sub in category.sub_categories" :key="sub.id" class="h-9">
											<NuxtLink
												@click="appStore.isDrawerShow = false"
												:to="sub.route"
												class="ml-[70px] flex h-full w-full items-center pl-2"
											>
												{{ sub.name }}
											</NuxtLink>
										</li>
									</ul>
								</template>
							</ExpensionItem>
						</li>
					</ul>
				</template>
			</ExpensionItem>

			<NuxtLink v-else @click="appStore.isDrawerShow = false" :to="{ name: menu.routeName }">
				{{ menu.displayName }}
			</NuxtLink>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import type { ExpensionItem } from '~/.nuxt/components';
import { useAppStore } from '~/store/app';

const testRef = ref<HTMLElement | null>(null);
const parentExpandItemRefs = ref<InstanceType<typeof ExpensionItem>[] | null>(null);

const appStore = useAppStore();
const menuItems = [
	{ displayName: 'ログイン', routeName: '', id: 0 },
	{ displayName: '個人向け製品', data: appStore.personalCategories, id: 1 },
	{ displayName: 'サポート', routeName: 'support', id: 2 },
	{ displayName: '法人向け製品', data: appStore.personalCategories, id: 3 },
	{ displayName: 'ニュース', routeName: 'news', id: 4 },
	{ displayName: '企業情報', routeName: 'corp', id: 5 },
	{ displayName: 'Always Listening', id: 6 },
];

function updateParentMaxHeight(parentKey: string, newValue: number, oldValue: number) {
	if (!parentExpandItemRefs.value) return;
	const parentRef = parentExpandItemRefs.value.find((item) => item.parent === parentKey);
	if (!parentRef) return;

	parentRef.addOffsetHeight(newValue - oldValue);
}
</script>
