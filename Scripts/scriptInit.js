// Commom Plugins
(function($) {

	'use strict';

	// Scroll to Top Button.
	if (typeof blueScript.PluginScrollToTop !== 'undefined') {
		blueScript.PluginScrollToTop.initialize();
	}

	// Parallax
	if (typeof blueScript.PluginParallax !== 'undefined') {
		blueScript.PluginParallax.initialize();
	}

}).apply(this, [jQuery]);

// Commom Partials
(function($) {

	'use strict';

	// Sticky Header
	if (typeof blueScript.StickyHeader !== 'undefined') {
		blueScript.StickyHeader.initialize();
	}

	// Nav Menu
	if (typeof blueScript.Nav !== 'undefined') {
		blueScript.Nav.initialize();
	}

}).apply(this, [jQuery]);