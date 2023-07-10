import { Promote } from '../../models/promote';
import { Product } from '../../models/product';
import { IProduct } from '../../../types';

const router = createRouter();

router.get(
	'/',
	defineEventHandler(async (event) => {
		const query = getQuery(event);

		let promote;
		try {
			promote = await Promote.findOne();
		} catch (error) {
			console.error('get promote err', error);
		}

		switch (query.product_type) {
			case 'recommend':
				return findProducts(promote?.recommend);
			case 'online_limited':
				return findProducts(promote?.online_limited);
			case 'new_item':
				return findProducts(promote?.new_item);
			default:
				return promote;
		}
	})
);

async function findProducts(targets: string[] | undefined) {
	if (targets && targets.length) {
		try {
			const products = await Product.find(
				{ _id: { $in: targets } },
				'name model route image_url label branches.color branches.image_url branches.model branches.price'
			);
			const formattedProducts = products.map((doc: IProduct) => {
				return {
					name: doc.name,
					model: doc.model,
					route: doc.route,
					image_url: doc.image_url,
					label: doc.label,
					branches: doc.branches.map((branch) => {
						return {
							color: branch.color,
							image_url: branch.image_url,
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
		return [];
	}
}

export default useBase('/api/promote/', router.handler);
