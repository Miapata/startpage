function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	var time = new Date();
	time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
	
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date-display"
	).innerHTML = `${time} | ${month}/${day}/${year}`;
	setTimeout(showTime, 0);
}

function get_hours(time_string) {
    return new Date("2000-01-01 " + time_string).getHours() // 22
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();
