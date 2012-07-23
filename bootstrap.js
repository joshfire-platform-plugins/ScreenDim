define([], function () {
  return function(runtime, params, callback) {

    if (params.deploy.flags.cordova && (params.deploy.flags.ios || params.deploy.flags.android)) {
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