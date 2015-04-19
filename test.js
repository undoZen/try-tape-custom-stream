'use strict';
var tape = require('tape');
require('tape-bunyan-pub-stream')('try-tape-custom-stream');

tape(function (test) {
    test.plan(2);
    test.ok(true, 'yeah');
    setTimeout(function () {
        test.ok(true, 'ok');
    }, 1000);
});
