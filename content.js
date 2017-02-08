var fs = require('fs');

module.exports = {
	styleguide: fs.readFileSync('./content/styleguide.html', {encoding: 'utf8'}),
	resume: [
		{
			groupName: "Employment",
			items: [
				{
					label: "Opower (acquired by Oracle)",
					link: "https://opower.com/",
					title: "Senior UX Designer/Developer",
					dates: "September 2015 - December 2016"
				}, {
					label: "Urban Outfitters",
					link: "http://www.urbanoutfitters.com/urban/index.jsp",
					title: "Global Product Mgr/Interaction Designer",
					dates: "March 2014 - August 2015"
				}, {
					label: "Fabric Horse",
					link: "http://fabrichorse.com/",
					title: "Visual Designer & Production Assistant",
					dates: "June 2011 - August 2012<br>August 2013 - March 2014"
				}, {
					label: "Squareknot",
					link: "https://squareknot.com/",
					title: "Interaction Designer",
					dates: "May 2012 - August 2013"
				}
			]
		}, {
			groupName: "Education",
			items: [
				{
					label: "The University of the Arts",
					link: "http://www.uarts.edu/",
					title: "Bachelor of Science in Industrial Design",
					dates: "Graduated May 2012 with honors"
				}, {
					label: "Emily Carr University",
					link: "http://www.ecuad.ca/",
					title: "Concentration in Soft Product Design",
					dates: "Study abroad Spring 2011 semester"
				}
			]
		}
	],
	projectGroups: [
		{
			id: 'side-projects',
			groupName: "Side projects",
			projects: [
				{
					id: 'tabby-cat',
					title: "Tabby Cat",
					subtitle: "A Chrome Extension",
					details: [
					 	{
							title: "Project scope",
							items: [
								"Design",
								"Illustration",
								"Engineering"
							]
						}, {
							title: "Date",
							items: [
								"Created January 2016",
								"Development ongoing"
							]
						}, {
							title: "Links",
							items: [
								'<a href="https://chrome.google.com/webstore/detail/mefhakmgclhhfbdadeojlkbllmecialg" target="_blank">Chrome Web Store</a>'
							]
						}
					],
					content: fs.readFileSync('./content/projects/side-projects/tabby-cat.html')
				}
			]
		},
		{
			id: 'opower',
			groupName: "Opower",
			desc: "UX Design & Development",
			role: fs.readFileSync('./content/roles/opower.html'),
			org: [
				{
					name: "UX Designers"
				}, {
					name: "UX Researchers"
				}, {
					name: "UX Designer / Developers",
					me: true
				}, {
					name: "Engineers"
				}
			],
			moreProjects: {
				hide: true
			},
			projects: [
				{
					id: 'energy-widgets',
					title: "Opower Energy Widgets",
					subtitle: "Opower Case Study",
					details: [
						{
							title: "About this Project",
							items: [
								"Role: UX Design & Development",
								"Company: Opower",
								"Timeframe: Fall 2015-Spring 2016"
							]
						}, {
							title: "My Contributions",
							items: [
								"UX Design",
								"Visual Design",
								"Front-end Development"
							]
						}, {
							title: "Team",
							items: [
								"Marina Posniak, UX Writer",
								"Jim Jones, Visual Designer",
								"Aaron Stevens, UX Designer",
								"Salmon Suhail, Product Mgr",
								"Justin Secor, UX Development Mgr"
							]
						}
					],
					content: fs.readFileSync('./content/projects/opower/energy-widgets.html')
				}
			]
		},
		{
			id: 'uo',
			groupName: "Urban Outfitters",
			desc: "Product Mgmt & Interaction Design",
			role: fs.readFileSync('./content/roles/uo.html'),
			org: [
				{
					name: "Product Mgmt / UX",
					me: true
				}, {
					name: "Creative"
				}, {
					name: "Engineering"
				}, {
					name: "Analytics"
				}
			],
			moreProjects: [
				"Responsive Site",
				"Store Pages",
				"Shops"
			],
			projects: [
				{
					id: 'product-page',
					title: "Product Page",
					subtitle: "Urban Outfitters Case Study",
					details: [
						{
							title: "About this Project",
							items: [
								"Prod Mgmt & UX",
								"Urban Outfitters",
								"Spring 2014"
							]
						}, {
							title: "My Contributions",
							items: [
								"Research",
								"Wireframing",
								"Feature roadmap",
								"Developer support"
							]
						}, {
							title: "Team",
							items: [
								"Mika Osborn, Visual Design",
								"Mike Pitone, UX Director",
								"Matt Owen, Creative Director",
								"Cheryl Schimpf, Front-end Dev Mgr"
							]
						}, {
							title: "Links",
							items: [
								'<a href="http://www.urbanoutfitters.com/urban/catalog/productdetail.jsp?id=41149014&category=W-DRESSES-GOINGOUT" target="_blank">Live product</a>'
							]
						}
					],
					content: fs.readFileSync('./content/projects/uo/product-page.html')
				},
				{
					id: 'navigation',
					title: "Taxonomy & Navigation",
					subtitle: "Urban Outfitters Case Study",
					details: [
						{
							title: "About this Project",
							items: [
								"Prod Mgmt & UX",
								"Urban Outfitters",
								"Summer - Fall 2014"
							]
						}, {
							title: "My Contributions",
							items: [
								"Research",
								"Wireframing",
								"Prototyping",
								"Quantitative studies",
								"Developer support"
							]
						}, {
							title: "Team",
							items: [
								"Mika Osborn, Visual Design",
								"Mike Pitone, UX Director",
								"Matt Owen, Creative Director",
								"Cheryl Schimpf, Front-end Dev Mgr"
							]
						}, {
							title: "Links",
							items: [
								'<a href="http://www.urbanoutfitters.com" target="_blank">Live product</a>'
							]
						}
					],
					content: fs.readFileSync('./content/projects/uo/navigation.html')
				}
			]
		},
		{
			id: 'gdi',
			groupName: "Girl Develop It!",
			desc: "Freelance Illustration & Graphic Design",
			role: fs.readFileSync('./content/roles/gdi.html'),
			projects: [
				{
					id: 'infographic',
					title: "Five Year Infographic",
					details: [
						{
							title: "Company",
							items: [
								"Girl Develop It!"
							]
						}, {
							title: "Project scope",
							items: [
								"Content strategy",
								"Design",
								"Illustration"
							]
						}, {
							title: "Date",
							items: [
								"Summer 2015"
							]
						}
					],
					content: fs.readFileSync('./content/projects/gdi/infographic.html')
				},
				{
					id: 'business-cards',
					title: "Team Business Cards",
					details: [
						{
							title: "Company",
							items: [
								"Girl Develop It!"
							]
						}, {
							title: "Project scope",
							items: [
								"Design",
								"Illustration"
							]
						}, {
							title: "Date",
							items: [
								"Summer 2016"
							]
						}
					],
					content: fs.readFileSync('./content/projects/gdi/business-cards.html')
				},
				{
					id: 'summit-logo',
					title: "2016 Summit Logo",
					details: [
						{
							title: "Company",
							items: [
								"Girl Develop It!"
							]
						}, {
							title: "Project scope",
							items: [
								"Design",
								"Illustration"
							]
						}, {
							title: "Date",
							items: [
								"Fall 2016"
							]
						}
					],
					content: fs.readFileSync('./content/projects/gdi/summit-logo.html')
				}
			]
		},
		{
			id: 'various-work',
			groupName: 'Various work',
			projects: [
				{
					id: 'cyclista',
					title: "Cyclista",
					details: [
						{
							title: "Project details",
							items: [
								"Industrial Design senior thesis project"
							]
						}, {
							title: "Scope of work",
							items: [
								"Product design",
								"Fabrication",
								"Graphic design"
							]
						}, {
							title: "Date",
							items: [
								"Spring 2012"
							]
						}
					],
					content: fs.readFileSync('./content/projects/various/cyclista.html')
				},
				{
					id: 'flora-catalogus',
					title: "Flora Catalogus",
					details: [
						{
							title: "Project details",
							items: [
								'Art installation for <a href="http://datagarden.org/5665/the-switched-on-garden-002/" target="_blank">The Switched-on Garden 002</a>'
							]
						}, {
							title: "Scope of work",
							items: [
								"Installation design",
								"Fabrication"
							]
						}, {
							title: "Collaborators",
							items: [
								"Kyle Stetz, Software engineering"
							]
						}, {
							title: "Date",
							items: [
								"Fall 2012"
							]
						}
					],
					content: fs.readFileSync('./content/projects/various/flora-catalogus.html')
				},
				{
					id: 'trestleator',
					title: "The Trestleator",
					details: [
						{
							title: "Project details",
							items: [
								'Projection installation and mobile app commissioned by <a href="http://www.thetrestleinn.com/" target="_blank">The Trestle Inn</a>'
							]
						}, {
							title: "Scope of work",
							items: [
								"App design"
							]
						}, {
							title: "Collaborators",
							items: [
								"Kyle Stetz, Software engineering",
								"Kerry Gilbert, Software engineering"
							]
						}, {
							title: "Date",
							items: [
								"Winter 2013"
							]
						}
					],
					content: fs.readFileSync('./content/projects/various/trestleator.html')
				}
			]
		}
	],
	writing: [
		{
			name: "24 ways",
			articles: [{
				label: "How to Make a Chrome Extension to Delight (or Troll) Your Friends",
				link: "https://24ways.org/2016/how-to-make-a-chrome-extension/",
				date: "December 2016"
			}]
		}
	]
};
