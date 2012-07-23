define([], function () {
  return function(runtime, params, callback) {

    runtime.xcodeproj.cordovaPlist.Plugins.ScreenDim = "ScreenDimPlugin";

    runtime.async.series([
      function(cb) {
        runtime.xcodeproj.addSourceFile("ScreenDimPlugin.m",cb);
      },
      function(cb) {
        runtime.xcodeproj.addHeaderFile("ScreenDimPlugin.h",cb);
      }
    ],callback);
    
  };
});