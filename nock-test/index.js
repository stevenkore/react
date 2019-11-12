var request = require('superagent');

var getUserFollowers = function(username, callback) {
  request
    .get(`https://api.github.com/users/${username}/followers`)
      .set('User-Agent', 'superagent')
    .end(function(err, res) {
      if (!err) {
        var users = res.body.map(function(user) {
          return user.login;
        });
        callback(null, users);
      } else {
        callback('Error Occurred!');
      }
    });
};

module.exports.getUserFollowers = getUserFollowers;
