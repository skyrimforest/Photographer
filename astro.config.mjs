// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Photographer',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/skyrimforest/Photographer.git' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: '课程介绍', slug: 'guides/introduction' },
						{ label: '阶段00课程大纲', slug: 'guides/outline' },
						{ label: '阶段01技术基础', slug: 'guides/techbasic' },
						{ label: '阶段02构图基础', slug: 'guides/visualbasic' },
						{ label: '阶段03光影风格', slug: 'guides/shadowexpression' },
						{ label: '阶段04色彩表达', slug: 'guides/color' },
						{ label: '阶段05个人风格', slug: 'guides/personaltheme' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
