import { Category } from '../../models/category';

export default defineEventHandler(async () => {
	try {
		const categories = await Category.find();
		return categories.map((category) => ({
			id: category._id,
			name: category.name,
			image_url: category.image_url,
			route: category.route,
			order: category.order,
			sub_categories: category.sub_categories,
		}));
	} catch (error) {
		console.error('get category err', error);
	}
});
