import type { DefaultTheme } from 'vitepress';
const resources: DefaultTheme.SidebarItem[] = [
	{
		text: '资源导航',
		collapsed: true,
		items: [
			{ text: '站点导航', link: '/resources/navigation/nav' },
			{ text: '前端文章', link: '/resources/website/fe_blogs' },
			{ text: '其它文章', link: '/resources/website/other_blogs' },
			{ text: '常用网站', link: '/resources/website/websites_recom' },
		],
	},
];

export default resources;
