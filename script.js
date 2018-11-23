function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа");
	
	function showSkills() {
		let skills = ["html", "css", "photoshop"];
		for (let i = 0; i < skills.length; i++){
			//Я владею html <br>
			console.log ("Я владею " + skills[i]);
		}
	}
	
	showSkills();
	
	function checkAge() {
		if (age > 18) {
			console.log ("Вы взрослый!");
		} else {
			console.log ("Вы несовершеннолетний!");
		}
	}
	
	function calcPow(num){
		return num*num;
	}
	
	calcPow(4);
}

myFirstApp("Natalia", 22);
