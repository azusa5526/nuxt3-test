import { Category } from '../../models/category';

export default defineEventHandler(async () => {
	try {
		const categories = await Category.find();
		return categories;
	} catch (error) {
		console.error('get category err', error);
	}
});
