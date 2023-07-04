import { Category } from '../../models/category';
import type { ICategory } from '../../../types';

export default defineEventHandler(async (event) => {
	const { name, image_url, order, route, sub_categories } = await readBody<ICategory>(event);
	try {
		const newCategory = await Category.create({
			name,
			image_url,
			route,
			order,
			sub_categories,
		});

		return {
			id: newCategory._id,
			name,
			image_url,
			route,
			order,
			sub_categories,
		};
	} catch (error) {
		console.error('create category err', error);
	}
});
