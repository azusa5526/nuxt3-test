import { Topic } from '../../models/topic';

export default defineEventHandler(async () => {
	try {
		const topics = await Topic.find({}).sort({ create_time: 1 });
		return topics;
	} catch (error) {
		console.error('get topic err', error);
	}
});
