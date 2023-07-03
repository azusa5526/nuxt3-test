import { Topic } from '../../models/topic';

export default defineEventHandler(async () => {
	try {
		const topics = await Topic.find();

		return topics.map((topic) => ({
			id: topic._id,
			image_url: topic.image_url,
			category: topic.category,
			title: topic.title,
			contents: topic.contents,
			route: topic.route,
		}));
	} catch (error) {
		console.error('get topic err', error);
	}
});
