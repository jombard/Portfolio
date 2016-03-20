// Parallax
(function(blueScript, $) {

	blueScript = blueScript || {};

	$.extend(blueScript, {

		PluginParallax: {

			defaults: {
				itemsSelector: '.parallax',
				responsive: true,
				horizontalScrolling: false
			},

			initialize: function(opts) {

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			isMobile: function() {
			  try { 
			  	document.createEvent("TouchEvent"); 
			  	return true; 
			  }
			  catch(e) { 
			  	return false; 
			  }
			},

			build: function() {
				if (!$(this.options.itemsSelector).get(0) || !($.isFunction($.fn.stellar)) || typeof(Modernizr) == 'undefined') {
					return this;
				}

				var self = this;

				if (!this.isMobile()) {
					$.stellar(self.options);
				} else {
					$(self.options.itemsSelector).addClass('parallax-disabled');
				}

				return this;
			}
		}
	});

}).apply(this, [window.blueScript, jQuery]);