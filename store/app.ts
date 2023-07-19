import { Category } from '~/types';

interface State {
	isDrawerShow: boolean;
	personalCategories: Category[];
}

export const useAppStore = defineStore('app', {
	state: (): State => ({
		isDrawerShow: false,
		personalCategories: [],
	}),

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
	},
});
