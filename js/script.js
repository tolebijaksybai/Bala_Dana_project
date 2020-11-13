window.addEventListener('DOMContentLoaded', function () {
	"use strict";

	const register = document.querySelector('.register'),
		overlay = document.querySelector('.overlay'),
		popupClose = document.querySelector('.popup-close');

	register.addEventListener('click', function () {
		// this.style.display = "none";
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	popupClose.addEventListener('click', () => {
		register.style.display = "block";
		overlay.style.display = "none";
		document.body.style.overflow = "";
	});


	const sendMessage = document.querySelector('.send-message'),
		overlayy = document.querySelector('.overlayy'),
		popupClosee = document.querySelector('.popup-closee');

	sendMessage.addEventListener('click', function () {
		// this.style.display = "none";
		overlayy.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	popupClosee.addEventListener('click', () => {
		sendMessage.style.display = "block";
		overlayy.style.display = "none";
		document.body.style.overflow = "";
	});

});