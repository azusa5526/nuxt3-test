<template>
	<ul>
		<li
			v-for="(menu, index) in menuItems"
			:key="index"
			class="flex min-h-[76px] items-center overflow-y-auto border-b border-[#BFBFBF] text-sm"
		>
			<ExpensionItem v-if="menu.data" class="grow">
				<template #activator="{ isExpend }">
					<div class="flex h-[76px] w-full items-center justify-between bg-blue-100 px-2">
						<div>{{ menu.displayName }}</div>
						<SvgIcon use="expand_more" class="h-6 w-6 transition" :class="{ '-rotate-180': isExpend }"></SvgIcon>
					</div>
				</template>
				<template #content>
					<ul ref="testRef" class="w-full bg-red-200">
						<li v-for="category in menu.data" :key="category.id" class="px-2">
							<ExpensionItem v-if="category.sub_categories" class="grow">
								<template #activator="{ isExpend }">
									<div class="flex min-h-[68px] items-center justify-between">
										<div class="flex items-center">
											<img
												v-if="category.image_url"
												:src="category.image_url"
												class="mr-2 h-auto w-16 object-contain"
												alt=""
											/>
											<div class="text-base">{{ category.name }}</div>
										</div>
										<SvgIcon use="expand_more" class="h-6 w-6" :class="{ '-rotate-180': isExpend }"></SvgIcon>
									</div>
								</template>

								<template #content>
									<ul class="w-full bg-yellow-200">
										<li v-for="sub in category.sub_categories" :key="sub.id" class="ml-[70px] h-9">
											<NuxtLink
												@click="appStore.isDrawerShow = false"
												:to="sub.route"
												class="flex h-full w-full items-center"
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
			<div v-else>{{ menu.displayName }}</div>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/store/app';

const testRef = ref<HTMLElement | null>(null);

const appStore = useAppStore();
const menuItems = [
	{ displayName: 'ログイン', routeName: '' },
	{ displayName: '個人向け製品', data: appStore.personalCategories },
	{ displayName: 'サポート', routeName: 'support' },
	{ displayName: '法人向け製品' },
	{ displayName: 'ニュース', routeName: 'news' },
	{ displayName: '企業情報', routeName: 'corp' },
	{ displayName: 'Always Listening' },
];
</script>
