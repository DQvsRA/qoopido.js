;(function(definition, window, document, undefined) {
	'use strict';

	var namespace  = 'qoopido',
		name       = 'support/css/boxshadow',
		initialize = function initialize() {
			[].push.apply(arguments, [ window, document, undefined ]);

			window[namespace] = window[namespace] || { };

			return (window[namespace][name] = definition.apply(null, arguments));
		};

	if(typeof define === 'function' && define.amd) {
		define([ 'qoopido/support' ], initialize);
	} else {
		initialize(window[namespace].support);
	}
}(function(mSupport, window, document, undefined) {
	'use strict';

	mSupport.addTest('/css/boxshadow', function(deferred) {
		(mSupport.supportsProperty('box-shadow')) ? deferred.resolve(mSupport.getProperty('box-shadow')) : deferred.reject();
	});

	return mSupport.test['/css/boxshadow'];
}, window, document));