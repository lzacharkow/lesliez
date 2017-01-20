var fs = require('fs');

module.exports = {
	home: fs.readFileSync('./content/home/index.html', {encoding: 'utf8'}),
	about: {},	
	resume: {},
	projectIndex: [
		{
			id: 'uo',			
			group: "Urban Outfitters",
			role: "My role at uo",
			projects: [
				{
					id: 'product-page',
					content: "The product page",
				}
			]
		}
	]
};
