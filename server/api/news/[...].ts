import { News } from '../../models/news';
import { Types } from 'mongoose';

const router = createRouter();

router.get(
	'/',
	defineEventHandler(async (event) => {
		try {
			const news = await News.find();
			return news;
		} catch (error) {
			console.error('get news err', error);
		}
	})
);

export default useBase('/api/news/', router.handler);
