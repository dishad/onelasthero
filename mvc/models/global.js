// sample static global base model
var model = {
  content: {
    appTitle: 'onelasthero',
    pageTitle: '{content.appTitle}'
  }
};

// extend global model provide additional useful vars at runtime and export it
module.exports = function(req, res) {
  var scripts;

  if (process.env.NODE_ENV ==='development') {
    scripts = [ '/js/onelasthero.js'];
  }
  else {
    scripts = [ '/js/onelasthero-min.js' ];
  }


  return {

    // always static
    content: model.content,

    // recalculated each require
    currentYear: new Date().getFullYear(),
    mainDomain: req.headers['x-forwarded-host'] || req.headers.host,
    NODE_ENV: process.env.NODE_ENV,
    scripts: scripts
  };
};
