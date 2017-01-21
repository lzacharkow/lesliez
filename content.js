var fs = require('fs');

module.exports = {
	styleguide: fs.readFileSync('./content/styleguide.html', {encoding: 'utf8'}),
	home: fs.readFileSync('./content/home/index.html', {encoding: 'utf8'}),
	about: {},
	resume: {},
	projectGroups: [
		{
			id: 'uo',
			group: "Urban Outfitters",
			role: "My role at uo",
			projects: [
				{
					id: 'product-page',
					title: "Product Page",
					subtitle: "UO Case Study",
					details: [
						{
							title: "Details",
							items: [ "One", "Two", "Three" ]
						}, {
							title: "Details",
							items: [ "One", "Two", "Three" ]
						}, {
							title: "Details",
							items: [ "One", "Two", "Three" ]
						}, {
							title: "Details",
							items: [ "One", "Two", "Three" ]
						}
					],
					content: fs.readFileSync('./content/projects/uo/product-page.html')
				},
				{
					id: 'navigation',
					title: "Navigation &amp; Taxonomy",
					content: "This is the navigation content."
				}
			]
		},
		{
			id: 'opower',
			group: "Opower",
			role: "My role at opower",
			projects: [
				{
					id: 'energy-widgets',
					content: "These are the energy widgets."
				}
			]
		},
		{
			id: 'gdi',
			group: "Girl Develop It!",
			role: "My role at GDI",
			projects: [
				{
					id: 'infographic',
					content: "This is the infographic."
				},
				{
					id: 'business-cards',
					content: "These are the business cards."
				},
				{
					id: 'summit-logo',
					content: "This is the summit logo."
				}
			]
		}
	]
};
