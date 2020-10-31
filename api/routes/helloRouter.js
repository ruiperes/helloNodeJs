'use: strict';
module.exports = function(app) {
    var hello = require('../controllers/helloController');

    app.route('/hello')
        .get(hello.message);

}