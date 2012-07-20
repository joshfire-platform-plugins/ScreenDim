define([], function () {
  return function(runtime, params, callback) {

    runtime.xcodeproj.cordovaPlist.Plugins.ScreenDim = "ScreenDimPlugin";

    runtime.xcodeproj.addSourceFile("ScreenDimPlugin.m");
    runtime.xcodeproj.addHeaderFile("ScreenDimPlugin.h");

    callback();
  };
});