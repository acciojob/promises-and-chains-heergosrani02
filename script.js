//your JS code here. If required.
let age = document.getElementById("age");
let name = document.getElementById("name");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
	if(!age.value || !name.value){
		alert("Please enter valid details");
	}
	else{
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if(age.value >= 18){
					resolve(`Welcome, ${name.value}. you can vote.`)
				}
				else{
					reject(`Oh sorry ${name.value}. you aren't old enough.`);
				}
		}, 2000);
})
.then(message => alert(message))
.catch(error => alert(error));
}
});