import { Product } from '../../models/product';
import mongoose from 'mongoose';
import type { IProduct, IProductBranch } from '../../../types';

const router = createRouter();

router.get(
	'/',
	defineEventHandler(async (event) => {
		const query = getQuery(event);

		if (query.scope && query.scope === 'less') {
			try {
				const products = await Product.find({}, 'name branches.model branches.price');
				const formattedProducts = products.map((doc: IProduct) => {
					return {
						name: doc.name,
						branches: doc.branches.map((branch) => {
							return {
								model: branch.model,
								price: branch.price,
							};
						}),
					};
				});
				return formattedProducts;
			} catch (error) {
				console.error('Get products err', error);
			}
		} else {
			try {
				const products = await Product.find();
				return products;
			} catch (error) {
				console.error('Get products err', error);
			}
		}
	})
);

router.get(
	'/:id',
	defineEventHandler(async (event) => {
		const productId = event.context.params?.id;
		if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
			throw createError({
				statusCode: 400,
				statusMessage: 'id is not valid value',
			});
		}

		try {
			const product = await Product.find({ _id: productId });
			return product ? product : [];
		} catch (error) {
			throw createError({
				statusCode: 500,
				statusMessage: `Get product err, ${error}`,
			});
		}
	})
);

export default useBase('/api/product/', router.handler);
