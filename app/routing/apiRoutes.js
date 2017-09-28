var friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/submit', function(req, res) {
		friendsData.push(req.body);
		console.log(friendsData);
		res.json(true);
	});
}