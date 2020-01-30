/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(window).load(function () {
    $(".trigger_popup_walk").click(function(){
       $('.hover_bkgr_walk').show();
    });
    $('.hover_bkgr_walk').click(function(){
        $('.hover_bkgr_walk').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_walk').hide();
	});
	
    $(".trigger_popup_15wl").click(function(){
       $('.hover_bkgr_15wl').show();
    });
    $('.hover_bkgr_15wl').click(function(){
        $('.hover_bkgr_15wl').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_15wl').hide();
	});
	
    $(".trigger_popup_15wc").click(function(){
       $('.hover_bkgr_15wc').show();
    });
    $('.hover_bkgr_15wc').click(function(){
        $('.hover_bkgr_15wc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_15wc').hide();
    });
	
    $(".trigger_popup_30wl").click(function(){
       $('.hover_bkgr_30wl').show();
    });
    $('.hover_bkgr_30wl').click(function(){
        $('.hover_bkgr_30wl').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_30wl').hide();
    });
	
    $(".trigger_popup_30wc").click(function(){
       $('.hover_bkgr_30wc').show();
    });
    $('.hover_bkgr_30wc').click(function(){
        $('.hover_bkgr_30wc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_30wc').hide();
    });
	
    $(".trigger_popup_60wl").click(function(){
       $('.hover_bkgr_60wl').show();
    });
    $('.hover_bkgr_60wl').click(function(){
        $('.hover_bkgr_60wl').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_60wl').hide();
    });
	
    $(".trigger_popup_60wc").click(function(){
       $('.hover_bkgr_60wc').show();
    });
    $('.hover_bkgr_60wc').click(function(){
        $('.hover_bkgr_60wc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_60wc').hide();
    });
	
    $(".trigger_popup_sitting").click(function(){
       $('.hover_bkgr_sitting').show();
    });
    $('.hover_bkgr_sitting').click(function(){
        $('.hover_bkgr_sitting').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_sitting').hide();
    });
	
    $(".trigger_popup_30sl").click(function(){
       $('.hover_bkgr_30sl').show();
    });
    $('.hover_bkgr_30sl').click(function(){
        $('.hover_bkgr_30sl').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_30sl').hide();
    });
	
    $(".trigger_popup_30sc").click(function(){
       $('.hover_bkgr_30sc').show();
    });
    $('.hover_bkgr_30sc').click(function(){
        $('.hover_bkgr_30sc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_30sc').hide();
    });
	
    $(".trigger_popup_onsl").click(function(){
       $('.hover_bkgr_onsl').show();
    });
    $('.hover_bkgr_onsl').click(function(){
        $('.hover_bkgr_onsl').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_onsl').hide();
    });
	
    $(".trigger_popup_onsc").click(function(){
       $('.hover_bkgr_onsc').show();
    });
    $('.hover_bkgr_onsc').click(function(){
        $('.hover_bkgr_onsc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_onsc').hide();
    });
	
    $(".trigger_popup_training").click(function(){
       $('.hover_bkgr_training').show();
    });
    $('.hover_bkgr_training').click(function(){
        $('.hover_bkgr_training').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_training').hide();
    });
});

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#header" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #header, #wrapper')
						.css('transition', 'none');

	});

})(jQuery);