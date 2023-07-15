import { NaviContent } from '../../models/navi-contents';

export default defineEventHandler(async () => {
	try {
		const naviContents = await NaviContent.find();
		return naviContents;
	} catch (error) {
		console.error('get naviContents err', error);
	}
});
