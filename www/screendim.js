(function (gap) {
    // dims by default
    var on = true;

    var screenDim = { };

    screenDim.enable = function () {
        on = true;
        gap.exec(null, null, 'ScreenDim', 'enable', []);
    };

    screenDim.disable = function () {
        on = false;
        gap.exec(null, null, 'ScreenDim', 'disable', []);
    };

    screenDim.toggle = function () {
        if (on) {
            this.disable();
        } else {
            this.enable();
        }
    };

    Joshfire.factory.addons.screendim = screenDim;
    
}).call(this, (window.cordova || window.Cordova));
