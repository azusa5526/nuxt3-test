import { Product } from '../../models/product';

export default defineEventHandler(async () => {
	try {
		const products = await Product.find();
		return products;
	} catch (error) {
		console.error('get products err', error);
	}
});
