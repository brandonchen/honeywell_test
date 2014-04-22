Honeywell = function() {}

Honeywell.ClickRotatePopup = function() {}

Honeywell.ClickRotatePopup.prototype.init = function(center_target) {
	var directions = ['north', 'south', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest'],
		index = 0,
		clone = $('#popupPrototype').clone().show(),
		_this = this

	$('#main').append(clone)
	
	// Position of popup relative to circle
	this.position = this.getPositions(clone, center_target)
	clone.css({
		top: this.position.north.top,
		left: this.position.north.left
	})

	$(center_target).on('click', function() {
		clone.toggle()
		if (clone.is(':visible')) {
			index += 1
			if (index === 8) index = 0
			var cls = directions[index]
			clone.attr('class', cls)
			clone.css({
				top:  _this.position[cls].top,
				left: _this.position[cls].left
			})
		}
	})
}

Honeywell.ClickRotatePopup.prototype.getPositions = function(clone, center_target) {
	var circle = $(center_target),
		offset = circle.offset(),
		position = {
			'north': {
				'top': offset.top - clone.height(),
				'left': offset.left - clone.width() / 2 + circle.width() / 2
			},
			'south': {
				'top': offset.top + circle.height(),
				'left': offset.left - clone.width() / 2 + circle.width() / 2
			},
			'east': {
				'top': offset.top - clone.height() / 2 + circle.width() / 2,
				'left': offset.left + 90
			},
			'west': {
				'top': offset.top - clone.height() / 2 + circle.width() / 2,
				'left': offset.left - clone.width() - 50
			},
			'northwest': {
				'top': offset.top - 334,
				'left': offset.left - 286
			},
			'northeast': {
				'top': offset.top - 336,
				'left': offset.left + 24
			},
			'southeast': {
				'top': offset.top - 24,
				'left': offset.left + 25
			},
			'southwest': {
				'top': offset.top -23,
				'left': offset.left - 284
			}
		}

	return position
}