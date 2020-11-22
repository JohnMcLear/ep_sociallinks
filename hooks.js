const path = require('path');
const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
  args.content += eejs.require('ep_sociallinks/templates/embedButtons.html');
  return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content += eejs.require('ep_sociallinks/templates/scripts.html', {}, module);
  return cb();
};
