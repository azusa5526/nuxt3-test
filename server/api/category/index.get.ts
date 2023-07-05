import { Category } from '../../models/category';

export default defineEventHandler(async () => {
	try {
		const categories = await Category.find();
		return categories;
		// return categories.map((category) => ({
		// 	id: category._id,
		// 	name: category.name,
		// 	image_url: category.image_url,
		// 	route: category.route,
		// 	order: category.order,
		// 	sub_categories: category.sub_categories.map((sub_categorie) => ({
		// 		id: sub_categorie._id,
		// 		name: sub_categorie.name,
		// 		route: sub_categorie.route,
		// 		order: sub_categorie.order,
		// 	})),
		// }));
	} catch (error) {
		console.error('get category err', error);
	}
});
