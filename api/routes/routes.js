
let UsersCtrl = require('../Controllers/UserController');
let small_pitchCtrl = require('../Controllers/Small_pitchController');
let pitch_ownerCtrl = require('../Controllers/Pitch_ownerController');
let pitch_orderCtrl = require('../Controllers/Pitch_orderController');
let big_pitchCtrl = require('../Controllers/Big_pitchController');

module.exports = function (app) {
  // todoList Routes
  app.route('/Users')
    .get(UsersCtrl.get)
    .post(UsersCtrl.store);

  app.route('/Users/:ID')
    .get(UsersCtrl.detail)
    .put(UsersCtrl.update)
    .delete(UsersCtrl.delete);

  app.route('/smallpitch')
    .get(small_pitchCtrl.get)
    .post(small_pitchCtrl.store);
  app.route('/smallpitch/findPitch')
    .get(pitch_orderCtrl.findPitch)
    
  app.route('/smallpitch/:ID')
    .get(small_pitchCtrl.detail)
    .put(small_pitchCtrl.update)
    .delete(small_pitchCtrl.delete);

  app.route('/pitchowner')
    .get(pitch_ownerCtrl.get)
    .post(pitch_ownerCtrl.store);

  app.route('/pitchowner/:ID')
    .get(pitch_ownerCtrl.detail)
    .put(pitch_ownerCtrl.update)
    .delete(pitch_ownerCtrl.delete);

  app.route('/pitchorder')
    .get(pitch_orderCtrl.get)
    .post(pitch_orderCtrl.store);

  app.route('/pitchorder/:ID')
    .get(pitch_orderCtrl.detail)
    .put(pitch_orderCtrl.update)
    .delete(pitch_orderCtrl.delete);

  app.route('/bigpitch')
    .get(big_pitchCtrl.get)
    .post(big_pitchCtrl.store);

  app.route('/bigpitch/search/')
    .get(big_pitchCtrl.search);

  app.route('/bigpitch/:ID')
    .get(big_pitchCtrl.detail)
    .put(big_pitchCtrl.update)
    .delete(big_pitchCtrl.delete);
  app.route('/bigpitch/children/:ID')
    .get(small_pitchCtrl.findByIdBigPitch);
};