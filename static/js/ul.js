/**
 * Created by Yuntian Chai on 15-5-7.
 */

var UL = {version:"0.0.1"};

UL.DEBUG = true;

UL.log = function(){if(UL.DEBUG){console.log.apply(console,arguments);}};

UL.error = function(){if(UL.DEBUG){console.error.apply(console, arguments);}};

UL.warn = function(){if(UL.DEBUG){console.warn.apply(console, arguments);}};
