import { Category, SubCategory, INaviContent } from '~/types';

interface State {
	isDrawerShow: boolean;
	personalCategories: Category[];
	naviContents: INaviContent[];
}

export const useAppStore = defineStore('app', {
	state: (): State => ({
		isDrawerShow: false,
		personalCategories: [],
		naviContents: [],
	}),

	actions: {
		getCategoryIdObject(route: string) {
			if (!this.routeToIdMap) return {};
			return this.routeToIdMap.get(route);
		},

		getCategoryInfo(route: string) {
			if (!this.routeToCategoryMap) return null;
			return this.routeToCategoryMap.get(route);
		},
	},

	getters: {
		routeToIdMap(state): Map<string, { category_id: string; sub_category_id?: string }> {
			const tempMap = new Map();
			state.personalCategories.forEach((category) => {
				tempMap.set(category.route, { category_id: category.id });

				category.sub_categories.forEach((subCategory) => {
					tempMap.set(subCategory.route, { category_id: category.id, sub_category_id: subCategory.id });
				});
			});

			return tempMap;
		},

		routeToCategoryMap(state): Map<string, { category: Category; subCategory?: SubCategory }> {
			const tempMap = new Map();
			state.personalCategories.forEach((category) => {
				tempMap.set(category.route, { category: category });

				category.sub_categories.forEach((subCategory) => {
					tempMap.set(subCategory.route, { category: category, subCategory: subCategory });
				});
			});

			return tempMap;
		},
	},
});
