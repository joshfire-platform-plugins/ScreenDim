define([], function () {
  return function(runtime, params, callback) {

    if (params.deploy.cordova && (params.deploy.ios || params.deploy.android)) {
      runtime.readFile("www/screendim.js",function(err,cnt) {
        params.content+=cnt;

        params.content+="Joshfire.factory.onReady(function() {Joshfire.factory.addons.screendim."+
          (params.options.disabled?"disable":"enable")+
          "();});";

        callback();
      });
    } else {
      callback();
    }

  };
});