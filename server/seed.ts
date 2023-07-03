import { Topic } from './models/topic';

async function initTopic() {
	const topicCount = await Topic.count();
	if (!topicCount) {
		console.log('Do initTopic');
		Topic.create([
			{
				image_url: 'https://dummyimage.com/720X540/34eb83/fff',
				category: 'CAMPAIGN',
				title: 'オリジナルフォンタブ：プレゼント',
				contents:
					'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
				route: '/novelty_phonetab',
			},
			{
				image_url: 'https://dummyimage.com/720X540/34eb83/fff',
				category: 'CAMPAIGN',
				title: '会員登録キャンペーン',
				contents: '事前会員登録でクーポンコードプレゼント!! 会員登録期間: 6月26日〜7月14日',
				route: '/member',
			},
		]);
	}
}

export { initTopic };
