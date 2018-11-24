let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneInput = document.getElementsByName("phone")[0],
	mailInput = document.getElementsByName("mail")[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0],
	bigheading = document.getElementsByTagName('h1')[0];

function bhover() {
	bigheading.textContent = "Приглашаем Вас погрузиться в незабываемый отдых!"
};

bigheading.addEventListener("mouseenter", bhover);
bigheading.addEventListener("mouseleave", function() {
	bigheading.textContent = "Мы знаем как правильно отдохнуть душой и телом"
});

function hover() {
	heading.textContent = "Абсолютно все!"
};

heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", function() {
	heading.textContent = "Все включено!"
});

receiveBtn.addEventListener('click', function() {
	modal.style.display = "block"
});

close.addEventListener('click', function() {
	modal.style.display = "none"
});


function pole (){
	let name = (nameInput.value != "")?"Меня зовут " + nameInput.value + "" : "",
		phone = (phoneInput.value != "")?", мой номер " + phoneInput.value + "" : "",
		mail = (mailInput.value != "")?", мой email " + mailInput.value : "";
	text.value = name + phone + mail
};

nameInput.addEventListener("input", pole);
phoneInput.addEventListener("input", pole);
mailInput.addEventListener("input", pole);

