import type { DefaultTheme } from 'vitepress';
const timeline: DefaultTheme.SidebarItem[] = [
	{
		text: '时间轴',
		collapsed: true,
		items: [
			{ text: '2023时间轴', link: '/timeline/weekly2023' },
			{ text: '我的随笔', link: '/timeline/shuibi' },
			{ text: '我的博文', link: '/timeline/blog_essay' },
			{ text: '如何用策略模式优化多个if-else？', link: '/timeline/strategy' },
		],
	},
];

export default timeline;
