import { Product } from '../../models/product';
import type { IProduct } from '../../../types';

export default defineEventHandler(async (event) => {
	const { image_url, model, name, route, branch, label, images, introduce_route, parts, spec_route, tag_ids } =
		await readBody<IProduct>(event);
	try {
		const newProduct = await Product.create({
			image_url,
			model,
			name,
			route,
			branch,
			label,
			images,
			introduce_route,
			parts,
			spec_route,
			tag_ids,
		});

		return newProduct;
	} catch (error) {
		console.error('create product err', error);
	}
});
