document.getElementById("intro_button").addEventListener("click", introToNormal);
document.getElementById("normal_button").addEventListener("click", normalToAngry);
document.getElementById("angry_button").addEventListener("click", angryToCozy);
document.getElementById("cozy_button").addEventListener("click", cozyToSpecial);
document.getElementById("special_button").addEventListener("click", SpecialModal);

function introToNormal() {
	document.getElementById("normal_cat").style.display = "flex"
	document.getElementById("intro_cat").style.display = "none"
}

function normalToAngry() {
	document.getElementById("angry_cat").style.display = "flex"
	document.getElementById("normal_cat").style.display = "none"
}

function angryToCozy() {
	document.getElementById("chill_cat").style.display = "flex"
	document.getElementById("angry_cat").style.display = "none"
}

function cozyToSpecial() {
	document.getElementById("special_cat").style.display = "flex"
	document.getElementById("chill_cat").style.display = "none"
}

function SpecialModal() {
	document.getElementById('lastModal').style.display = "block";

}
