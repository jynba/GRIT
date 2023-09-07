import type { DefaultTheme } from 'vitepress';

const other: DefaultTheme.SidebarItem[] = [
	{
		text: 'Java',
		items: [
			{
				text: 'java中static加载顺序',
				link: '/other/java/static',
			},
			{
				text: '浅拷贝与深拷贝',
				link: '/other/java/copy',
			},
			{
				text: '关于java函数方法中把值带出去的问题',
				link: '/other/java/this',
			},
			{
				text: 'HashSet 是否无序',
				link: '/other/java/hashMap',
			},
		],
	},
];
export default other;
