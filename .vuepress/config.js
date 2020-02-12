// .vuepress/config.js
module.exports = {
	base:"/awesome-node/",
	themeConfig: {
		title:"Awesome-Node",
		sidebar: [
			'/',
			['/resources/webframeworks', 'Web-frameworks'],
			['/resources/madscience', 'Mad science'],
		],
		repoLabel: 'Contribute!',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
	}
}