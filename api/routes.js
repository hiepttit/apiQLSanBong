let UsersCtrl = require('./Controllers/UsersController');
let CustomersCtrl = require('./Controllers/CustomersController');
module.exports = function(app) {
    // todoList Routes
    app.route('/Users')
      .get(UsersCtrl.get)
      .post(UsersCtrl.store);
  
    app.route('/Users/:ID')
      .get(UsersCtrl.detail)
      .put(UsersCtrl.update)
      .delete(UsersCtrl.delete);

      app.route('/Customers')
      .get(CustomersCtrl.get)
  };