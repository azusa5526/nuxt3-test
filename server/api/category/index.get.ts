import { Category } from '../../models/category';

export default defineEventHandler(async () => {
	try {
		const categories = await Category.find({}).sort({ order: 1, 'sub_categories.order': 1 });
		return categories;
	} catch (error) {
		console.error('get category err', error);
	}
});
