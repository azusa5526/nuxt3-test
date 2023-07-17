import { Category } from './models/category';
import { Product } from './models/product';
import { Promote } from './models/promote';
import { TopSlide } from './models/top-slides';
import { NaviContent } from './models/navi-contents';
import { Topic } from './models/topic';
import { News } from './models/news';
import { Types } from 'mongoose';

async function initPromote() {
	const promote = await Promote.count();
	if (!promote) {
		console.log('Do initPromote');
		Promote.create({
			recommend: [],
			online_limited: [],
			new_item: [],
		});
	}
}

async function initCategory() {
	const categoryCount = await Category.count();
	if (!categoryCount) {
		console.log('Do initCategory');
		Category.create([
			{
				_id: new Types.ObjectId('64b484801662b693608c1a68'),
				image_url: '/images/pc/online-limited2023.jpg',
				name: 'online limited',
				route: '/category/online-limited/',
				order: 1,
				sub_categories: [
					{
						_id: new Types.ObjectId('64b487ea2fe3a0731375d22e'),
						name: 'オンラインストア<br>限定モデル',
						route: '/category/online-limited/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64b487f0e9014c91c62d9636'),
						name: 'ターンテーブル',
						route: '/category/online-limited/turn-table/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64b487f8c7e1029fccd36ff3'),
						name: 'イヤホン',
						route: '/category/online-limited/earphone/',
						order: 3,
					},
				],
			},
			{
				_id: new Types.ObjectId('64a4b9b3ace1c8690163d984'),
				image_url: '/images/pc/headphone-mini.png',
				name: 'headphones',
				route: '/category/headphone/',
				order: 2,
				sub_categories: [
					{
						_id: new Types.ObjectId('64a4b9b3ace1c8690163d985'),
						name: 'ワイヤード',
						route: '/category/headphone/wired/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64a4b9b3ace1c8690163d985'),
						name: 'ワイヤレス',
						route: '/category/headphone/wireless/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64b4893a9a81ff1e7e103d0d'),
						name: 'DJ/モニター',
						route: '/category/headphone/dj-monitor/',
						order: 3,
					},
					{
						_id: new Types.ObjectId('64b4893e0ada7f3433c8ecad'),
						name: 'ハイエンド',
						route: '/category/headphone/highend/',
						order: 4,
					},
					{
						_id: new Types.ObjectId('64b48943590e5d84a7b84369'),
						name: 'アクセサリー',
						route: '/category/headphone/accessorie/',
						order: 5,
					},
				],
			},
			{
				_id: new Types.ObjectId('64a4b9b3ace1c8690163d98a'),
				image_url: '/images/pc/earphone-mini.png',
				name: 'earphones',
				route: '/category/earphone/',
				order: 3,
				sub_categories: [
					{
						_id: new Types.ObjectId('64b4894ce6af66176af9e1b6'),
						name: 'ワイヤード',
						route: '/category/earphone/wired/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64b4895221975f1e1668534f'),
						name: 'ワイヤレス',
						route: '/category/earphone/wireless/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64a4b9b3ace1c8690163d98d'),
						name: '完全ワイヤレス',
						route: '/category/earphone/true-wireless/',
						order: 3,
					},
					{
						_id: new Types.ObjectId('64b48968f21301b0ae3ce93d'),
						name: 'ハイエンド',
						route: '/category/earphone/highend/',
						order: 4,
					},
					{
						_id: new Types.ObjectId('64b4896dad760755d873d687'),
						name: 'アクセサリー',
						route: '/category/earphone/accessorie/',
						order: 5,
					},
				],
			},
			{
				_id: new Types.ObjectId('64b484a602fff88bdd95fcf5'),
				image_url: '/images/pc/microphone-mini.png',
				name: 'microphones',
				route: '/category/microphones/',
				order: 4,
				sub_categories: [
					{
						_id: new Types.ObjectId('64b48977c2b4343e9d506112'),
						name: 'ボーカル',
						route: '/category/microphone/vocal/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64b4897e3aa6a7b7c13e37bd'),
						name: '楽器用',
						route: '/category/microphone/instrument/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64b48982d29a745dbed12ae6'),
						name: 'スピーチ',
						route: '/category/microphone/speech/',
						order: 3,
					},
					{
						_id: new Types.ObjectId('64b48985bce5f4b74e84ab24'),
						name: '会議用',
						route: '/category/microphone/meeting/',
						order: 4,
					},
					{
						_id: new Types.ObjectId('64b4898878acfd697d481328'),
						name: '記録／録音用',
						route: '/category/microphone/recording/',
						order: 5,
					},
					{
						_id: new Types.ObjectId('64b4898d86638536a156e5f7'),
						name: 'カメラ用',
						route: '/category/microphone/camera/',
						order: 6,
					},
					{
						_id: new Types.ObjectId('64b489905793d0d5390ab28d'),
						name: 'アクセサリー',
						route: '/category/microphone/accessorie/',
						order: 7,
					},
				],
			},
			{
				_id: new Types.ObjectId('64b484f0502a81f24c6ed741'),
				image_url: '/images/pc/analog-mini.png',
				name: 'analog products',
				route: '/category/analog-product/',
				order: 5,
				sub_categories: [
					{
						_id: new Types.ObjectId('64b48996ecb2a124ef62efdd'),
						name: 'カートリッジ（MC型）',
						route: '/category/analog-product/mc-cartridge/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64b4899aa9b036bb74119000'),
						name: 'カートリッジ（VM型）',
						route: '/category/analog-product/vm-cartridge/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64b4899ebd1d0e3e20b6b761'),
						name: 'ターンテーブル',
						route: '/category/analog-product/turn-table/',
						order: 3,
					},
					{
						_id: new Types.ObjectId('64b489a29ae56076e1546941'),
						name: 'アクセサリー',
						route: '/category/analog-product/accessorie/',
						order: 4,
					},
				],
			},
			{
				_id: new Types.ObjectId('64b485c3887c886cbbcb6b4e'),
				image_url: '/images/pc/avaccessory-mini.png',
				name: 'av accessories',
				route: '/category/av-accessorie/',
				order: 6,
				sub_categories: [
					{
						_id: new Types.ObjectId('64b489a70b5d833a1cd6190b'),
						name: 'スピーカー',
						route: '/category/av-accessorie/speaker/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64b489abbe9531c4f462124f'),
						name: 'ケーブル',
						route: '/category/av-accessorie/cable/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64b489ae71f40e3b3b6268b4'),
						name: 'イクイップメント',
						route: '/category/av-accessorie/equipment/',
						order: 3,
					},
					{
						_id: new Types.ObjectId('64b489b2c793ce88301a400a'),
						name: 'メンテナンス',
						route: '/category/av-accessorie/maintenance/',
						order: 4,
					},
				],
			},
			{
				_id: new Types.ObjectId('64b486869c1c02a4dab1441d'),
				image_url: '/images/pc/car-mini.png',
				name: 'car audio accessories',
				route: '/category/car-audio-accessorie/',
				order: 7,
				sub_categories: [
					{
						_id: new Types.ObjectId('64b489babcf86bdbe59b9751'),
						name: 'Rexat（レグザット）',
						route: '/category/car-audio-accessorie/rexat/',
						order: 1,
					},
					{
						_id: new Types.ObjectId('64b489bee613de2171899d58'),
						name: 'ケーブル',
						route: '/category/car-audio-accessorie/cable/',
						order: 2,
					},
					{
						_id: new Types.ObjectId('64b489c2e83204e7bce476dc'),
						name: 'ドアチューニング',
						route: '/category/car-audio-accessorie/door-tuning/',
						order: 3,
					},
					{
						_id: new Types.ObjectId('64b489c5b825a83130e9f912'),
						name: 'イクイップメント',
						route: '/category/car-audio-accessorie/equipment/',
						order: 4,
					},
					{
						_id: new Types.ObjectId('64b489c9485f874d9c06e14b'),
						name: 'アクセサリー',
						route: '/category/car-audio-accessorie/accessorie/',
						order: 5,
					},
				],
			},
		]);
	}
}

async function initProduct() {
	const productCount = await Product.count();
	if (!productCount) {
		console.log('Do initProduct');
		Product.create([
			{
				_id: new Types.ObjectId('64affe9d70f6308bc6bf1399'),
				name: 'プロフェッショナルモニターヘッドホン',
				model: 'ATH-M50x',
				route: 'ATH-M50x',
				description: '世界が認めた“M50”の次世代モデル。現場のニーズに応える高解像度モニターヘッドホン。',
				category_id: '64a4b9b3ace1c8690163d984',
				sub_category_id: '64a4b9b3ace1c8690163d985',
				tag_ids: ['67a56d89a1c3cb6613d0ac95'],
				image_url: 'https://dummyimage.com/500X500/13c0f0/fff',
				label: {
					text: '発売記念キャンペーン!!',
					bg_color: 'cc9900',
					font_color: 'FFFFFF',
				},
				spec_route: null,
				introduce_route: null,
				images: [
					'https://dummyimage.com/500X500/13c0f0/fff',
					'https://dummyimage.com/500X500/e83333/fff',
					'https://dummyimage.com/500X500/33e645/fff',
				],
				parts: [
					{
						name: 'ポーチ BK',
						price: '1,000',
						route: null,
						note: '色：黒',
					},
					{
						name: '着脱カールコード（変換プラグアダプター付き） BK',
						price: '2,200',
						route: null,
						note: '色：黒',
					},
				],
				branches: [
					{
						color: ['000000'],
						image_url: '/upload/contents/product/ATH-M50x/branch_2805_image_0.jpg',
						model: 'ATH-M50x',
						is_release: true,
						release_at: null,
						stock_quantity: 10,
						price: '19,000',
					},
					{
						color: ['ffffff'],
						image_url: '/upload/contents/product/ATH-M50x/branch_2806_image_6.jpg',
						model: 'ATH-M50x WH',
						is_release: true,
						release_at: '2021-08-03T16:20:17.717+08:00',
						stock_quantity: 2,
						price: '21,000',
					},
				],
			},
			{
				_id: new Types.ObjectId('64affe9d70f6308bc6bf139e'),
				name: 'ワイヤレスヘッドホン',
				model: 'ATH-TWX9',
				route: 'ATH-TWX9',
				description: '人と心をつなぐ、革新のサウンド。特別な静寂を仕立てるノイズキャンセリング。',
				category_id: '64a4b9b3ace1c8690163d98a',
				sub_category_id: '64a4b9b3ace1c8690163d98d',
				tag_ids: null,
				image_url: 'https://dummyimage.com/500X500/377ded/fff',
				spec_route: null,
				introduce_route: null,
				images: ['https://dummyimage.com/500X500/377ded/fff', 'https://dummyimage.com/500X500/e83333/fff'],
				parts: null,
				branches: [
					{
						color: null,
						image_url: '/upload/contents/product/ATH-TWX9/product_image_1660107841.jpg',
						model: 'ATH-TWX9',
						is_release: true,
						release_at: '2021-08-03T16:20:17.717+08:00',
						stock_quantity: 1,
						price: '36,300',
					},
				],
			},
			{
				_id: new Types.ObjectId('64affe9d70f6308bc6bf13a0'),
				name: 'ワイヤレスヘッドホン',
				model: 'ATH-M50xBT2',
				route: 'ATH-M50xBT2',
				description: '世界が認める音響パフォーマンスをワイヤレスで。アップグレードモデル“Version2”登場。',
				category_id: '64a4b9b3ace1c8690163d984',
				sub_category_id: '64a4b9b3ace1c8690163d986',
				tag_ids: null,
				image_url: 'https://dummyimage.com/500X500/13c0f0/fff',
				spec_route: null,
				introduce_route: null,
				images: ['https://dummyimage.com/500X500/13c0f0/fff', 'https://dummyimage.com/500X500/e83333/fff'],
				parts: null,
				branches: [
					{
						color: null,
						image_url: '/upload/contents/product/ATH-M50xBT2/branch_3141_image_0.jpg',
						model: 'ATH-M50xBT2',
						is_release: true,
						release_at: '2021-08-03T16:20:17.717+08:00',
						stock_quantity: 7,
						price: '23,200',
					},
				],
			},
		]);
	}
}

async function initSlides() {
	const slideCount = await TopSlide.count();
	if (!slideCount) {
		TopSlide.create([
			{
				image_url: '/upload/contents/top/top-imgSQ1TWSTB.jpg',
				route: 'https://www.audio-technica.co.jp/product/ATH-SQ1TW_STB',
				title: 'ATH-SQ1TW STB',
				description: '<p>地球とつながる、フルワイヤレス。<br>発売記念『フォンタブ』プレゼント!!</p>',
			},
			{
				image_url: '/upload/contents/top/top-imgAT-SB727.jpg',
				route: 'https://www.audio-technica.co.jp/category/analog-product/',
				title: 'AT-SB727',
				description: '<p>アナログに恋をする。<br>レコードを挟んでどこでも楽しめるサウンドバーガー</p>',
			},
			{
				image_url: '/upload/contents/top/top-imgAT2020USB-XP.jpg',
				route: 'https://www.audio-technica.co.jp/product/AT2020USB-XP',
				title: 'AT2020USB-XP',
				description: '<p>周囲環境や収音用途に応じて音質を最適化できる<br>プロ仕様のコンデンサーUSBマイクロホン</p>',
			},
			{
				image_url: '/upload/contents/top/top-GL3ZIN.jpg',
				route: 'https://www.audio-technica.co.jp/category/headphone/wired/',
				title: 'MONSTER HUNTER',
				description: '<p>モンスターハンターをモチーフとした<br>限定生産ゲーミングヘッドセット</p>',
			},
		]);
	}
}

async function initNaviContents() {
	const slideCount = await NaviContent.count();
	if (!slideCount) {
		NaviContent.create([
			{
				image_url: '/upload/contents/navi/top_bnr_navi01.jpg',
				route: '/headphone/navi/',
				title_jp: 'ヘッドホン・イヤホンナビ',
				title_eng: 'Headphone Earphone Navi',
				content:
					'スマートフォンとともに日々の暮らしに欠かせないヘッドホン・イヤホン。あなたが好きな音楽や動画をより快適に聴くために、何を基準に選べばいいか？ たくさんのヒントをご用意しました。お気に入りの1台にきっと出会えます。',
			},
			{
				image_url: '/upload/contents/navi/top_bnr_navi02.jpg',
				route: '/cartridge/navi/',
				title_jp: 'リスニング レコード ナビ',
				title_eng: 'Listening Record Navi',
				content:
					'時代は変わり、おうちで過ごす時間が増えました。レコードで音楽を聴きながら穏やかな時を過ごしたい。でも、何から揃えていけばいいかわからない。初めてレコードを体験する方でも安心して始められるノウハウをお届けします。',
			},
			{
				image_url: '/upload/contents/navi/top_bnr_navi03.jpg',
				route: '/microphone/navi/',
				title_jp: 'マイクロホンナビ',
				title_eng: 'Microphone Navi',
				content:
					'いい音で動画配信をしたい。テレワークでの打ち合わせで、相手にクリアな声を届けたい。その願いを叶えるマイクロホンには、さまざまな種類があります。あなたが使う目的に合わせて、最適な1本を選ぶためのお手伝いをします。',
			},
		]);
	}
}

async function initTopic() {
	const topicCount = await Topic.count();
	if (!topicCount) {
		console.log('Do initTopic');
		Topic.create([
			{
				image_url: '/upload/contents/topic/topic_1.jpg',
				category: 'CAMPAIGN',
				title: '【オリジナルフォンタブ：プレゼント】',
				content:
					'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
				route: '/novelty_phonetab',
				create_time: new Date('2023-07-15 08:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_2.jpg',
				category: 'PRODUCTS',
				title: '【ATH-SQ1TW STB】',
				content: 'イヤホンと充電ケースに再生プラスチックを配合した素材を使用した完全ワイヤレス',
				route: '/product/ATH-SQ1TW_STB',
				create_time: new Date('2023-07-15 09:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_3.jpg',
				category: 'PRODUCTS',
				title: '【ワイヤレスヘッドホン ATH-M20xBT】',
				content: '購入後のアンケートよりいただいたお客様の声ご感想をご紹介',
				route: '/ATH-M20xBT/#uv',
				create_time: new Date('2023-07-15 10:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_4.jpg',
				category: 'PRODUCTS',
				title: '【ATH-M50xSTS-USB】',
				content: 'ストリーマーやコンテンツクリエイターのために設計されたヘッドセット',
				route: '/product/ATH-M50xSTS-USB',
				create_time: new Date('2023-07-15 11:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_5.jpg',
				category: 'PRODUCTS',
				title: '【AT-SB727 WH】',
				content: '久しぶりにレコードを聴きたくなった人には少しなつかしい、これからレコードを始める人にはとても新鮮。',
				route: '/product/AT-SB727_WH',
				create_time: new Date('2023-07-15 12:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_6.jpg',
				category: 'INFOMARTION',
				title: '【会員登録】',
				content: 'オーディオテクニカからのメールを受信していただくとお誕生日クーポンなどのお得な情報をお送りします。',
				route: '/member/',
				create_time: new Date('2023-07-15 13:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_7.jpg',
				category: 'SHORT SHORT STORY',
				title: 'アニメーション：',
				content: 'vol.139『次元』公開。 ＜音＞にまつわる、ちょっと不思議な世界をお楽しみください！',
				route: '/shortshortstory/',
				create_time: new Date('2023-07-15 14:00:00'),
			},
		]);
	}
}

async function initNews() {
	const newsCount = await News.count();
	if (!newsCount) {
		console.log('Do initNews');
		News.create([
			{
				image_url: '/upload/contents/news/news_1.jpg',
				news_route: '/',
				category_id: new Types.ObjectId('64b3f6f6c0cdc6c0776b7f1e'),
				_id: new Types.ObjectId('64b3f6e0133eab9359c8c780'),
				content:
					' 体温でカタチが変わる、イヤピースとして世界初*の素材を採用！ 完全ワイヤレスイヤホン用イヤピースを7月21日発売 ',
				route: '/',
				create_time: new Date('2023-07-06 08:00:00'),
			},
			{
				image_url: '/upload/contents/news/news_2.jpg',
				news_route: '/',
				category_id: new Types.ObjectId('64b3f6f6c0cdc6c0776b7f1e'),
				_id: new Types.ObjectId('64b3f75673f0722aae0d2904'),
				content:
					'サスティナブル素材をまとい、地球に優しくリニューアル！ 完全ワイヤレスイヤホン『ATH-SQ1TW STB』が公式オンラインストアなどで本日発売',
				route: '/',
				create_time: new Date('2023-06-16 08:00:00'),
			},
			{
				image_url: '/upload/contents/news/news_3.jpg',
				news_route: '/',
				category_id: new Types.ObjectId('64b3f824f83261fcbb095086'),
				_id: new Types.ObjectId('64b3f828681c6f24d7b94a22'),
				content: '子どもも大人も。音でもっとおもしろく。『Let’s! PLAY! SOUND with Audio-Technica』スタート',
				route: '/',
				create_time: new Date('2023-07-04 08:00:00'),
			},
		]);
	}
}

export { initCategory, initProduct, initPromote, initSlides, initNaviContents, initTopic, initNews };
