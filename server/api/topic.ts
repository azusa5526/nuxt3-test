import topicModel from '../models/topic';

export default defineEventHandler(async () => {
	console.log('topicModel api called');
	try {
		const result = await topicModel.find();
		console.log('result', result);
		return result;
	} catch (error) {
		console.error('topicModel', error);
	}
});
