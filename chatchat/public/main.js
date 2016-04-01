$(function() {
	var $window = $(window);
	var $messages = $('.messages');
	var $usernameInput = $('.usernameInput');
	var $inputMessage = $('.inputMessage');
	var $loginPage = $('.login.page');
	var $chatPage = $('.chat.page');
	var socket = io();

	var username;
	var $currentInput = $usernameInput.focus();

	function setUsername () {
		username = $usernameInput.val().trim();
		if(username) {
			$loginPage.fadeOut();
			$chatPage.show();
			$loginPage.off('click');
			$currentInput = $inputMessage.focus();

			socket.emit('add user', username);
		}
	}

	function addParticipantsMessage (data) {
		var message = '';
		if(data.numUsers === 1) {
			message += "there's 1 participant";
		} else {
			message += "there are " + data.numUsers + " participants";
		}
		log(message);
	}

	function log(message, options) {
		var $el = $('<li>').addClass('log').text(message);
		addMessageElement($el, options);
	}

	function addMessageElement (el, options) {
		var $el = $(el);

		if(!options) {
			options = {};
		}
		if(typeof options.fade === 'undefined') {
			options.fade = true;
		}
		if(typeof options.prepend === 'undefined') {
			options.prepend = false;
		}

		if(options.fade) {
			$el.hide().fadeIn(3000);
		}
		if(options.prepend) {
			$messages.prepend($el);
		} else {
			$messages.append($el);
		}

		$messages[0].scrollTop = $messages[0].scrollHeight
	}

	$window.keydown(function (event) {
		if(event.which === 13) {
			if(username) {

			} else {
				setUsername();
			}
		}
	});

	socket.on('login', function(data) {
		connected = true;
		var message = "Welcome to chatchat - "
		log(message, {
			prepend: true,
		});
		addParticipantsMessage(data);
	});
});