const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");
const numbers = document.querySelectorAll(".number");
let currentActive = 1;

next.addEventListener("click", () => {
	currentActive++;

	if (currentActive > numbers.length) {
		currentActive = numbers.length;
	}

	update();
});

prev.addEventListener("click", () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	update();

	
});

function update() {
	numbers.forEach((number, index) => {
		if (index < currentActive) {
			number.classList.add("active");
		} else {
			number.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");

	console.log(actives);

	let progressWidth = ((actives.length - 1) / (numbers.length - 1)) * 100 + "%";

	progress.style.width = progressWidth;

	console.log(actives.length);

	if (actives.length > 1) {
		prev.disabled = false;
	} else {
		prev.disabled = true;
	}

	if (actives.length === numbers.length) {
		next.disabled = true;
	} else {
		next.disabled = false;
	}
}
