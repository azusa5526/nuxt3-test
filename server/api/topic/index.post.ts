import { Topic } from '../../models/topic';
import { ITopic } from '../../../types/index';

export default defineEventHandler(async (event) => {
	const { category, image_url, contents, route, title } = await readBody<ITopic>(event);
	try {
		const newTopic = await Topic.create({
			category,
			image_url,
			contents,
			route,
			title,
		});

		return {
			id: newTopic._id,
			category,
			image_url,
			contents,
			route,
			title,
		};
	} catch (error) {
		console.error('create topic err', error);
	}
});
