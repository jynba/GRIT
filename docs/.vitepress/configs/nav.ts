import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
	{
		text: '资源导航',
		link: '/resources/navigation/nav',
	},
	{
		text: '时间轴',
		link: '/timeline/weekly2023',
	},
	{
		text: '前端学习',
		items: [
			{
				text: '扎马步',
				items: [
					{ text: 'HTML5 / CSS3', link: '/fe/css/css' },
					{ text: 'JavaScript', link: '/fe/js/what_is_js' },
					{ text: 'Vue3', link: '/fe/vue/vue_core_basis' },
					{ text: 'Nodejs', link: '/fe/nodejs/node_basis' },
					{ text: 'Git', link: '/fe/git/git' },
					{ text: 'Net', link: '/fe/net/HTTP_version' },
					{ text: 'Webpack', link: '/fe/webpack/webpack_basis' },
					{ text: 'Vscode', link: '/fe/ide/vscode' },
					{ text: '前端编程题', link: '/fe/js/coding_problem' },
				],
			},
			{
				text: '项目',
				items: [
					{ text: 'GO定向越野', link: '/projects/dxyy_project/headline' },
					{ text: 'AI中国象棋', link: '/projects/chess_project/headline' },
				],
			},
		],
	},
	{
		text: '计算机基础',
		link: '/cs/network',
	},
	{
		text: '其它语言',
		items: [{ text: 'Python', link: '/lang/python/crawler' }],
	},
	{
		text: '高效搬砖',
		items: [
			{ text: 'Antd 虐我千百遍', link: '/work/antd' },
			{ text: '第三方工具', link: '/work/tools' },
			{
				text: '地图开发',
				items: [{ text: '微信小程序地图开发', link: '/work/maps/wx_map' }],
			},
		],
	},
];
