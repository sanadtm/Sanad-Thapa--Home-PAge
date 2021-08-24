function changeinto() {
	document.getElementById("b_photo").src = "photo/sanad6.jpg";
}
function changeback() {
	document.getElementById("b_photo").src = "photo/sanadpcn.jpg";
}
let form1 = document.querySelector("form");

form1.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	let name = document.querySelector("#name");
	let email = document.querySelector("#email");
	let text = document.querySelector("#message");
	if (
		// Empty Form Check
		name.value == "" &&
		email.value == "" &&
		text.value == ""
	) {
		console.warn("You Must enter Some data to Submit this form");
	} else {
		// Not Empty Form
		console.log("======Form Submition=====");
		if (name.value == "") {
			console.log("Name  : No Submission ");
		} else {
			console.log("Name  : " + name.value);
		}
		if (email.value == "") {
			console.log("Email     : No Submission ");
		} else {
			console.log("Email     : " + email.value);
		}
		if (text.value == "") {
			console.log("Your Msg  : No Submission ");
		} else {
			console.log("Your Msg  :" + text.value);
		}
	}
}
