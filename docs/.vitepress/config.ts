import { defineConfig } from 'vitepress';

const base = '/';
export default defineConfig({
	title: 'GRIT',
	description: '描述信息',
	base: '/GRIT/', // 部署到github上时访问的根目录
	lastUpdated: true, // 页面上展示最后更新的时间
	head: [
		// 打包后使用
		['link', { rel: 'icon', href: `${base}favicon.ico` }],
		//本地开发使用
		['link', { rel: 'icon', href: '/favicon.ico' }], // 也是放在/public目录中
	],
	themeConfig: {
		logo: '/logo.png', // 也是放在/public目录中
		nav: [
			// 页面最上面一行的导航栏
			{ text: '首页', link: '/' }, // 导航栏名字和目录地址，如果文件名叫index.md可以省略不写，路径只写到目录
		],
		// 配置github地址
		socialLinks: [{ icon: 'github', link: 'https://github.com/jynba/GRIT' }],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-5-21',
		},
		// 配置从导航栏进去后的侧边栏
		sidebar: {
			'/GRIT/': [
				{
					text: '通用函数',
					items: [
						{ text: '过滤对象', link: '/GRIT/functions/' },
						{ text: '统计执行时间', link: '/GRIT/functions/task/' },
					],
				},
			],
		},
	},
});
