jQuery(document).ready(function() {
	var w = 0;
	var t = 400;
	var galleryCount = jQuery('.gallery-item').length - 1;
	var position = 0;
	var init = true;

	var resizeGallery = function () {
		w = jQuery('#main').width();
		if (w > 800) {
			if (w > 1200) {
				w = 1200;
			}
			t = w/2;
		} else {
			t = 400;
		}
		jQuery('.gallery-item').each(function (index) {
			jQuery(this).css({ width: w });
			if (index === position) {
				var h = jQuery(this).height() + 16;
				if (!init) {
					jQuery('#project-gallery')
						.animate({ width: w, height: h }, t);
					jQuery('#project-gallery-container')
						.animate({ height: h }, t);
					jQuery('#project-gallery-ctrl')
							.css({ height: h });
				} else {
					jQuery('#project-gallery-container, #project-gallery')
						.css({ height: w/2  + 16 });
					jQuery('#project-gallery-ctrl')
						.css({ width: '100%', height: w/2 })
						.append("<div id=\"next\"></div><div id=\"prev\"></div>");
					jQuery('#project-gallery-ctrl').click(function (e) {
						if (e.pageX - w/5 > w/2) {
							position = (position < galleryCount) ? position +=1 : position = 0;
						} else {
							position = (position > 0) ? position -=1 : position = galleryCount;
						}
						changeImage();
					});
					init = false;
				}
				jQuery(this).animate({ opacity: 1, left: -w * position + w * index }, t);
			} else {
				jQuery(this).animate({ opacity: 0, width: w, left: -w * position + w * index }, t);
			}
		});
	};

	var appendIndicators = function () {
		jQuery('.gallery-item').each(function (index) {
			if (position != index) {
				jQuery('#gallery-indicator-container')
					.append('<div class="gallery-indicator"></div>');
			} else {
				jQuery('#gallery-indicator-container')
					.append('<div class="gallery-indicator-current"></div>');
			}
		});
	};

	var changeImage = function () {
		resizeGallery();
		jQuery('.gallery-indicator-current')
				.attr('class', 'gallery-indicator');
		jQuery('.gallery-indicator')
			.slice(position, position+1)
			.attr('class', 'gallery-indicator-current');
	};

	resizeGallery();
	appendIndicators();

	jQuery(window).resize(function () {
		jQuery('.gallery-item, #project-gallery, #project-gallery-container').finish();
		resizeGallery();
	});
});
