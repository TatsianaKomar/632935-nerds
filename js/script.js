var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var isStorageSupport = true;
var storagename = localStorage.getItem("username");
var storageemail = localStorage.getItem("email");


  
try {
	storagename = localStorage.getItem("username");
	storageemail = localStorage.getItem("email");
	} catch (err) {
		isStorageSupport = false;
	}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storagename || storageemail) {
		username.value = storagename;
		email.value = storageemail
		text.focus();
	} else {
		username.focus();
	}
});
	
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
	
form.addEventListener("submit", function (evt) {
	if (!username.value || !email.value || !text.value) {
		evt.preventDefault();
		console.log("Необходимо заполнить все поля");
	} else {
		if (isStorageSupport) {
		localStorage.setItem("username", username.value);
		localStorage.setItem("email", email.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});