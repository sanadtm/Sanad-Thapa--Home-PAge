let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
	// Add your code here
	event.preventDefault();
	var username = document.querySelector("#username");
	var email = document.querySelector("#email");
	var radio1 = document.querySelector("#radioy");
	var radio2 = document.querySelector("#radion");
	var date = document.querySelector("#date");
	var password = document.querySelector("#password");
	if (
		// Empty Form Check
		username.value == "" &&
		email.value == "" &&
		!radio1.checked &&
		!radio2.checked &&
		date.value == "" &&
		password.value == ""
	) {
		console.warn("You Must enter Some data to Submit this form");
	} else {
		// Not Empty Form
		console.log("======Form Submition=====");
		if (username.value == "") {
			console.log("UserName  : No Submission ");
		} else {
			console.log("UserName  : " + username.value);
		}
		if (email.value == "") {
			console.log("Email     : No Submission ");
		} else {
			console.log("Email     : " + email.value);
		}
		if (radio1.checked) {
			console.log("NewsLetter: YES");
		} else if (radio2.checked) {
			console.log("NewsLetter: NO");
		} else {
			console.log("NewsLetter: No Submission");
		}
		if (date.value == "") {
			console.log("Date      : No Submission ");
		} else {
			console.log("Date      :" + date.value);
		}
	}
}
